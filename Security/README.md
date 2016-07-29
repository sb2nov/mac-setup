---
author: Martin Woschek
---

# Security and safety

A development machine should be secured against threads as well as any other machine, if not even especially a development machine. Therefore we should install

* a virus scanner,
* a firewall, and
* disk encryption.

### Virus scanner

Head over to [Avira](https://www.avira.com/), download and install their latest free package.

### Firewall

This one is a bit controversial. If you do not install software which allows network access of any kind, skip it. If you use servers like apache or mysql, and if you don't want your machine reachable from other people in the same hotspot, consider turning the built-in firewall on. This especially applies if you develop software reachable over the network \(and if only websockets\).

http:\/\/www.howtogeek.com\/205108\/your-mac%E2%80%99s-firewall-is-off-by-default-do-you-need-to-enable-it\/

### Disk Encryption

Another controversial point. If you have a desktop machine in a secured building, you probably do not need disk encryption. If you travel a lot and take your notebook with you \(including all your sources\), you should perhaps travel with disk encryption enabled. I cannot tell the impact of disk encryption on system performance because I never used my MacBook unencrypted.

1. Choose Apple menu \(\) &gt; System Preferences, then click Security & Privacy.
2. Click the FileVault tab.
3. Click the Lock button, then enter an administrator name and password.
4. Click Turn On FileVault.
5. Follow the instructions. In my opinion you should create a local and offline possibility to disable encryption, when you are asked how to regain access in case of anything.

https:\/\/support.apple.com\/en-us\/HT204837

