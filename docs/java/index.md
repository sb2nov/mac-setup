---
title: Java
---


Using Java requires you to install a JDK ("Java Development Kit") or JRE ("Java Runtime Environment").
We'll use a JDK since it can do everything a JRE can, plus more.

## Choosing a JDK

There are two major JDKs: OpenJDK and the Oracle JDK.
OpenJDK and Oracle JDK provide the same functionality, and are even built from the same code base.
They differ only in their packaging and licensing.

OpenJDK is free for use in all situations.
Oracle JDK requires a paid-for commercial license when used in a production setting.

Most personal users will probably want to use OpenJDK, since it's easier to acquire and install
and that's what we'll be covering here.

## Installation

First you should check if Java is already installed

```sh
java -version
```

If you see a non-empty output like below then Java is already installed on your machine and you are good to go

```sh
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment Homebrew (build 21.0.2)
OpenJDK 64-Bit Server VM Homebrew (build 21.0.2, mixed mode, sharing)
```

If you don't see the output like above then you need to install Java on your system

### Installing OpenJDK

#### Installing OpenJDK using Homebrew

```sh
brew install openjdk
```

If you're curious, you can list all the available JDK versions via:

```sh
brew search jdk
```

There will be a lot of options here! If you are not a serious Java developer, don't worry about them, and just use the default `openjdk`.

Once you've done that, check if Java is correctly installed by running the `java -version` command again.

#### Downloading and installing OpenJDK manually

Open a web browser and go to [Adoptium](https://adoptium.net/). Select the latest LTS version and download the installer for macOS.

Once you've done that, check if Java is correctly installed by opening a new Terminal session and running the `java -version` command again.
