# Docker

[Docker](https://docs.docker.com) is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

With Docker, developers can build any app in any language using any toolchain. “Dockerized” apps are completely portable and can run anywhere - colleagues’ macOS and Windows laptops, QA servers running Ubuntu in the cloud, and production data center VMs running Red Hat.

## Docker for Mac

Docker for Mac is the current release of Docker for macOS.

### Prerequisite

You'll need `homebrew-cask` to install Docker Toolbox, if you don't have it refer to [this section](../Homebrew/Cask.md).

### Installation

There are two ways to install Docker

#### Option 1: Install via Homebrew

* Install the docker and docker machine from brew

```sh
brew install docker docker-machine
```

* Install VirtualBox to let Docker create the images.

```sh
brew install --cask virtualbox
```

>If you encounter an issue with the installer with an error message like

```sh
The install failed (The installer encountered an error that caused the installation to fail.
Contact the software manufacturer for assistance.)
```

>Use the following When you do fail, turn on System Preference and see if ‘System software from developer “Oracle America, inc” was blocked from loading.’ If you see that message, click Allow button and try to install again.

This should complete the installation

---

Now to create a Machine, follow the following steps:

```sh
docker-machine create --driver virtualbox default
```

Run the following to tell Docker which machine to execute Docker on

```sh
docker-machine env default
```

Finally, to verify all the installations:

```sh
docker run hello-world
```

You can find more about Docker in the [documentation](https://docs.docker.com/).

#### Option 2: Install from Docker's site

Install Docker Desktop on Mac:
https://docs.docker.com/desktop/install/mac-install/

This installation should provide you with all the necessary GUI tools.
