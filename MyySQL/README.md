# MySQL

## Installation

We will install [MySQL](http://www.mysql.com/) using Homebrew, which will also install some header files needed for MySQL bindings in different programming languages (MySQL-Python for one).

> **Note**: Sequel Pro does not support latest MySQL (version 8), because of that you may want to install MySQL 5.7 instead - `brew install mysql@5.7`.

```sh
brew install mysql
```

## Usage

To have launchd start MySQL now and restart at login:

```sh
brew services start mysql
```

Or, if you don't want/need a background service you can just use the `mysql.server` tool:

```sh
mysql.server start
```

To stop it when you are done, run:

```sh
mysql.server stop
```

You can see the different commands available for `mysql.server` with:

```sh
mysql.server --help
```

To connect with the command-line client, run:

```sh
mysql -uroot
```

(Use `exit` to quit the MySQL shell)

**Note**: By default, the MySQL user `root` has no password. It doesn't really matter for a local development database. If you wish to change it though, you can use `mysqladmin -u root password 'new-password'`.

## GUI Tool

It is always nice to have a GUI tool for managing databases. For Mac, you can use [Sequel Pro](http://www.sequelpro.com/) to manage local and remote MySQL databases. It is a free tool, you can choose to donate to support the development.

You may install Sequel Pro using [Homebrew](https://sourabhbajaj.com/mac-setup/Homebrew/Cask.html):

```sh
brew install --cask sequel-pro
```
