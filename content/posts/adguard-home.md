---
    title: "AdGuard Home - Network Wide Software for blocking ads and trackers"
    date: "2025-05-10"
    excerpt: "A walkthrough on setting up AdGuard Home on a Linux server."
---



## Ads and Tracking
Most people who use the internet have been in the scenario where you're just browsing the internet, reading an article or watching a video and a bunch of ads pop up out of nowhere. Ads are not bad, but many of them can be quite annoying. In the browser, we use ad-blockers, but these need to be configured on every single device and have to be updated. Trackers are also built into many sites and are used to send you more targeted ads. Another scenario we might all know is mentioning something then suddenly getting an ad for it. This is a bit creepy for sure and not all devices support ad-blockers.

The solution is a network wide ad-blocker. This is a way to block ads and trackers on your entire network without having to configure ad-blockers on every device. In this case, I set up AdGuard Home, and I'll walk you through how to do the same.

## What is a DNS Server
To understand how AdGuard Home works, first we should understand what a DNS Server is. DNS, or Domain Name System, works like a phonebook for the Internet. Now we don't really use phonebooks anymore, but lets use your contacts app as an example. When you want to call your friend, you lookup their name in the app and click and call. This process could be simplified to translating your friends name or whatever you save their contact as, to their phone number. DNS does the same thing, but instead translates a domain name like "google.com" to an IP address. Now we still see "google.com" in our browser, but in the background the IP is referenced and we can then use the site.

## What is Network-Wide Ad Blocking
Network-wide ad blocking is exactly what it sounds like, all ads and trackers are blocked at the network level, which prevents them from reaching your devices. For this setup, we will use the "black-hole" technique , which is able to protect all your devices from one main management system.

## How does AdGuard Home work
As previously said, AdGuard Home operates as a DNS server. So, when an ad is loaded on your browser its accessed in the same way "google.com" is, by resolving a domain name and opening a website, which is just the ad. The way AdGuard works is by re-routing these domains to a "black-hole", which is essentially responding with a 0.0.0.0 IP address when requesting for an ad, and essentially blocks the request and responds with a the zero IP. Then, no ad can be loaded therefore it won't be shown.

Some other features of AdGuard Home:
- **DNS-based ad blocking**
- **Filter lists with customization**: Essentially a blacklist against any unwanted domains. This can be further customized with additional lists for additional needs, and completely custom lists.
- **Parental controls**: You are also able to restrict harmful content using AdGuard.
- **Logging and Analytics**: Network traffic can be analyzed with in-depth logs and reports.

## Installing AdGuard Home on the Homelab
In my case, I'll be using my Linux server, so the rest of this tutorial will reference this type of setup. AdGuard Home also provides scripts for automated installation, and for linux you can run:\

``curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v``

Other scripts are also located on their [Github repo](https://github.com/AdguardTeam/AdGuardHome).

After this runs, you can access the web-interface by navigating to ``http://<server-ip>:3000``. You then will setup an admin account and configure your upstream DNS servers, which are where after adblocking the name resolution happens. Personally, I use CloudFlare. Once you setup AdGuard, the most annoying part for me was finding the option to setup AdGuard as my primary DNS server in my router. But once you find it, you set it to your server IP, and then it should just work. After following the setup, AdGuard Home's interface will run on port ``80`` so you can now just open it on a web browser using the same ip address.

## My own configurations
- **Static IP Address**: I think setting your servers static IP address is a non-negotiable for this, and I personally am able to do this using my routers interface.
 
- **Upstream DNS Servers**: AdGuard Home does work as a DNS server, but it still needs to translate anything unknown to its lists, therefore you can configure another DNS server to be referenced. In my case, I used the default Quad9 server and CloudFlare's as a backup. I also chose to use DNS-over-HTTPS (DoH) which encrypts DNS traffic between AdGuard and the upstream DNS servers.

- **DNS Blocklists**: I personally am using about 8 lists, which are
- AdGuard DNS Filter
- AdAway Default Blocklist
- Steven Black's List
- AdGuard DNS Popup Hosts filter
- AWAvenue Ads RUle
- HaGeZi's Pro++ Blocklist
- Phishing URL Blocklist
- Dandelion Sprout's Anti-Malware
- HaGeZi's Threat Intelligence Feed
- Phishing Army
- ph00lt0

Now why am I using so many lists? Honestly I was just going on sites and if an ad wasnt blocked, adding them. There probably is a better way to do it, but the more the merrier!

- **Opening Port 53**: DNS operates on port 53. I forgot to run ``sudo ufw allow 53`` so my server would actually function as a DNS server. 

## Conclusion
AdGuard Home is a easy way to setup your own DNS server for the purpose of ad-blocking in your own homelab. Their commitment to open-source is a nice factor since you can be sure they won't be selling any of your data. You can then use them comfortable to create a more secure and streamlined, ad-free experience for all devices across your network. This is also a nice way to get more familiar with networking and has only a small learning curve.
