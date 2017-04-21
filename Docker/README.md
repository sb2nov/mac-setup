# Docker

[Docker](https://docs.docker.com) is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

### Docker for Mac 
Docker for Mac is the current release of Docker for OSX. Requirements:
* Mac must be 2010 or new model with Intel's hardare support for memory management unit (MMU, virtualization, and Unrestricted mode.
* OSX El Capital 10.11 and newer releases are supported. 
* Virtualbox prior to version 4.3.30 must NOT be installed. It is incompatiable. Use a newer version.

###Install Docker for Mac
Docker for Mac can be downloaded  [here](httpsL//https://docs.docker.com/docker-for-mac/install/).

###Docker Toolbox###
Docker Toolbox is a legacy desktop solution for older Mac and Windows systems that do not meet the requirements of [Docker for Mac](https://docs.docker.com/docker-for-mac/) and Docker for Windows.


### Before you install Docker Toolbox

In order to simplify the installation process you should install homebrew-cask which provides a friendly homebrew-style CLI workflow for the administration of Mac applications distributed as binaries. Refer to [this](../Homebrew/Cask.md) article in order to install homebrew-cask.

### Install Docker Toolbox

Use can use cask to install Docker Toolbox which is a collection of useful docker tools such as compose, machine and Kitematic.

    $ brew cask install docker-toolbox

### Docker Toolbox Quick Start

For quick start find the Docker Quickstart Terminal and double click to launch it. Then you start the hello world container using:

    $ docker run hello-world

You can find more about docker follow the [documentation here](https://docs.docker.com/).
