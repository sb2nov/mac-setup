# Homebrew Cask
[Homebrew-Cask](https://caskroom.github.io/) extends Homebrew and allows you to install large binary files via a command-line tool. Examples of these files is Google Chrome, Dropbox, VLC and Spectacle.

## Installation
As of December 2015, Cask comes installed with Homebrew, if you have not installed Homebrew see the [Homebrew section](/mac-setup/Homebrew/README.html).

## Search
To see if an app is available on Cask you can search on the [official Cask website](https://caskroom.github.io/search). You can also search using the following command:

    $ brew cask search <package>

## Quick Look plugins
These plugins adds support for the corresponding file type to Mac Quick Look (In Finder, mark a file and press Space to start Quick Look). The plugins includes features like syntax highlighting, markdown rendering, preview of JSON, patch files, csv, zip files and more.

```sh
$ brew cask install \
    qlcolorcode \
    qlstephen \
    qlmarkdown \
    quicklook-json \
    qlprettypatch \
    quicklook-csv \
    betterzipql \
    webpquicklook \
    suspicious-package
```

## App Suggestions
Here are some useful apps that are available on Cask.

```sh
$ brew cask install
    alfred \
    android-file-transfer \
    asepsis \
    appcleaner \
    caffeine \
    cheatsheet \
    docker \
    doubletwist \
    dropbox \
    google-chrome \
    google-drive \
    google-hangouts \
    flux \
    latexian \
    1password \
    pdftk \
    spectacle \
    sublime-text \
    superduper \
    totalfinder \
    transmission \
    valentina-studio \
    vlc
```
