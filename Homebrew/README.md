# Homebrew
[Homebrew](https://brew.sh/) calls itself _The missing package manager for macOS_ and is an essential tool for any developer.

## Installation
An important dependency before Homebrew can run is the **Command Line Tools** for **Xcode**. These include compilers that will allow you to build things from source, if you are missing this it's available through the App Store > Updates.

To install Homebrew paste the following command (without the `$`) in your terminal, hit **Enter**, and follow the steps on the screen:

    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

One thing we need to do is tell the system to use programs installed by Hombrew (in `/usr/local/bin`) rather than the OS default if it exists. We do this by adding `/usr/local/bin` to your `$PATH` environment variable (if you're using oh my zsh you should use `.zshrc` instead of `.bash_profile`):

    $ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

Alternatively, we can also insert `/usr/local/bin` to the first line of `/private/etc/paths` and reboot the Mac to change global paths loading order. Admin password may be required if you modify the file.

To be able to use `brew` you need to start a new terminal session. Do this by opening a new terminal tab with **Cmd+T** (you should also close the old one), then run the following command to make sure everything is working:

    $ brew doctor
