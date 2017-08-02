# iTerm2

Since we're going to be spending a lot of time in the command-line, let's install a better terminal than the default one. Download and install [iTerm2](http://www.iterm2.com/).

>**Note**: you can also use stock terminal and install iTerm2 via [homebrew](http://sourabhbajaj.com/mac-setup/Homebrew/) `brew cask install iterm2`

In **Finder**, drag and drop the **iTerm** Application file into the **Applications** folder.

You can now launch iTerm, through the **Launchpad** for instance.

Let's just quickly change some preferences.

## Colors and Font Settings

- Set hotkey to open and close the terminal to `command + option + i`
- Go to profiles -> Default -> Terminal -> Check silence bell
- Download [one of iTerm2 color schemes](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/schemes) from here. And then set these to your default profile colors.
- Change the cursor text and cursor color to yellow make it more visible
- Change the font to 14pt Source Code Pro Lite. Source Code Pro can be downloaded from [here](https://github.com/adobe-fonts/source-code-pro/releases/latest).
- If you're using BASH instead of ZSH you could add `export CLICOLOR=1` line to your `~/.bash_profile` file for nice coloring of listings.

[![Screen](https://raw.githubusercontent.com/sb2nov/mac-setup/master/assets/Iterm.png)](https://raw.githubusercontent.com/sb2nov/mac-setup/master/assets/Iterm.png)

## MacOS shortcuts ⌘←, ⌘→ and ⌥←, ⌥→

You might be familiar with shortcuts to skip a word (⌥) or go to start/end of the line (⌘), iTerm is not set up to work with these shortcuts by default.

Open up iTerm2 preferences -> Profiles -> Keys -> Click on + icon (add new Keyboard shortcut)

| shortcut |    action    | send |
|:--------:|:------------:|:----:|
|    ⌘←    | SEND ESC SEQ |  OH  |
|    ⌘→    | SEND ESC SEQ |  OF  |
|    ⌥←    | SEND ESC SEQ |   b  |
|    ⌥→    | SEND ESC SEQ |   f  |

### Source

Huge thanks to [this Q&A + comments](https://stackoverflow.com/questions/6205157/iterm-2-how-to-set-keyboard-shortcuts-to-jump-to-beginning-end-of-line).