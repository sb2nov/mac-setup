# Vagrant

Create and configure lightweight, reproducible, and portable development environments. [Vagrant](http://www.vagrantup.com/) is an amazing tool for managing virtual machines via a simple to use command line interface.

### Before you start

In order to simplify the installation process you should install homebrew-cask which provides a friendly homebrew-style CLI workflow for the administration of Mac applications distributed as binaries. Refer to [this](../Homebrew/Cask.md) article in order to install homebrew-cask.

### Install

Vagrant uses [Virtualbox](https://www.virtualbox.org/) to manage the virtual dependencies. You can [directly download virtualbox](https://www.virtualbox.org/wiki/Downloads) and install or use homebrew for it.

    $ brew cask install virtualbox

Now install Vagrant either [from the website](http://www.vagrantup.com/downloads.html) or use homebrew for installing it.

    $ brew cask install vagrant

[Vagrant-Manager](http://vagrantmanager.com/) helps you manage all your virtual machines in one place directly from the menubar.

    $ brew cask install vagrant-manager

### Usage

Add the Vagrant box you want to use. We'll use Ubuntu 12.04 for the following example.

    $ vagrant box add precise64 http://files.vagrantup.com/precise64.box

You can find more boxes at [Vagrant Cloud](https://vagrantcloud.com)

Now create a test directory and cd into the test directory. Then we'll initialize the vagrant machine.

    $ vagrant init precise64

Now lets start the machine using the following command.

    $ vagrant up

You can ssh into the machine now.

    $ vagrant ssh

Halt the vagrant machine now.

    $ vagrant halt

Other useful commands are `suspend`, `destroy` etc.

