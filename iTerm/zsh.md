# Zsh

We'll install `zsh` for all the features offered by `oh-my-zsh`. The installation and usage is really intutive. The `env.sh` is a config file we maintain so as to not pollute the `~/.zshrc` too much. `env.sh` holds aliases, exports, path changes etc.

### Zsh

Install zsh and zsh completions using homebrew

    brew install zsh zsh-completions

Now you can customize your shell using two frameworks `Prezto` or `Oh My Zsh`. So you should follow one of the two sections below. I personally prefer `Prezto` as that seems to have slightly better performance.

#### Prezto
Install prezto on top of zsh to get additional functionality

    git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

Next create the `~/.zshrc` file by running

    setopt EXTENDED_GLOB
    for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
      ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
    done

edit the `~/.zpreztorc` file and add

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

edit the `.zshrc` by opening the file in a text editor and adding the following below

    # Add env.sh
    source ~/Projects/config/env.sh


#### Oh My Zsh

**Note**: You don't need this section if you installed `Prezto`.

Install oh-my-zsh on top of zsh to get additional functionality

    curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh

if you're still in the default shell, change default shell to zsh manually

    chsh -s /usr/local/bin/zsh

edit the `.zshrc` by opening the file in a text editor

    ZSH_THEME=pygmalion

    plugins=(git colored-man colorize github jira vagrant virtualenv pip python brew osx zsh-syntax-highlighting)

    # Add env.sh
    source ~/Projects/config/env.sh

### env.sh
~~~
#!/bin/zsh

# PATH
export PATH="/usr/local/share/python:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export EDITOR='subl -w'
# export PYTHONPATH=$PYTHONPATH
# export MANPATH="/usr/local/man:$MANPATH"

# Virtual Environment
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Projects
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
alias envconfig="subl ~/Projects/config/env.sh"
~~~
