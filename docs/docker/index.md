---
title: Docker
---


[Docker](https://docs.docker.com) is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

With Docker, developers can build any app in any language using any toolchain. "Dockerized" apps are completely portable and can run anywhere - colleagues' macOS and Windows laptops, QA servers running Ubuntu in the cloud, and production data center VMs running Red Hat.

## Installation

The recommended way to use Docker on macOS is via **Docker Desktop**.

### Using Homebrew

```sh
brew install --cask docker
```

### Manual Download

Alternatively, download Docker Desktop from the [official website](https://www.docker.com/products/docker-desktop/).

### Verify Installation

After installing and launching Docker Desktop, verify the installation:

```sh
docker --version
docker run hello-world
```

You can find more about Docker in the [documentation](https://docs.docker.com/).
