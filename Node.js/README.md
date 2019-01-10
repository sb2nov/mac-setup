# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation

### Using Homebrew

    $ brew install node

### Using Node Version Manager (nvm)

Download and install [nvm](https://github.com/creationix/nvm) by running:

    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

Then download Node and select your version by running:

    $ source ~/.bashrc        # source your bashrc/zshrc to add nvm to PATH
    $ command -v nvm          # check the nvm use message
    $ nvm install node        # install most recent Node stable version
    $ nvm ls                  # list installed Node version
    $ nvm use node            # use stable as current version
    $ nvm ls-remote           # list all the Node versions you can install
    $ nvm alias default node  # set the installed stable version as the default Node

See the [documentation](https://github.com/creationix/nvm#installation) for information.

## npm usage

To install a package:

    $ npm install <package> # Install locally
    $ npm install -g <package> # Install globally

To install a package and save it in your project's `package.json` file:

    $ npm install <package> --save

To see what's installed:

    $ npm list [-g]

To find outdated packages:

    $ npm outdated [-g]

To upgrade all or a particular package:

    $ npm update [-g] [<package>]

To uninstall a package:

    $ npm uninstall [-g] <package>
