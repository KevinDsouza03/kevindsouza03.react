---
    title: "Redoing my Homelab"
    date: "2024-11-16"
---

# Redoing my Homelab

## What is a Homelab
I would say a Homelab is a device or collection of devices that can help you simulate or host your own services. Such as maybe your own web server which can be used for many things, like your own cloud storage or a network wide adblock. It can also be a way to control your smart devices using your own setup or custom firmware or even a raspberry pi. For me, I have my own Ubuntu server based off my first ever desktop from over a decade ago. But I never formally made a "Homelab" setup on my actual computer. So this redoing would be me installing and configuring Kali Linux on my own computer, for a second time and documenting it.

## Steps
I chose to use VirtualBox since I am already familiar with the setup from past experiences on both simulating a Windows and Linux server when deciding on my own. But the part I was not familiar with was **isolating the network**. I referenced a video by NetworkChuck (listed below), and followed his steps for that.

- Download the ISO from the Kali Linux website.
- Open VirtualBox and "Add" the VM.
- Modify RAM or Cores if needed.
- Follow the dialog and done!

## Setting up the Network
Now this I was unfamiliar with. I've used VirtualBox before but never really "used" it. I'll describe this part by showing the commands ran, and then explaining them a bit more in-depth for my own understanding.

- Go to Settings on your Kali Linux VM.
- Click "Network" and change the "Attached to" to "Internal Network".
- Name it anything you want, but we will be using it later.
- Open your CMD. *I am personally on Windows for my Desktop*
- Navigate to your installation of VirtualBox. *I have 3 different drives on my computer so I had to find mine, a typical one would be in Program Files/Oracle/VirtualBox or something along the lines of that*
- Finally, we run the command:
`vboxmanage dhcpserver add --network=intnet --server-ip=10.38.1.1 --lower-ip=10.38.1.110 --upper-ip=10.38.1.120 --netmask=255.255.255.0 --enable`

### Explaining the Command:
- VBoxManage: Used in the CLI interface to VirtualBox. Being an interface, this is basically everything to control VirtualBox from the command line. No need for a GUI here.
- dhcpserver: a Dynamic Host Configuration Protocol Server is a server on all networks that leases IP addresses to devices on a network, alongside other configuration parameters which we defined in the rest of the command. Since we are isolating the network, we are basically making a new network for this device, so it needs its own DHCP Server
- add: A command param for VBoxManage.
- network: An option defining the name of the internal network where the DHCP server will be added. This is where we put the name we chose above.
- server-ip: This sets the server ip of the DHCP server itself, so ours can be this or anything else you want to change it to.
- lower-ip: In networking, you typically have a range of IP addresses to choose from, and in this case we are defining our lower bound for any device on the internal network.
- upper-ip: The reverse of the lower-ip option, thi sis the last possible address.
- netmask: A subnet mask is like an IP filter for networks and hosts. This is a default mask used for class C IP addresses. Basically, 255 is the max since we are using a max of 8 bits per octet. In this case, `255.255.255` *locks* the `10.38.1` from being altered. In this case, our subnet mask can also be expressed as a `/24`, meaning we are allowing 8 bits or 255 addresses for hosts, and the remaining 24 bits are for the network. This also allows for subnetting, which lets us divide networks into subnets to be more manageable, but thats a different topic for another day. I just like networking.
- enable: Enable the DHCP server after its created.


## Final
Now we have a fully working Kali Linux VM, for the basis of our Homelab. The default sign in is 'Kali':'Kali', so you can use that to sign in after you start the VM. Creating a Homelab is a great way to introduce yourself into Virtual Machines and a very basic intro of how networks alongside the computer can work. This was a fun way to brush up on some skills, even though they are very basic here. I plan on trying out some Hack the Box CTFs as I have in the past, and documenting my experience with them and what I learn! I also definitely want to update some of my personal server things, like maybe hosting this website off of it and learning how that works. 


## Resources Used:
- https://youtu.be/mvsiuLzpx2E
- https://www.virtualbox.org/manual/ch08.html#vboxmanage-createvm
