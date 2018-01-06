# System Preferences
First thing you should do is update the system. To do that go: **Apple menu () > About This Mac > Software Update.**

Also upgrade your OS in case you want to work on the latest OS. macOS upgrades are usually free so you might as well keep your machine up to date.

If this is a new computer, there are a couple tweaks you could make to the System Preferences. **These settings are all optional, consider them suggestions.**

## Users & Groups
- Login Options -> Change fast switching user menu to Icon
- Set up Password, Apple ID, Picture, etc.

## Trackpad
- Point & Click
    - Enable Tap to click with one finger
    - Change Secondary click to right corner
    - Uncheck three finger drag
- Scroll & Zoom
    - Uncheck all apart from Zoom in and out

## Dock
- Visual settings
    - Change position to left and make the size of Icons small
- Other settings
    - Remove workspace auto-switching by running the following command:

```
$ defaults write com.apple.dock workspaces-auto-swoosh -bool NO
$ killall Dock
```

## Finder
- Preferences
    - Change 'New Finder windows show:' to something other than 'All My Files' (which is a memory hog)
- Toolbar
    - Update to add path, new folder and delete
- Sidebar
    - Add home and code directory
    - Remove shared and tags
    - New finder window to open in the home directory

## Menubar
- Remove the display and Bluetooth icons
- Change battery to show percentage symbols

## Spotlight
- Uncheck fonts, images, files etc.
- Uncheck the keyboard shortcuts as we'll be replacing them with Alfred

## Accounts
- Add an iCloud account and sync Calendar, Find my mac, Contacts etc.

## User Defaults
- Enable repeating keys by pressing and holding down keys: `defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false` (and restart any app that you need to repeat keys in)

## How to write to NTFS on OS X Yosemite and El Capitan

### Install Homebrew and Homebrew Cask
- Instructions [here](http://sourabhbajaj.com/mac-setup/Homebrew/README.html)

### Update Homebrew formulae:

    $ brew update

### Install osxfuse
- If you are on OS X 10.11 (El Capitan), install the (3.x.x) from https://github.com/osxfuse/osxfuse/releases.

    $ brew cask install osxfuse

### Install ntfs-3g

    $ brew install homebrew/fuse/ntfs-3g

### If you are on OS X 10.11 (El Capitan), temporary disable System Integrity Protection

 - **Reboot** and hold CMD+R to get in recovery mode
 - Open the terminal and type:

    $ csrutil disable

 - **Reboot** normally

### Create a symlink for mount_ntfs

    $ sudo mv /sbin/mount_ntfs /sbin/mount_ntfs.original
    $ sudo ln -s /usr/local/sbin/mount_ntfs /sbin/mount_ntfs

### If you are on OSX 10.11 (El Capitan), re-enable System Integrity Protection
 - **Reboot** and hold CMD+R to get in recovery mode
 - Open the terminal and type

    $ csrutil enable

 - **Reboot** normally
 - Done
