# Vagrant

Create and configure lightweight, reproducible, and portable development environments. [Vagrant](http://www.vagrantup.com/) is a tool for managing virtual machines via a simple to use command line interface.

## Prerequisite

You'll need `homebrew-cask`, if you don't have it refer to [this section](../Homebrew/Cask.md).

## Installation

Vagrant uses [Virtualbox](https://www.virtualbox.org/) to manage the virtual dependencies. You can [directly download virtualbox](https://www.virtualbox.org/wiki/Downloads) and install or use Homebrew for it.
Notice that macOS High Sierra 10.13 introduces a new feature that requires user approval before loading new third-party kernel extensions.
In case of failure follow the instructions [here](https://developer.apple.com/library/archive/technotes/tn2459/_index.html).

```sh
brew install --cask virtualbox
```

Now install Vagrant either [from the website](http://www.vagrantup.com/downloads.html) or use Homebrew for installing it.

```sh
brew install --cask vagrant
```

[Vagrant-Manager](http://vagrantmanager.com/) helps you manage all your virtual machines in one place directly from the menu bar.

```sh
brew install --cask vagrant-manager
```

## Usage

Add the Vagrant box you want to use. We'll use Ubuntu 12.04 for the following example.

```sh
vagrant box add precise64 https://vagrantcloud.com/hashicorp/boxes/precise64/versions/1.1.0/providers/virtualbox.box
```

You can find more boxes at [Vagrant Cloud](https://app.vagrantup.com/boxes/search).

Now create a test directory and `cd` into the test directory. Then we'll initialize the vagrant machine.

```sh
vagrant init precise64
```

Now lets start the machine using the following command.

```sh
vagrant up
```

You can ssh into the machine now.

```sh
vagrant ssh
```

Halt the vagrant machine now.

```sh
vagrant halt
```

Other useful commands are `suspend` and `destroy`.
