# `fzf`

[`fzf`](https://github.com/junegunn/fzf) is a general-purpose command-line
fuzzy finder. On it's own it's not very useful but when combined with other
tools it becomes super powerful.

## Installation

Use [Homebrew](https://sourabhbajaj.com/mac-setup/Homebrew/README.html) to
install `fzf`:

```sh
brew install fzf
```

If you want to use shell extensions (better shell integration):

```sh
/usr/local/opt/fzf/install
```

which gives you:

- Key bindings (`CTRL-T`, `CTRL-R`, and `ALT-C`) (available for _bash_, _zsh_
 and _fish_)
- Fuzzy auto-completion (available for _bash_ and _zsh_)

## Example Usages

Add any of these functions to your shell configuration file and apply the
changes to try them out. Or just paste the function in your terminal if you
just want to try it out without saving it.

```sh
# fd - cd to selected directory
fd() {
  local dir
  dir=$(find ${1:-.} -path '*/\.*' -prune \
                  -o -type d -print 2> /dev/null | fzf +m) &&
  cd "$dir"
}
```

```sh
# fh - search in your command history and execute selected command
fh() {
  eval $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed 's/ *[0-9]* *//')
}
```

**For more fuzzy search examples see the
[official repo](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh).**

### Chrome history from your terminal

**Note**: original [blog post](https://junegunn.kr/2015/04/browsing-chrome-history-with-fzf/)

Open up your shell config and add following function:

```sh
# ch - browse chrome history
ch() {
  local cols sep
  cols=$(( COLUMNS / 3 ))
  sep='{::}'

  cp -f ~/Library/Application\ Support/Google/Chrome/Profile\ 1/History /tmp/h

  sqlite3 -separator $sep /tmp/h \
    "select substr(title, 1, $cols), url
     from urls order by last_visit_time desc" |
  awk -F $sep '{printf "%-'$cols's  \x1b[36m%s\x1b[m\n", $1, $2}' |
  fzf --ansi --multi | sed 's#.*\(https*://\)#\1#' | xargs open
}
```

**Note**: Ensure that path to `History` file is correct; read more information
on [StackOverflow](https://stackoverflow.com/a/16742333/1564365).
