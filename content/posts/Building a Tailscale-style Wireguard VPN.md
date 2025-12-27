---
title: "Tailscale-style Wireguard VPN"
date: "2025-12-27"
excerpt: "Documenting modifying WireGuard to be more Tailscale-style"
---

## Goal: Create a WireGuard VPN that acts like Tailscale full-tunnel exit node

This allows any clients connected to the VPN to:
* Connect to the internet
* Only access other VPN peers
* Deny access to the server's LAN (other devices on the network), VMS and Docker networks

### Motivation

When creating my WireGuard setup I realized I was able to interact with all devices on my network when remoted in. While this may be intentional in some setups, my use case for the VPN is to mainly mask my own traffic. I don't really want to keep the ability to talk to non-peering devices, and would rather just deny all traffic that is unnecessary.

At the moment, my WireGuard server would have anything I need to interact with, such as any file shares or media servers.

### Client Setup

Your client `.ini` should look something like this:
```ini
[Interface]
PrivateKey = <your private key>
Address = 10.0.0.2/32
DNS = <wireguard server public ip>
[Peer]
PublicKey = <wireguard servers public key>
AllowedIPs = 0.0.0.0/0
Endpoint = <wireguard servers public ip>:51820
PersistentKeepalive = 25
```
So there isn't any real change from the past setup, except in my case I had to change the DNS server to be my Adguard Home.

### Server Ini

```
[Interface]
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = <server_private_key>
# Enable forwarding (runtime)
PostUp = sysctl -w net.ipv4.ip_forward=1
# Allow VPN clients to go out to the internet via enp3s0
PostUp = iptables -A FORWARD -i %i -j ACCEPT
PostUp = iptables -A FORWARD -o %i -j ACCEPT
PostUp = iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o enp3s0 -j MASQUERADE
# Block VPN clients from reaching PRIVATE networks (LAN + RFC1918 ranges)
PostUp = iptables -I FORWARD 1 -i %i -d 192.168.0.0/16 -j REJECT
PostUp = iptables -I FORWARD 1 -i %i -d 172.16.0.0/12 -j REJECT
PostUp = iptables -I FORWARD 1 -i %i -d 10.0.0.0/8 -j REJECT
# ...but allow the WireGuard subnet itself (so peers can talk to peers)
PostUp = iptables -I FORWARD 1 -i %i -d 10.0.0.0/24 -j ACCEPT
# Teardown rules
PostDown = iptables -D FORWARD -i %i -j ACCEPT
PostDown = iptables -D FORWARD -o %i -j ACCEPT
PostDown = iptables -t nat -D POSTROUTING -s 10.0.0.0/24 -o enp3s0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -d 192.168.0.0/16 -j REJECT
PostDown = iptables -D FORWARD -i %i -d 172.16.0.0/12 -j REJECT
PostDown = iptables -D FORWARD -i %i -d 10.0.0.0/8 -j REJECT
PostDown = iptables -D FORWARD -i %i -d 10.0.0.0/24 -j ACCEPT
[Peer]
# Peer from above
PublicKey = <peer-publiic_key>
AllowedIPs = 10.0.0.2/32
# ... More peers.
```
### Explanation of PostUp and PostDown rules

* `PostUp` rules:
	+ Enable IP forwarding at runtime: `sysctl -w net.ipv4.ip_forward=1`
	+ Allow incoming traffic from Wireguard to be forwarded to the ethernet interface: `iptables -A FORWARD -i %i -j ACCEPT`
	+ Forward outgoing traffic from the ethernet interface to the Wireguard server: `iptables -A FORWARD -o %i -j ACCEPT`
	+ Configure NAT to masquerade the Wireguard interface IP: `iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o enp3s0 -j MASQUERADE`
	+ Block private networks: `iptables -I FORWARD 1 -i %i -d 192.168.0.0/16 -j REJECT`, `iptables -I FORWARD 1 -i %i -d 172.16.0.0/12 -j REJECT`, `iptables -I FORWARD 1 -i %i -d 10.0.0.0/8 -j REJECT`
	+ Allow VPN clients to communicate with each other: `iptables -I FORWARD 1 -i %i -d 10.0.0.0/24 -j ACCEPT`
* `PostDown` rules:
	+ Delete rules that allow incoming traffic to the Wireguard interface: `iptables -D FORWARD -i %i -j ACCEPT`
	+ Delete NAT rule: `iptables -t nat -D POSTROUTING -s 10.0.0.0/24 -o enp3s0 -j MASQUERADE`
	+ Delete rules that block private networks: `iptables -D FORWARD -i %i -d 192.168.0.0/16 -j REJECT`, `iptables -D FORWARD -i %i -d 172.16.0.0/12 -j REJECT`, `iptables -D FORWARD -i %i -d 10.0.0.0/8 -j REJECT`
	+ Delete rule that allows incoming traffic from the Wireguard interface to the 10.0.0.0/24 subnet: `iptables -D FORWARD -i %i -d 10.0.0.0/24 -j ACCEPT`

### Verifying everything Works

* For me, this was just starting my VPN on my computer, and attempting to use the internet and ping known devices IP addresses.
* Running `sudo wg show` on your Wireguard server should also show a connection, and it's also possible to check this from the Wireguard application on Windows.
### Reflection:
- While this was a bit shorter of a writeup, this was a good security change for the VPN. I could have just used TailScale in the first place, but I wanted to try and learn some more about routing and how to actually implement this.
- In the future, I would like to automate the addition of VPN peers, as at the moment manually editing is a bit of a pain. However, I need to think about how to properly implement this.


### Future Plans:
- I want to implement a web interface for the server, I've seen this a couple times now and it looks cool to see all the services.
- Most likely change some DNS settings so I don't have to remember IP addresses everytime
- Work on a homemade router, either through pfsense or opnsense. This is actually for both work purposes and self-interest.
