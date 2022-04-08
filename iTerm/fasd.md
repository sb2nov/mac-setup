# Fasd

Traversing directories is one of the most tedious things to do on a CLI. fasd boosts your productivity by offering ways to quickly access to files and directories.

Fasd ranks files and directories by “frecency,” that is, by both “frequency” and “recency”

The most commonly used command in fasd is `z` to quickly navigate between directories.

Project page - [https://github.com/clvv/fasd](https://github.com/clvv/fasd)

## Installation

You can install Fasd using brew

```sh
brew install fasd
```

To get fasd working in a shell, some initialization code must be run. Put the line below in your shell rc (`.bashrc`, `.zshrc` etc).

```sh
eval "$(fasd --init auto)"
```

## Usage

- `z foo`          # cd into the most frecent directory matching foo
- `f foo`           # list frecent files matching foo
- `a foo bar`       # list frecent files and directories matching foo and bar
- `f js$`           # list frecent files that ends in js
- `f -e vim foo`    # run vim on the most frecent file matching foo

