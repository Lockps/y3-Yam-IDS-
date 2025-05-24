package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"sync"
	"time"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

type PacketInfo struct {
	Count      int    `json:"count"`
	Time       string `json:"time"`
	SrcIP      string `json:"src_ip"`
	SrcHost    string `json:"src_host"`
	SrcCountry string `json:"src_country"`
	SrcISP     string `json:"src_isp"`
	SrcOrg     string `json:"src_org"`
	DstIP      string `json:"dst_ip"`
	DstHost    string `json:"dst_host"`
	DstCountry string `json:"dst_country"`
	DstISP     string `json:"dst_isp"`
	DstOrg     string `json:"dst_org"`
	SrcPort    uint16 `json:"src_port"`
	DstPort    uint16 `json:"dst_port"`
	Protocol   string `json:"protocol"`
	Flags      string `json:"flags"`
}

type BandwidthInfo struct {
	BytesPerSec int64   `json:"bytes_per_sec"`
	Mbps        float64 `json:"mbps"`
}

type IPGeoInfo struct {
	Status  string `json:"status"`
	Country string `json:"country"`
	Region  string `json:"regionName"`
	City    string `json:"city"`
	ISP     string `json:"isp"`
	Org     string `json:"org"`
	Query   string `json:"query"`
}

var (
	iface      = `\Device\NPF_{08503735-DD79-4E2C-A14C-0983500F53B8}`
	snaplen    = int32(1600)
	promisc    = false
	timeout    = pcap.BlockForever
	packetLog  = []PacketInfo{}
	mu         sync.Mutex
	totalBytes int64
	currBw     BandwidthInfo
)

func main() {
	listInterfaces()

	fmt.Println("🚀 Starting Packet Sniffer on", iface)
	go startSniffer()

	http.Handle("/packets", corsMiddleware(http.HandlerFunc(getPackets)))
	http.Handle("/bandwidth", corsMiddleware(http.HandlerFunc(getBandwidth)))

	fmt.Println("🌐 Serving API at http://localhost:8080/")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func listInterfaces() {
	devices, err := pcap.FindAllDevs()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Available interfaces:")
	for _, device := range devices {
		fmt.Printf("- Name: %s\n", device.Name)
		for _, addr := range device.Addresses {
			fmt.Printf("  IP: %s\n", addr.IP)
		}
	}
	fmt.Println()
}

func startSniffer() {
	handle, err := pcap.OpenLive(iface, snaplen, promisc, timeout)
	if err != nil {
		log.Fatalf("❌ Failed to open interface %s: %v", iface, err)
	}
	defer handle.Close()

	handle.SetBPFFilter("tcp port 80 or tcp port 443")
	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	packetCount := 0

	// Goroutine to update bandwidth every second
	go func() {
		ticker := time.NewTicker(time.Second)
		defer ticker.Stop()
		for range ticker.C {
			mu.Lock()
			bytes := totalBytes
			totalBytes = 0
			currBw.BytesPerSec = bytes
			currBw.Mbps = float64(bytes*8) / 1_000_000 // bits to Mbps
			mu.Unlock()
		}
	}()

	for packet := range packetSource.Packets() {
		// Count packet size for bandwidth
		mu.Lock()
		totalBytes += int64(len(packet.Data()))
		mu.Unlock()

		ipLayer := packet.Layer(layers.LayerTypeIPv4)
		tcpLayer := packet.Layer(layers.LayerTypeTCP)
		if ipLayer == nil || tcpLayer == nil {
			continue
		}

		ip := ipLayer.(*layers.IPv4)
		tcp := tcpLayer.(*layers.TCP)
		srcIP := ip.SrcIP.String()
		dstIP := ip.DstIP.String()
		srcGeo := fetchIPGeo(srcIP)
		dstGeo := fetchIPGeo(dstIP)

		packetCount++
		info := PacketInfo{
			Count:      packetCount,
			Time:       time.Now().Format("15:04:05"),
			SrcIP:      srcIP,
			DstIP:      dstIP,
			SrcHost:    resolveHost(srcIP),
			DstHost:    resolveHost(dstIP),
			SrcPort:    uint16(tcp.SrcPort),
			DstPort:    uint16(tcp.DstPort),
			Protocol:   "TCP",
			Flags:      fmt.Sprintf("SYN:%v ACK:%v PSH:%v FIN:%v", tcp.SYN, tcp.ACK, tcp.PSH, tcp.FIN),
			SrcCountry: safeGeoLabel(srcGeo),
			DstCountry: safeGeoLabel(dstGeo),
			SrcISP:     safeISPLabel(srcGeo),
			DstISP:     safeISPLabel(dstGeo),
			SrcOrg:     safeOrgLabel(srcGeo),
			DstOrg:     safeOrgLabel(dstGeo),
		}

		fmt.Printf("Packet %d: %s:%d -> %s:%d | %s | %s\n", info.Count, info.SrcIP, info.SrcPort, info.DstIP, info.DstPort, info.SrcISP, info.DstISP)

		mu.Lock()
		packetLog = append(packetLog, info)
		if len(packetLog) > 100 {
			packetLog = packetLog[len(packetLog)-100:]
		}
		mu.Unlock()
	}
}

func getPackets(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(packetLog)
}

func getBandwidth(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(currBw)
}

func resolveHost(ip string) string {
	names, err := net.LookupAddr(ip)
	if err != nil || len(names) == 0 {
		return "unknown"
	}
	return names[0]
}

func fetchIPGeo(ip string) *IPGeoInfo {
	resp, err := http.Get("http://ip-api.com/json/" + ip)
	if err != nil {
		return nil
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	var geo IPGeoInfo
	if err := json.Unmarshal(body, &geo); err != nil {
		return nil
	}
	if geo.Status != "success" {
		return nil
	}
	return &geo
}

func safeGeoLabel(geo *IPGeoInfo) string {
	if geo != nil {
		return fmt.Sprintf("%s, %s", geo.Country, geo.City)
	}
	return "unknown"
}

func safeISPLabel(geo *IPGeoInfo) string {
	if geo != nil && geo.ISP != "" {
		return geo.ISP
	}
	return "unknown"
}

func safeOrgLabel(geo *IPGeoInfo) string {
	if geo != nil && geo.Org != "" {
		return geo.Org
	}
	return "unknown"
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}
