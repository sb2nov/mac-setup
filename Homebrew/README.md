# Homebrew

[Homebrew](https://brew.sh/) calls itself _The missing package manager for
macOS_ and is an essential tool for any developer.

## Installation

Before you can run Homebrew you need to have the **Command Line Tools** for
**Xcode** installed. It include compilers that will allow you to build things
from source, and if you are missing this it's available through the App Store >
Updates.

To install Homebrew run the following:
terminal, hit **Enter**, and follow the steps on the screen:

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

One thing you need to do is tell the system to use programs installed by Hombrew
(in `/usr/local/bin`) rather than the OS default if it exists. You do this by
adding `/usr/local/bin` to your `PATH` environment variable (if you're using
`zsh` you should use `.zshrc` instead of `.bash_profile`):

    $ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

Alternatively, you can also insert `/usr/local/bin` to the first line of
`/private/etc/paths` and reboot the Mac to change global paths loading order.
Admin password may be required if you modify the file.

To be able to use `brew` you need to start a new terminal session. After that
you should make sure everything is working by running:

    $ brew doctor
