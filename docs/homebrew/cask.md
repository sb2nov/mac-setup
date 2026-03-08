---
title: Cask
---


[Homebrew-Cask](https://github.com/Homebrew/homebrew-cask) extends Homebrew and allows you to
install large binary files via a command-line tool. You can for example install
applications like Brave Browser, Slack, VLC and Rectangle. No more
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

### Browsers

```sh
brew install --cask brave-browser
```

### Terminals

```sh
brew install --cask warp
```

### Editors and IDEs

```sh
brew install --cask \
    cursor \
    zed \
    sublime-text
```

### AI Tools

```sh
brew install --cask \
    claude \
    claude-code
```

### Productivity

```sh
brew install --cask \
    raycast \
    rectangle \
    caffeine \
    shottr \
    appcleaner
```

### Developer Tools

```sh
brew install --cask \
    docker \
    github \
    conductor
```

### Communication and Media

```sh
brew install --cask \
    slack \
    whatsapp \
    spotify
```

### Other Useful Apps

```sh
brew install --cask \
    1password \
    dropbox \
    transmission \
    vlc
```
