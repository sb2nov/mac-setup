# Sublime Text

[Sublime Text](http://www.sublimetext.com/) is a widely used editor that describes it self as _a sophisticated text editor for code, markup and prose_.

## Installation

Install using Homebrew:

```sh
brew install --cask sublime-text
```

Or [download](https://www.sublimetext.com/) the **.dmg** file and drag-and-drop it to the **Applications** folder.

## Use CLI to open file

Let's create a shortcut through which we can launch Sublime Text from the command-line

```sh
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```

Now you can open a file with `subl myfile.py` or start a new project in the current directory with `subl .`.

## Pricing

Sublime Text is not free but it has an unlimited evaluation period that comes with notification pop-ups asking you to buy it, if you wish to remove the pop-ups you can purchase the tool [here](http://www.sublimetext.com/buy).
