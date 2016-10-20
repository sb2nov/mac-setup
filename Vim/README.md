# Vim

[Vim](http://www.vim.org/) is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X. 

## Installation

To install the latest version, use homebrew:

```bash
brew install vim
```

## The Ultimate vimrc

[The Ultimate vimrc](https://github.com/amix/vimrc) it's a collection of vimrc configurations to make easy the usage of vim.

To download the The Ultimate vimrc, you need to install the git client. If you need install it, use home brew:

```bash
brew install git
```

Now, download the vimrc files:

```bash
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
```

To install the complete version, run:

```bash
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

To install the _basic_ version, run:

```bash
sh ~/.vim_runtime/install_basic_vimrc.sh
```

### Update

To update the vimrc scripts, run:

```bash
cd ~/.vim_runtime && git pull --rebase && cd -
```