---
title: Security
---


A development machine should be secured against threats as well as any other machine \(or even _especially_ a development machine\). Therefore we will setup

* a firewall
* disk encryption

## Firewall

If you run potentially vulnerable software you don't want to be accessed from other machines, consider turning the built-in firewall on. This particularly applies if you develop network software.

To turn the built-in firewall on:

1. Choose Apple menu \(\) > System Settings, then click Network.
2. Click Firewall.
3. Turn on Firewall.
4. Click Options to configure which apps are allowed incoming connections.

> **Note**: On macOS versions before Ventura, this is under System Preferences > Security & Privacy > Firewall.

## Disk Encryption

If you travel a lot and take your notebook with you \(including all your source codes\), you should enable disk encryption.

The following steps were taken from the [official apple support page](https://support.apple.com/en-us/HT204837) on this:

1. Choose Apple menu \(\) > System Settings, then click Privacy & Security.
2. Scroll down to the FileVault section.
3. Click Turn On FileVault.
4. Follow the instructions. You should create a local and offline possibility to disable encryption, when you are asked how to regain access in case of anything.

> **Note**: On newer Apple Silicon Macs, data encryption is enabled by default.
