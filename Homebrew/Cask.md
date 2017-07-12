# Homebrew Cask

Let's see if we can get the elegance, simplicity, and speed of Homebrew for the installation and management of GUI Mac applications such as Google Chrome and Adium.

### Install

As of December 2015, cask comes installed with Homebrew directly.

```
$ brew cask install google-chrome
```

### Search

It is really simple to check if the app is supported by cask by going to the search page on [caskroom.io](http://caskroom.io/)

### Quick look plugins

Some [plugins](https://github.com/sindresorhus/quick-look-plugins) to enable different files to work with Mac Quicklook. Includes features like syntax highlighting, markdown rendering, preview of jsons, patch files, csv, zip files etc.

```
$ brew cask install qlcolorcode qlstephen qlmarkdown quicklook-json qlprettypatch quicklook-csv betterzipql qlimagesize webpquicklook suspicious-package quicklookase qlvideo
```

### App Installation

I'll now cover installation of the apps that I have mentioned in the apps section using cask.

```
$ brew cask install alfred cleanmymac caffeine flux 1password spectacle sublime-text diffmerge bartender calibre cyberduck ipvanish-vpn iterm2 mysqlworkbench sketch spotify dupeguru
```

#### Optional:

```
$ brew cask install asepsis (Control creation of .DS_Store files, not working at Mac OS 10.11 & 10.12)
$ brew cask install fission
$ brew cask install fluid
$ brew cask install skype
$ brew cask install latexian
$ brew cask install superduper
$ brew cask install totalfinder
$ brew cask install valentina-studio
$ brew cask install vlc
```



