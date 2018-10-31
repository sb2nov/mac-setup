# Homebrew-Cask

[Homebrew-Cask](https://caskroom.github.io/) extends Homebrew and allows you to
install large binary files via a command-line tool. You can for example install
applications like Google Chrome, Dropbox, VLC and Spectacle. No more
downloading `.dmg` files and dragging them to your Applications folder!

## Installation

You need Homebrew on your system to use Cask, and you make Cask available by
adding it as a tap:

    $ brew tap caskroom/cask

## Search

To see if an app is available on Cask you can search on the [official Cask
website](https://caskroom.github.io/). You can also search in your terminal:

    $ brew cask search <package>

## Example Applications

### Quick Look plugins

These plugins add support for the corresponding file type to Mac Quick Look
(In Finder, mark a file and press Space to start Quick Look). The plugins
includes features like syntax highlighting, Markdown rendering, preview of
JSON, patch files, CSV, ZIP files and more.

```sh
$ brew cask install \
    qlcolorcode \
    qlstephen \
    qlmarkdown \
    quicklook-json \
    qlprettypatch \
    quicklook-csv \
    betterzip \
    webpquicklook \
    suspicious-package
```

### App Suggestions

Here are some useful apps that are available on Cask.

```sh
$ brew cask install \
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
