# `fzf`

[`fzf`](https://github.com/junegunn/fzf) is a general-purpose command-line fuzzy finder.

## Why use `fzf`

 - Speed
 - Rich feature set
 - Highly customizable

## Installation

Use [homebrew](http://sourabhbajaj.com/mac-setup/Homebrew/README.html) to install `fzf`:

    brew install fzf

If you want to use shell extensions:

    /usr/local/opt/fzf/install

which are:

 - Key bindings (`CTRL-T`, `CTRL-R`, and `ALT-C`) (available for bash, zsh and fish)
 - Fuzzy auto-completion (available for bash and zsh)

## Usage

### Fuzzy completion

>hit tab (↹) after:

#### File search

    vim **

or

    subl **

#### Host name search

    ssh **

>**Note**: for more fuzzy search things head over [official repo](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh)

### Chrome history from CLI

>**Note**: original [blog post](https://junegunn.kr/2015/04/browsing-chrome-history-with-fzf/)

Open up shell config (most likely `~/.zshrc` or command `zshconfig`) and add following function:

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

>**Note**: Ensure that path to `History` file is correct; read more information on [StackOverflow](https://stackoverflow.com/a/16742333/1564365)
