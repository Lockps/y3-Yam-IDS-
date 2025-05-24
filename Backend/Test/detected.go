package main

import (
	"fmt"
	"log"

	"github.com/google/gopacket/pcap"
)

func main() {
	devices, err := pcap.FindAllDevs()
	if err != nil {
		log.Fatal(err)
	}

	for _, device := range devices {
		fmt.Println("📡 Interface:", device.Name)
		for _, addr := range device.Addresses {
			fmt.Println("  IP:", addr.IP)
		}
	}
}
