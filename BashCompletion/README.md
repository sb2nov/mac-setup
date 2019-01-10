# Bash Completion

Bash completion is a bash function that allows you to auto complete commands or
arguments by typing partially commands or arguments, then pressing the [Tab]
key. This will help you when writing the bash command in terminal.

## Installation

```bash
$ brew install bash-completion
```

Bash completion will be installed in `/usr/local/etc/bash_completion.d`.

For it to work, add this to your `~/.bash_profile`:

```bash
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
```

Or simply type:

```bash
$ echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bash_profile
```

Restart your bash session:

```bash
$ source ~/.bash_profile
```

## Usage

Once you've done this, you can use bash completion by pressing the tab key
twice after a command. For example:

```bash
$ git [tab] [tab]
add            blame          cherry-pick    config         format-patch   gui            merge          push           repack         rm             stage          whatchanged
am             branch         citool         describe       fsck           help           mergetool      range-diff     replace        send-email     stash          worktree
apply          bundle         clean          diff           gc             init           mv             rebase         request-pull   shortlog       status
archive        checkout       clone          difftool       gitk           instaweb       notes          reflog         reset          show           submodule
bisect         cherry         commit         fetch          grep           log            pull           remote         revert         show-branch    tag
```

## More

You can list additional completion packages are available by typing:

```bash
$ brew search completion
```

And you can install them using `brew install` commands, for example:

```bash
$ brew install docker-completion
```

*You can also manually add a bash completion file into
`/usr/local/etc/bash_completion.d`*
