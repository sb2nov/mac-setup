# Bash Completion

## Installation

    $ brew install bash-completion

Bash completion will be installed in `/usr/local/etc/bash_completion.d`

For it to work, add this to your `~/.bash_profile`:

```bash
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
```

Or simply type:

    $ echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bash_profile

Restart your bash session:

    $ source ~/.bash_profile

## Usage

Once you've done this. you can use bash completion by hit `TAB` twice after a command. example:

```bash
$ git [tab] [tab]
add            blame          cherry-pick    config         format-patch   gui            merge          push           repack         rm             stage          whatchanged
am             branch         citool         describe       fsck           help           mergetool      range-diff     replace        send-email     stash          worktree
apply          bundle         clean          diff           gc             init           mv             rebase         request-pull   shortlog       status
archive        checkout       clone          difftool       gitk           instaweb       notes          reflog         reset          show           submodule
bisect         cherry         commit         fetch          grep           log            pull           remote         revert         show-branch    tag
```

## More

You can check list additional completion packages are available by typing:

    $ brew search completion

And you can install them using `brew install` command, example:

    $ brew install docker-completion

*You can also add bash completion file into `/usr/local/etc/bash_completion.d` manually*
