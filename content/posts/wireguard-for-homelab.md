---
    title: "WireGuard and Flattening my Network"
    date: "2025-09-10"
    excerpt: "A guide and reference for myself on how to self-host WireGuard and thoughts on some network changes."
---

## Overview:
This writeup will serve as an understanding for me, and hopefully a guide for others about what a VPN is, how to self-host one (in this case WireGuard), why you should use a VPN, and also making network decisions for my own record.

## What is a VPN:
When we use the internet, our data may not always be encrypted. While it should be a standard, if we connect to the "free coffee-shop wifi", the chances of them having any real security is next to none. A VPN encrypts the data you send over the network, so nobody can eavesdrop and read your data in plaintext. Essentially adding an extra step for an attacker; having to break the hash. 

One question that came up for me was if our data is fully encrypted, how can it be routed to your destination. This is accomplished via an **Encrypted Tunnel**, which typically works by adding new headers on-top of encrypted data which still have the destination, source, and protocol. 

Once our data reaches the destination, which lets say if you use a VPN service, can be a designated **VPN Concentrator**, which receives encrypted data, decrypts, and sends it to its destination. Then this same process is reversed when we get our response and then we have encrypted traffic.

## How does WireGuard work:
WireGuard like a normal VPN, our packet is created normally, then WireGuard takes the packet and encrypts it using ChaCha20 and adds an extra layer with source, destination, and protocol, then the tunnel sends the encrypted packet to the server. In my case, this will be running on my Ubuntu server, so it will act as a mini VPN Concentrator.

WireGuard also uses the **Noise Protocol Framework**, which is more secure than other protocols like IPsec or SSL/TLS. When our client, (our outside device), connects it uses our private key to prove who we are, then the server does the same with its own keypair. The client and server then establish a mutual handshake and use a symmetric key for the tunnel, where everything is encrypted with ChaCha20 and authenticated with Poly1305.

## Initial Setup:
So the reason I embarked on this project was to access my network from outside my home. Prior to this, my network setup looked like this:
![Initial-Setup](/initial-network.png)
A double NAT, which I learned adds barely any extra security, if any. Since any inbound traffic can still see there's another network/router on the same subnet. My router at the moment has no capabilities for any network segmentation, so I decided to instead to turn the NetGear router into a new AP. The new diagram would look like this:
![After-Setup](/after-setup.png)
So now all devices are on the same network, but dependent on where they are in the home, such as outside for the NetGear, they will connect to whichever AP is better. So now all devices are on the same network, and while didn't put the connection they can now all communicate.

My intention for this was mainly for simplification, as I was unaware before that the prior setup actually doesn't add any security. In the future, I would like to source a router or switch that I can use network segmentation on, one for IoT devices and another for everything else. I would still have to keep the FIOS Router on the network as since I have cable, the boxes can only communicate with the proprietary router but this is all for another day.

## Setting up WireGuard
- To start we can run the command:
`sudo apt update && sudo apt install wireguard -y
This will install WireGuard and also update any packages that are out of date.

- Next, we need to generate those keys the concentrator will use:
`wg genkey | tee server_private.key | wg pubkey > server_public.key`
This command generates a new private key with the name **server_private.key** . Then, it takes the private key as input in the next command and makes a public key from it.

- Now we need to create a WireGuard config file:
`sudo nano /etc/wireguard/wg0.conf`
and put in 
```
[Interface]
PrivateKey = <SERVER_PRIVATE_KEY> # your private key here
Address = 10.0.0.1/24
ListenPort = 51820
SaveConfig = true

PostUp   = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
PublicKey = <CLIENT_PUBLIC_KEY>
AllowedIPs = 10.0.0.2/32

```
This is a basic config file for WireGuard where we define our 
- Private key to use 
- What private IP address to interface
- The listening port which is this case is UDP/51820
- PostUp defining allowing forwarding of packets to and from our network interface
- PostDown which masquerades (masks) traffic from clients to seem like its coming from the router instead of the client.

- Then we start the service using
`sudo systemctl enable wg-quick@wg0`
and
`sudo systemctl start wg-quick@wg0`
which enables the systemd service so WireGuard starts on boot, and the other line is just to start it since we arent restarting.

After this you should then run 
`sudo ufw allow 51820/udp`
to open port 51820, and also port forward on your router.

Then, enable IP forwarding:
```
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

And bring the interface up:
```
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
```
## Client Setup:
On your client, we first want to run the same command to update and install wireguard
`sudo apt update && sudo apt install wireguard -y`

After this, we need to generate client keys:
`wg genkey | tee client_private.key | wg pubkey > client_public.key`

Then create a client configuration file:
```
[Interface]
PrivateKey = <client_private.key>
Address = 10.0.0.2/32
DNS = <DNS_Server_IP> 

[Peer]
PublicKey = <server_public.key>
Endpoint = <Home_Public_IP>:51820
AllowedIPs = 10.0.0.0/24,192.168.1.0/24
PersistentKeepalive = 25
```

In this case, we specify address 10.0.0.2/32 to specify our Client VPN IP.
Our DNS server is either 10.0.0.1 for WireGuards default, or in this case my server IP for AdGuard Home. 
The endpoint is where we are connecting to, so our public IP.
Finally, AllowedIPs at the moment, defines that any traffic sent to our internal network will be routed through the VPN. This is called a **Split Tunnel** setup, and is for testing purposes to ensure we can connect.

After that, start the client tunnel
`sudo wg-quick up wg0`

## Verifying and Troubleshooting:
To verify we have a connection run this on the server:
`sudo wg show`
and it should look like this:
```
user@your-server:~$ sudo wg show
interface: wg0
  public key: <REDACTED>
  private key: (hidden)
  listening port: 51820

peer: <REDACTED>
  endpoint: <REDACTED>:48585
  allowed ips: 10.0.0.2/32
  latest handshake: 4 seconds ago
  transfer: 9.24 KiB received, 3.54 KiB sent
```

This ensures we have a handshake, and the bytes transferred should increase if we're using it.

On the client, some basic pings to the Server's VPN IP, 10.0.0.1 and a device on your LAN is proof as well.

```
ping 10.0.0.1          # Server's VPN IP
ping 192.168.1.x       # LAN device
```

If all is well, you can also change the Client Config to route all internet traffic through WireGuard, by changing 
`AllowedIps = 0.0.0.0/0`

## Reflect:
- I would say I accomplished what I wanted to do with this setup, which was further understanding how a VPN works, and also to have my own self-hosted one to ensure I have more secure traffic on public WIFI.
- WireGuard was my choice of service because its not too much to configure, and it gives me a bit more control over my data. I can also now practice maintaining it, and strengthen my understanding of networking.

## Future:
- I want to write some scripts to automate adding the service to the config file, or look into how to automate that even further and maybe not use a config file. This just requires more research.
- It would be interesting to add an MFA solution as its becoming more and more standardized.
- I also want to send logs from this to a SIEM. I had Splunk setup but am redoing it now since the trial ran out.

### References:
- https://davidshomelab.com/access-your-home-network-from-anywhere-with-wireguard-vpn/
