# iTerm2
> [iTerm2](http://www.iterm2.com/) is a replacement for Terminal and the successor to iTerm. It works on Macs with macOS 10.10 or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted.

## Installation
You can get the app from [iTerm2 downloads page](http://www.iterm2.com/downloads.html). Once downloaded, drag and drop the **iTerm** application file into your **Applications** folder.

>**Note**: Instead of downloading and installing iTerm2 manually, you can use [Homebrew](http://sourabhbajaj.com/mac-setup/Homebrew/) `brew cask install iterm2`

## Customization
### Colors and Font Settings
Here are some suggested settings you can change or set, **they are all optional**.

- set hot-key to open and close the terminal to `command + option + i`
- go to profiles -> Default -> Terminal -> Check silence bell to disable the terminal session from making any sound
- download [one of iTerm2 color schemes](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/schemes) and then set these to your default profile colors
- change the cursor text and cursor color to yellow make it more visible
- change the font to 14pt Source Code Pro Lite. Source Code Pro can be downloaded from [project's github repository](https://github.com/adobe-fonts/source-code-pro/releases/latest).
- if you're using BASH instead of ZSH you can add `export CLICOLOR=1` line to your `~/.bash_profile` file for nice coloring of listings

[![Screen](https://raw.githubusercontent.com/sb2nov/mac-setup/master/assets/Iterm.png)](https://raw.githubusercontent.com/sb2nov/mac-setup/master/assets/Iterm.png)

### MacOS shortcuts ⌘←, ⌘→ and ⌥←, ⌥→
You might be familiar with shortcuts to skip a word (⌥) or go to start/end of the line (⌘). Of course you can configure iTerm2 to support these shortcuts:

open up iTerm2 preferences (⌘,) -> Profiles -> Keys -> Click on + icon (add new Keyboard shortcut).

| shortcut |    action    | send |
|:--------:|:------------:|:----:|
|    ⌘←    | SEND ESC SEQ |  OH  |
|    ⌘→    | SEND ESC SEQ |  OF  |
|    ⌥←    | SEND ESC SEQ |   b  |
|    ⌥→    | SEND ESC SEQ |   f  |
