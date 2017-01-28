# System Preferences

First thing you need to do, on any OS actually, is update the system! For that: **Apple Icon &gt; Software Update.**  
Also upgrade your OS incase you want to work on the latest OS. Yosemite is a free upgrade so please check that.

If this is a new computer, there are a couple tweaks you would like to make to the System Preferences. Feel free to follow these, or to ignore them, depending on your personal preferences.

### Users and Groups

* Login Options-&gt; Change fast switching user menu to Icon
* Set up Password, Apple id, Picture , etc.

### ~~Trackpad~~

* ~~Point & Click~~
  * ~~Enable Tap to Click with one finger~~
  * ~~Change secondary click to right corner~~
  * ~~Uncheck three finger drag~~
* ~~Scroll and Zoom~~
  * ~~Uncheck all apart from Zoom in and out~~

### Dock

* Check Automatically hid and show the Dock
* Make the size of Icons smaller

### Finder

* Toolbar
  * Update to add path, new folder and delete
* Sidebar
  * Add home and code directory
  * Remove shared and tags
  * New finder window to open in the home directory

### Menubar

* Remove the display and bluetooth icons
* Change battery to show percentage symbols

### Spotlight

* Uncheck everything but applications

* Change the keyboard shortcut to alt-Space as we'll be replacing them with Alfred

* Privacy &gt; Add all folders but applications

### Accounts

* Add an iCloud account and sync Calendar, Find my mac, Contacts etc.

### Safari

* Search&gt; Change to DuckDuckGo
* Privacy &gt; Cookies & Website data &gt; Allow from current website only

### ~~Write to NTFS on OSX Yosemite and El Capitan~~

#### ~~Install Homebrew and Homebrew Cask~~

* ~~Instructions ~~[~~here~~](http://sourabhbajaj.com/mac-setup/Homebrew/README.html)~~!~~

#### ~~Update Homebrew formulae:~~

```
$ brew update
```

#### ~~Install osxfuse~~

* ~~If you are on OSX 10.11 \(El Capitan\), install the \(3.x.x\) from ~~[~~https://github.com/osxfuse/osxfuse/releases~~](https://github.com/osxfuse/osxfuse/releases)~~.~~

```
$ brew cask install osxfuse
```

#### ~~Install ntfs-3g~~

```
$ brew install homebrew/fuse/ntfs-3g
```

#### ~~If you are on OSX 10.11 \(El Capitan\), temporary disable System Integrity Protection.~~

* ~~**reboot** and hold CMD+R to get in recovery mode~~
* ~~Open the terminal and type~~

```
$ csrutil disable
```

* ~~**reboot** normally~~

#### ~~Create a symlink for mount\_ntfs~~

```
$ sudo mv /sbin/mount_ntfs /sbin/mount_ntfs.original
$ sudo ln -s /usr/local/sbin/mount_ntfs /sbin/mount_ntfs
```

#### ~~If you are on OSX 10.11 \(El Capitan\), re-enable System Integrity Protection.~~

* ~~**reboot** and hold CMD+R to get in recovery mode~~
* ~~Open the terminal and type~~

```
$ csrutil enable
```

* ~~**reboot** normally~~



