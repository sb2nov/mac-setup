# zsh

The Z shell (also known as `zsh`) is a Unix shell that is built on top of `bash`
and that, since macOS 10.15 Catalina, is the **default** shell for macOS.
Since it has many with additional features, _if you have a version of macOS older than Catalina_,
it's recommended to use `zsh` over `bash`. In this case it's also highly recommended to install a framework with
`zsh` as it makes dealing with configuration, plugins and themes a lot nicer.

We've also included an `env.sh` file where we store our aliases, exports, path
changes etc. We put this in a separate file to not pollute our main
configuration file too much. This file is found in the bottom of this page.

Install `zsh` using Homebrew:

```sh
brew install zsh
```

Now you should install a framework, we recommend to use [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)
or [Prezto](https://github.com/sorin-ionescu/prezto). **Note that you should
pick one of them, not use both.**

The configuration file for `zsh` is called `.zshrc` and lives in your home
folder (`~/.zshrc`).

## Oh My Zsh

[Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) is an open source,
community-driven framework for managing your `zsh` configuration. It comes
with a bunch of features out of the box and improves your terminal experience.

Install Oh My Zsh:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

The installation script should set `zsh` to your default shell, but if it
doesn't you can do it manually:

```sh
chsh -s $(which zsh)
```

### Configuration

The out-of-the-box configuration is usable but you probably want to customise
it to suit your needs. The [Official Wiki](https://github.com/robbyrussell/oh-my-zsh/wiki)
contains a lot of useful information if you want to deep dive into what you
can do with Oh My Zsh, but we'll cover the basics here.

To apply the changes you make you need to either **start new shell instance**
or run:

```sh
source ~/.zshrc
```

#### Plugins

Add plugins to your shell by adding the name of the plugin to the `plugin`
array in your `.zshrc`.

```sh
plugins=(git colored-man-pages colorize pip python brew macos)
```

You'll find a list of all plugins on the [Oh My Zsh Wiki](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins).
Note that adding plugins can cause your shell startup time to increase.

##### zsh-syntax-highlighting

The Syntax Highlighting plugin adds beautiful colors to the commands you are typing.

Clone the zsh-syntax-highlighting plugin’s repo and copy it to the “Oh My ZSH” plugins directory.

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

##### zsh-autosuggestions

This plugin auto suggests any of the previous commands. Pretty handy! To select the completion, simply press → key.

Clone the zsh-autosuggestions plugin’s repo and copy it to the “Oh My ZSH” plugins directory.

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

##### Enforce Changes

To apply the changes you make you need to either **start new shell instance**
or run:

```sh
source ~/.zshrc
```

#### Themes

Changing theme is as simple as changing a string in your configuration file.
The default theme is `robbyrussell`. Just change that value to change theme,
and don't forget to apply your changes.

```sh
ZSH_THEME=pygmalion
```

You'll find a list of themes with screenshots on the
[Oh My Zsh Wiki](https://github.com/robbyrussell/oh-my-zsh/wiki/themes).

## Prezto

[Prezto](https://github.com/sorin-ionescu/prezto) is a configuration framework
for `zsh`; it enriches the command line interface environment with sane
defaults, aliases, functions, auto completion, and prompt themes.

Install Prezto:

```sh
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
```

Next create your `~/.zshrc` by running:

```sh
setopt EXTENDED_GLOB
for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
    ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
  done
```

For more information on customisation visit the [GitHub repository for
Prezto](https://github.com/sorin-ionescu/prezto).

### Modules

Add modules to Prezto by editing `~/.zpreztorc` and adding the modules as
strings to the list:

```sh
zstyle ':prezto:load' pmodule \
  'environment' \
  'terminal' \
  'editor' \
  'history' \
  'directory' \
  'spectrum' \
  'utility' \
  'completion' \
  'git' \
  'syntax-highlighting' \
  'history-substring-search' \
  'prompt'
```

And don't forget to apply your changes by **starting a new shell instance**.

### Themes

To list all available themes run:

```sh
prompt -l
```

Then open up your config file (`~/.zpreztorc`) and change to the theme you want:

```sh
zstyle ':prezto:module:prompt' theme 'minimal'
```

## `env.sh`

To include `env.sh`, open `~/.zshrc` and add the following:

```sh
source ~/<path to file>/env.sh
```

This file comes with some pre-defined settings, **they are all optional**.
Please review them before you use them as your configuration. These are just
examples to show you what you can customise in your shell.

```sh
#!/bin/zsh

# Add commonly used folders to $PATH
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# Specify default editor. Possible values: vim, nano, ed etc.
export EDITOR=vim

# File search functions
function f() { find . -iname "*$1*" ${@:2} }
function r() { grep "$1" ${@:2} -R . }

# Create a folder and move into it in one command
function mkcd() { mkdir -p "$@" && cd "$_"; }

# Example aliases
alias cppcompile='c++ -std=c++11 -stdlib=libc++'
alias g='git'
```
