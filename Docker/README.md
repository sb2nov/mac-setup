# Docker
[Docker](https://docs.docker.com) is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

## Docker for Mac
Docker for Mac is the current release of Docker for OS X. Requirements:
- Mac must be 2010 or new model with Intel's hardware support for memory management unit (MMU, virtualization, and Unrestricted mode)
- OS X El Capitan 10.11 and newer releases are supported
- Virtualbox prior to version 4.3.30 are incompatible and CANNOT be installed on your system, use a newer version

### Installation
Docker for Mac can be downloaded  [here](httpsL//https://docs.docker.com/docker-for-mac/install/).

## Docker Toolbox
Docker Toolbox is a legacy desktop solution for older Mac and Windows systems that do not meet the requirements of [Docker for Mac](https://docs.docker.com/docker-for-mac/) and Docker for Windows.

### Prerequisite
You'll need `homebrew-cask` to install Docker Toolbox, if you don't have it refer to [this section](/mac-setup/Homebrew/Cask.html).

### Installation

    $ brew cask install docker-toolbox

### Quick Start

For quick start find the newly installed _Docker Quickstart Terminal_ and double-click to launch it. Then you can start the _Hello World container_ using:

    $ docker run hello-world

You can find more about Docker in the [documentation](https://docs.docker.com/).
