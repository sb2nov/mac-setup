# Zsh

We'll install `zsh` for all the features offered by `oh-my-zsh`. The installation and usage is really intuitive. We will also create the file `env.sh`, it is a config file we maintain so as to not pollute the `~/.zshrc` too much. `env.sh` holds aliases, exports, path changes etc. and you can find it at the bottom of this page.

## Zsh

Install zsh and zsh-completions using Homebrew:

    $ brew install zsh zsh-completions

At this point you can customize your shell by using one of two frameworks `Prezto` or `Oh My Zsh`. You should follow one of the two sections below.

### Install Prezto
Install prezto on top of zsh to get additional functionality:

    $ git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

Next create `~/.zshrc` file by running:

```sh
setopt EXTENDED_GLOB
for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
  ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
done
```

Add modules to Prezto by editing `~/.zpreztorc` and adding:

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

zstyle ':prezto:module:prompt' theme 'paradox'
```

### Install Oh My Zsh

**Note**: You don't need this section if you installed `Prezto`.

Install Oh My Zsh on top of zsh to get additional functionality:

    $ curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh

If you're still in the default shell, change default shell to zsh manually:

    $ chsh -s /usr/local/bin/zsh

Add plugins (they are all optional but recommended) to Oh My Zsh and use theme by editing `~/.zshrc` and adding:

    ZSH_THEME=pygmalion
    plugins=(git colored-man colorize github jira vagrant virtualenv pip python brew osx zsh-syntax-highlighting)

## env.sh

To include `env.sh`, open `~/.zshrc` and add the following:

```sh
source ~/<path to file>/env.sh
```

This file comes with some pre-defined settings, **they are all optional**. Please review them before you use them as your configuration.
~~~
#!/bin/zsh

# PATH
export PATH="/usr/local/share/python:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export EDITOR='subl -w'
# export PYTHONPATH=$PYTHONPATH
# export MANPATH="/usr/local/man:$MANPATH"

# Virtual Environment
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/projects
source /usr/local/bin/virtualenvwrapper.sh

# Owner
export USER_NAME="YOUR NAME"
eval "$(rbenv init -)"

# FileSearch
function f() { find . -iname "*$1*" ${@:2} }
function r() { grep "$1" ${@:2} -R . }

#mkdir and cd
function mkcd() { mkdir -p "$@" && cd "$_"; }

# Aliases
alias cppcompile='c++ -std=c++11 -stdlib=libc++'

# Use sublimetext for editing config files
alias zshconfig="subl ~/.zshrc"
alias envconfig="subl ~/projects/config/env.sh"
~~~
