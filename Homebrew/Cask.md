# Homebrew-Cask

[Homebrew-Cask](https://github.com/Homebrew/homebrew-cask) extends Homebrew and allows you to
install large binary files via a command-line tool. You can for example install
applications like Google Chrome, Dropbox, VLC and Spectacle. No more
downloading `.dmg` files and dragging them to your Applications folder!

## Search

To see if an app is available on Cask you can search on the [official Cask
website](https://formulae.brew.sh/cask/). You can also search in your terminal:

```sh
brew search <package>
```

## Example Applications

### Quick Look plugins

These plugins add support for the corresponding file type to Mac Quick Look
(In Finder, mark a file and press Space to start Quick Look). The plugins
includes features like syntax highlighting, Markdown rendering, preview of
JSON, patch files, CSV, ZIP files and more.

```sh
brew install --cask \
    qlmarkdown \
    betterzip \
    webpquicklook \
    suspicious-package \
    syntax-highlight
```

### App Suggestions

Here are some useful apps that are available on Cask.

```sh
brew install --cask \
    alfred \
    android-file-transfer \
    appcleaner \
    caffeine \
    cheatsheet \
    colloquy \
    docker \
    doubletwist \
    dropbox \
    google-chrome \
    google-hangouts \
    flux \
    1password \
    rectangle \
    sublime-text \
    superduper \
    transmission \
    valentina-studio \
    vlc
```
