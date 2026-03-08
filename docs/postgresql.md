---
title: PostgreSQL
---


PostgreSQL is an open source relational database management system (RDBMS). It is the default database for macOS server.

## Installation

```sh
brew install postgresql
```

After this, we can test the installation status by checking the version of installed PostgreSQL

```sh
postgres -V
```

## Usage

### Start PostgreSQL server

The recommended way to manage PostgreSQL is via Homebrew services:

```sh
brew services start postgresql
```

This starts the server now and also sets it to start automatically at login.

### Stop PostgreSQL server

```sh
brew services stop postgresql
```

### Restart PostgreSQL server

```sh
brew services restart postgresql
```

### Start PostgreSQL console

```sh
psql postgres
```

### GUI tool

[Postico](https://eggerapps.at/postico2/) is a popular GUI client for PostgreSQL on macOS. Alternatively, [TablePlus](https://tableplus.com/) supports PostgreSQL and many other databases.
