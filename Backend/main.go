package main

import (
	"fmt"
	"log"
	"time"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

func main() {
	iface := "wlan0" // 👈 Change if needed (e.g., en0, eth0)
	snaplen := int32(1600)
	promisc := false
	timeout := pcap.BlockForever

	fmt.Println("🚀 Starting Packet Sniffer on", iface)
	// fmt.Println("📡 Listening... (Press Ctrl+C to stop)\n")

	handle, err := pcap.OpenLive(iface, snaplen, promisc, timeout)
	if err != nil {
		log.Fatalf("❌ Failed to open interface %s: %v", iface, err)
	}
	defer handle.Close()

	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())

	for packet := range packetSource.Packets() {
		logPacket(packet)
	}
}

func logPacket(packet gopacket.Packet) {
	fmt.Println("📦 New Packet Captured")

	if netLayer := packet.NetworkLayer(); netLayer != nil {
		fmt.Println("🔹 Network Layer:", netLayer.LayerType())
	}

	if ipLayer := packet.Layer(layers.LayerTypeIPv4); ipLayer != nil {
		ip, _ := ipLayer.(*layers.IPv4)
		fmt.Printf("🌐 IP: %s ➜ %s\n", ip.SrcIP, ip.DstIP)
	}

	if tcpLayer := packet.Layer(layers.LayerTypeTCP); tcpLayer != nil {
		tcp, _ := tcpLayer.(*layers.TCP)
		fmt.Printf("🔗 TCP: %d ➜ %d | SYN: %v ACK: %v PSH: %v FIN: %v\n",
			tcp.SrcPort, tcp.DstPort, tcp.SYN, tcp.ACK, tcp.PSH, tcp.FIN)
	}

	fmt.Println("🕒 Time:", time.Now().Format("15:04:05"))
	fmt.Println("----------------------------------")
}
