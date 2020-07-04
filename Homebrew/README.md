# Homebrew

[Homebrew](https://brew.sh/) calls itself _The missing package manager for
macOS_ and is an essential tool for any developer.

## Installation

Before you can run Homebrew you need to have the **Command Line Tools for
Xcode** installed. It include compilers and other tools that will allow you
to build things from source, and if you are missing this it's available
through the App Store > Updates. You can also install it from the terminal
by running the following:

```sh
sudo xcode-select --install
```

To install Homebrew run the following in a terminal:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

hit **Enter**, and follow the steps on the screen.

### Setting up your `PATH`

To make the Homebrew-installed programs available in your shell, you need to add
your Homebrew installation location to your `$PATH`. This is done for you already on
macOS 10.14 Mojave and newer. For older versions of macOS, do the following:

You change your path by adding `/usr/local/bin` to your `PATH` environment variable.
This can be done on a per-user basis by adjusting `PATH` in your `~/.bash_profile`.
To do this, run:

```sh
echo 'PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```

(If you're using `zsh`, you should do this for `~/.zshrc` in addition to
`~/.bash_profile`.)

Alternatively, you can also insert `/usr/local/bin` before the first line of
`/etc/paths` to change the global default paths order, for all users and all
major shells. An admin password will be required if you modify the file.

Then, to be able to use `brew` you need to start a new terminal session. After that
you should make sure everything is working by running:

```sh
brew doctor
```

If everything is good, you should see no warnings, and a message that you are
"ready to brew!".
