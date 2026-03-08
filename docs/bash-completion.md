---
title: Bash Completion
---


Bash completion is a bash function that allows you to auto complete commands or
arguments by typing partially commands or arguments, then pressing the [Tab]
key. This will help you when writing the bash command in terminal.

## Install Latest Bash

macOS ships with an outdated version of Bash (3.2). You can install the latest
version using Homebrew:

```sh
brew install bash
```

To use the Homebrew-installed Bash as your default shell, add it to the list of
allowed shells and set it:

```sh
sudo sh -c 'echo "$(brew --prefix)/bin/bash" >> /etc/shells'
chsh -s "$(brew --prefix)/bin/bash"
```

## Installation

Use `bash-completion@2`, which is designed for Bash 4.2+ (the version installed
by Homebrew):

```sh
brew install bash-completion@2
```

For it to work, add this to your `~/.bash_profile`:

```sh
[[ -r "$(brew --prefix)/etc/profile.d/bash_completion.sh" ]] && . "$(brew --prefix)/etc/profile.d/bash_completion.sh"
```

Restart your bash session:

```sh
source ~/.bash_profile
```

## Usage

Once you've done this, you can use bash completion by pressing the tab key
twice after a command. For example:

```console
$ git [tab] [tab]
add            blame          cherry-pick    config         format-patch   gui            merge          push           repack         rm             stage          whatchanged
am             branch         citool         describe       fsck           help           mergetool      range-diff     replace        send-email     stash          worktree
apply          bundle         clean          diff           gc             init           mv             rebase         request-pull   shortlog       status
archive        checkout       clone          difftool       gitk           instaweb       notes          reflog         reset          show           submodule
bisect         cherry         commit         fetch          grep           log            pull           remote         revert         show-branch    tag
```

## More

You can list additional completion packages available by typing:

```sh
brew search completion
```

And you can install them using `brew install` commands, for example:

```sh
brew install docker-completion
```
