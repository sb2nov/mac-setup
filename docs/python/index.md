---
title: Python
---


macOS ships with [Python](https://python.org/) already installed.
But you don't want to mess with the system Python (some system tools rely on
it, etc.), so we'll install our own version(s). There are two ways to install
Python, (1) Homebrew and (2) Pyenv. If you plan to use multiple versions of
Python then you should use pyenv.

## Installation

### Homebrew method

```sh
brew install python
```

Installing Python also installs [pip](https://pip.pypa.io/)
(and its dependency [Setuptools](https://pypi.org/project/setuptools/)),
which is the package manager for Python. Let's upgrade them both:

```sh
pip3 install --upgrade setuptools
pip3 install --upgrade pip
```

### Pyenv method

[`pyenv`](https://github.com/pyenv/pyenv) is a Python version manager that can
manage and install different versions of Python. Works very much like `rbenv`
for Ruby. First, we must install `pyenv` using Homebrew:

```sh
brew install pyenv
```

To upgrade `pyenv` in the future, use `upgrade` instead of `install`. After
installing, add `pyenv init` to your shell to enable shims and autocompletion.
Add the following to your `~/.zshrc` (or `~/.bash_profile` if using Bash):

```sh
eval "$(pyenv init -)"
```

Restart your shell to make sure the path changes take effect.

```sh
exec $SHELL
```

You can now begin using `pyenv`. To list the all available versions of Python,
including Anaconda, Jython, PyPy and Stackless, use:

```sh
pyenv install --list
```

Then install the desired versions:

```sh
pyenv install 3.12
pyenv install 3.11
```

Use the `global` command to set global version(s) of Python to be used in all
shells:

```sh
pyenv global 3.12
pyenv rehash
```

All installed Python versions can be
located in `~/.pyenv/versions`. Alternatively, you can run:

```console
$ pyenv versions
  system (set by /Users/your_account/.pyenv/version)
* 3.12
  3.11
```

This shows an asterisk `*` next to the currently active version.

### Application-specific Python version

The `local` command will set local application-specific Python version(s) by
writing the version name to a `.python-version` file in the current directory.
This version overrides the global version. For example:

```console
$ cd path/to/directory
$ pyenv local 3.11
$ pyenv versions
  system
  3.12
* 3.11 (set by /Users/your_account/path/to/directory/.python-version)
```
