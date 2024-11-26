---
  title: "Setting up Home Assistant"
  date: "11/20/2024"
  excerpt: "A writeup of setting up Home Assistant on my Homelab."
---

# IoT (Internet of Things)

In 2024, most people have incorporated some sort of IoT device into their life. 
IoT being anything like a ring doorbell to smart lights to motion sensors and more.
But one problem I've ran into is using multiple apps for different types and 
brands of IoT devices. 

# What is Home Assistant
Home Assistant is *Open source home automation that puts local control and privacy first.*
For me, the main reason is to get all of my devices on one dashboard.
Home Assistant accomplishes this and more.

# Setup
Now my steps will be different than yours, but I want to document what I did.
I personally did all this on my Ubuntu Server that I run at home.

## Downloading virtualbox
This wil be a description of the commands ran, with comments explaining them.
```
sudo apt install virtualbox #installing virtualbox
sudo usermod -aG vboxusers user # adds our user to vboxusers group, a Linux user group that grants us permissions to use virtualbox features
VBoxManage createvm --name hass --ostype Linux_64 --register # creating a VM with the name 'hass'
VBoxManage modifyvm hass --firmware efi # says to the bios to use EFI instead of traditional BIOS firmware.
VBoxManage modifyvm hass --cpus 2 --memory 2048 # add cpu and RAM to the VM
VBoxManage modifyvm hass --nic1 bridged --bridgeadapter enp4s0 # Now this is giving our VM wifi. So to do this, I had to run the command "ipconfig" on my own desktop thats connected to my home network, and then find the name of the network card.
wget https://github.com/home-assistant/operating-system/releases/download/13.2/haos_ova-13.2.vdi.zip # Download the image for Virtualbox from home assistant website. Change this based on the current updated ones.
tar -xf haos_ova-13.2.vdi.zip # unzip the image. you also might have to move this to your respective directory.
VBoxManage storagectl hass --name "SATA Controller" --add sata --bootable on # Add a SATA controller to our VM, which allows it to boot from a drive.
VBoxManage storageattach hass --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium /home/user/VirtualBox VMs/hass/hassos_ova-13.2.vdi #Now this isnt my exact filepath, but you are downloading your home assistant image to the sata controller.
VBoxManage startvm hass --type headless # start the VM headlessly, so no GUI
``` 

This is a rundown and what to run for how to create that VM of Home Assistant.
You could also add this to a startup script for your server, and I personally did that.

# Using Home Assistant
Now on any browser and device connected to the same network as your VM, you can usually navigate to Home Assistant on 
``` homeassistant.local:8123 ``` which is usually found. If it isnt, you can also use
``` ipaddress:8123 ``` of your VM.

## Integrations
Integrations are the bridge between Home Assistant and your IoT devices. This is the way that Home Assistant lets you control your 
smart devices, and for me this was mainly smart lights and google nests. By default, you might have some 
integrations already installed and that was the case for most of my devices, a phillips bulb and the google nests were all found.
I'm not going to go into detail about the specifics here, as you might not have the same devices as me, but it was really cool to see how
everything was found. I assume this works using some multicast address scanning, I remember learning something about that in one of my classes so.

## HACS (Home Assistant Community Store)
Now, I said most of my devices were found but not all. These were my Govee lights that werent detected. So from a quick google search I found some videos discussing the
community store, where people can create integrations for Home Assistant, and then allow me to use them. Now, this is definitely not an entirely safe thing, as its community based, so this is unsupported by Home Assistant themselves.
I knew that the Govee lights I have an API, and I had messed around with it before. But it still didn't solve my problem of multiple apps.
So following a video, I installed HACS which required enabling Advanced mode in the settings, but then it was as simple as 
following the steps on the hacs.xyz website. Then navigating to the HACS store, I found a Govee integration that used that same API to control the smart lights, and trusted it enough to install and use it.

# Conclusion
Overall, Home Assistant was a nice way to use my server more aside from the usual discord bots, game servers, and also work more on my Homelab setup.
It did accomplish my problem of using just one app, but I do still have to play with it a lot more. But it makes everything seamless and fun for the tinkerer, I could even add things like my TV, which I don't really use anymore but was fun to see.
My router too was another thing that could be added, and I for sure want to mess around with that. I would say if you're interested in controlling your IoT devices and maybe more, Home Assistant is a great option and was a quick and easy way to setup in an evening, no matter the skill level.

All of my resources are listed down below, and follow exactly what I did, and this writeup is just a compilation of all these resources.


## Resources:
- https://youtu.be/k02P5nghmfs
- https://academy.networkchuck.com/blog/home-assistant
- https://community.home-assistant.io/t/installing-home-assistant-supervised-on-headless-ubuntu-server-18-04-virtualbox/224699
- https://youtu.be/wZLOTzpiELs
- https://youtu.be/DQ7wfjOQpdY
- https://hacs.xyz/docs/use/download/download/#troubleshooting
