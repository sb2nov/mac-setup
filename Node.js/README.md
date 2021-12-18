# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation

### Using Homebrew

```sh
brew install node
```

### Using Node Version Manager (nvm)

Download and install [nvm](https://github.com/nvm-sh/nvm) by running:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

or via Homebrew:

```sh
brew install nvm
```

Then download Node and select your version by running:

```sh
source ~/.bashrc        # source your bashrc/zshrc to add nvm to PATH
command -v nvm          # check the nvm use message
nvm install node        # install most recent Node stable version
nvm ls                  # list installed Node version
nvm use node            # use stable as current version
nvm ls-remote           # list all the Node versions you can install
nvm alias default node  # set the installed stable version as the default Node
```

See the [documentation](https://github.com/nvm-sh/nvm#installing-and-updating) for information.

## npm usage

To install a package:

```sh
npm install <package> # Install locally
npm install -g <package> # Install globally
```

To install a package and save it in your project's `package.json` file:

```sh
npm install <package> --save
```

To see what's installed:

```sh
npm list [-g]
```

To find outdated packages:

```sh
npm outdated [-g]
```

To upgrade all or a particular package:

```sh
npm update [-g] [<package>]
```

To uninstall a package:

```sh
npm uninstall [-g] <package>
```

## yarn

Yarn is another package manager built by Facebook. Yarn stands for Yet Another
Resource Negotiator. It provides similar functionalities as NPM. It is an
alternative to NPM when installing, uninstalling, and managing package
dependencies from the NPM registry or GitHub repositories.

```sh
brew install yarn
```
