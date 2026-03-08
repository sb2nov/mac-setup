---
title: Usage
---


To install a package (or **Formula** in Homebrew vocabulary) simply type:

```sh
brew install <formula>
```

To update Homebrew's directory of formulae, run:

```sh
brew update
```

**Note**: If that command fails you can manually download the directory of
formulas like this:

```sh
cd "$(brew --prefix)/Homebrew/"
git fetch origin
git reset --hard origin/main
```

To see if any of your formulas need to be updated:

```sh
brew outdated
```

To update a formula:

```sh
brew upgrade <formula>
```

Homebrew keeps older versions of formulas installed on your system, in case you
want to roll back to an older version. That is rarely necessary, so you can do
some cleanup to get rid of those old versions:

```sh
brew cleanup
```

If you want to see what formulae Homebrew would delete _without actually
deleting them_, you can run:

```sh
brew cleanup --dry-run
```

To see what you have installed (with their version numbers):

```sh
brew list --versions
```

To search for formulas you run:

```sh
brew search <formula>
```

To get more information about a formula you run:

```sh
brew info <formula>
```

To uninstall a formula you can run:

```sh
brew uninstall <formula>
```

## Recommended Formulas

Here are some useful formulas for enhancing your command-line experience:

### Core Utilities

macOS ships with outdated or BSD versions of many command-line tools. These formulas install the latest GNU versions:

```sh
brew install \
    coreutils \
    moreutils \
    findutils \
    gnu-sed \
    grep \
    wget \
    bash \
    base64
```

> **Note**: GNU tools are installed with a `g` prefix by default (e.g. `gsed`, `gfind`). To use them without the prefix, add their `libexec/gnubin` directories to your `PATH`. For example, Homebrew will display instructions after installing each formula.

### Search Tools

```sh
brew install the_silver_searcher
```

[The Silver Searcher](https://github.com/ggreer/the_silver_searcher) (`ag`) is a code searching tool similar to `ack`, but faster.
