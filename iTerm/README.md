# iTerm2

[iTerm2](http://www.iterm2.com/) is an open source replacement for Apple's Terminal. It's highly customizable and comes with a lot of useful features.

## Installation

Use [Homebrew](https://sourabhbajaj.com/mac-setup/Homebrew/) to download and install:

```sh
brew install --cask iterm2
```

## Customization

### Colors and Font Settings

Here are some suggested settings you can change or set, **they are all optional**.

- Set hot-key to open and close the terminal to `command + option + i`
- Go to profiles -> Default -> Terminal -> Check silence bell to disable the terminal session from making any sound
- Download [one of iTerm2 color schemes](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/schemes) and then set these to your default profile colors
- Change the cursor text and cursor color to yellow make it more visible
- Change the font to 14pt Source Code Pro Lite. Source Code Pro can be downloaded using [Homebrew](https://sourabhbajaj.com/mac-setup/Homebrew/) `brew tap homebrew/cask-fonts && brew install --cask font-source-code-pro`
- If you're using BASH instead of ZSH you can add `export CLICOLOR=1` line to your `~/.bash_profile` file for nice coloring of listings

[![Screen](https://raw.githubusercontent.com/sb2nov/mac-setup/main/assets/Iterm.png)](https://raw.githubusercontent.com/sb2nov/mac-setup/main/assets/Iterm.png)

### MacOS shortcuts ⌘←, ⌘→ and ⌥←, ⌥→

You might be familiar with shortcuts to skip a word (⌥) or go to start/end of the line (⌘). iTerm is not set up to work with these shortcuts by default but here's how you set them up:

Open up iTerm2 preferences (⌘ + ,) -> Profiles -> Keys -> Click on `+` icon (add new Keyboard shortcut).

| shortcut |         action       | Esc+ |
|:--------:|:--------------------:|:----:|
|    ⌘←    | Send Escape Sequence |  OH  |
|    ⌘→    | Send Escape Sequence |  OF  |
|    ⌥←    | Send Escape Sequence |   b  |
|    ⌥→    | Send Escape Sequence |   f  |

### Touch ID sudo workaround

If you have enabled sudo authentication with Touch ID you will also need to set `Preferences -> Advanced -> Allow sessions to survive logging out and back in` to `No` in iTerm2 preferences.
