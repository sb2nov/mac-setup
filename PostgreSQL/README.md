# PostgreSQL

PostgreSQL is an open source relational database management system (RDBMS). It is the default database for macOS server.

## Installation

    brew install postgres

  After this, we can test the installation status by checking the version of installed PostgreSQL

    postgres -V

## Usage

### Start PostgreSQL server

    pg_ctl -D /usr/local/var/postgres start

  Or you can start the PostgreSQL server and have it start up at login automatically

    brew services start postgresql

### Stop PostgreSQL server

    pg_ctl -D /usr/local/var/postgres stop

  To make it stop starting up automatically at login

    brew services stop postgresql

### Restart PostgreSQL server

    pg_ctl -D /usr/local/var/postgres restart

  Or if you're using `homebrew`

    brew services restart postgresql

### Start PostgreSQL console

    psql

### GUI tool

  We can use `psequel` a free GUI tool for managing the local and remote PostgreSQL databases

  Install `psequel` using `homebrew` and `cask`

    brew cask install psequel
