# Docker

[Docker](https://docs.docker.com) is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

### Before you start

In order to simplify the installation process you should install homebrew-cask which provides a friendly homebrew-style CLI workflow for the administration of Mac applications distributed as binaries. Refer to [this](../Homebrew/Cask.md) article in order to install homebrew-cask.

### Install

Use can use cask to install Docker Toolbox which is a collection of useful docker tools such as compose, machine and Kitematic.

    $ brew cask install docker-toolbox

### Quick Start

For quick start find the Docker Quickstart Terminal and double click to launch it. Then you start the hello world container using:

    $ docker run hello-world

You can find more about docker follow the [documentation here](https://docs.docker.com/).
