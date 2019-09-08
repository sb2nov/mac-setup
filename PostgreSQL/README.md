# PostgreSQL

PostgreSQL is an open source relational database management system (RDBMS). It is the default database for macOS server.

## Installation

### install postgreSQL

    $ brew install postgres

  after this, we can test the installation status by checking the version of installed postgreSQL

    $ postgres -V
  
### reinstall postgreSQL

    $  brew reinstall postgresql

### uninstall postgreSQL

    $ brew uninstall --force postgresql

  delete all files of uninstalled postgreSQL

    $ rm -rf /usr/local/var/postgres

## Usage

### Start PostgreSQL server

  manually

    $ pg_ctl -D /usr/local/var/postgres start

  automatically

    $ brew services start postgresql

  The above command starts the postgreSQL server right now and restarts at login automatically.

### Stop PostgreSQL server

  manually

    $ pg_ctl -D /usr/local/var/postgres stop

  automatically

    $ brew services stop postgresql

### Restart PostgreSQL server

  manually

    $ pg_ctl -D /usr/local/var/postgres restart

  automatically

    $ brew services restart postgresql

### Start PostgreSQL console

    $ psql

## More

### GUI tool

  we can use `psequel` a free GUI tool for managing the local and remote PostgreSQL databases.

  install `psequel` using `homebrew` and `cask`.

    $ brew cask install psequel