---
title: Homebrew
---


[Homebrew](https://brew.sh/) calls itself _The missing package manager for
macOS_ and is an essential tool for any developer.

## Installation

Before you can run Homebrew you need to have the **Command Line Tools for
Xcode** installed. It include compilers and other tools that will allow you
to build things from source. You can install it from the terminal
by running the following:

```sh
xcode-select --install
```

To install Homebrew run the following in a terminal:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

hit **Enter**, and follow the steps on the screen.

### Setting up your `PATH`

On Apple Silicon Macs (M1/M2/M3/M4), Homebrew installs to `/opt/homebrew`. The
installer will print instructions to add Homebrew to your `PATH`. Typically you
need to add this to your `~/.zprofile` (or `~/.bash_profile` if using Bash):

```sh
eval "$(/opt/homebrew/bin/brew shellenv)"
```

On Intel Macs, Homebrew installs to `/usr/local` and is generally already on
your `PATH`.

Then, to be able to use `brew` you need to start a new terminal session. After that
you should make sure everything is working by running:

```sh
brew doctor
```

If everything is good, you should see no warnings, and a message that you are
"ready to brew!".
