---
title: Vagrant
---


Create and configure lightweight, reproducible, and portable development environments. [Vagrant](https://www.vagrantup.com/) is a tool for managing virtual machines via a simple to use command line interface.

> **Note**: For most use cases, [Docker](/docker) is now the preferred way to create
> reproducible development environments. Vagrant is still useful when you need
> full virtual machines.

## Installation

Vagrant uses a virtualization provider. You can use [VirtualBox](https://www.virtualbox.org/) (free) or other providers like VMware or Parallels.

```sh
brew install --cask virtualbox
```

Now install Vagrant:

```sh
brew install --cask vagrant
```

## Usage

Add the Vagrant box you want to use. We'll use Ubuntu 22.04 for the following example.

```sh
vagrant box add ubuntu/jammy64
```

You can find more boxes at [Vagrant Cloud](https://app.vagrantup.com/boxes/search).

Now create a test directory and `cd` into the test directory. Then we'll initialize the vagrant machine.

```sh
vagrant init ubuntu/jammy64
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
