# SDKMAN

SDKMAN! is a tool for managing parallel versions of multiple software development kits on most Unix-based systems. It provides a convenient command line interface (CLI) and API for installing, switching, removing and listing candidates.

## Installation

Open a new terminal and enter:

```sh
 curl -s "https://get.sdkman.io" | bash
```

Follow the instructions on-screen to complete installation.
Next, open a new terminal or enter:

```sh
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Lastly, run the following code snippet to ensure that installation succeeded:

```sh
sdk version
```

If all went well, the version should be displayed. Something like:

```sh
sdkman 5.0.0+51
```

## Usage

### Installing an SDK

#### Latest stable

Install the latest stable version of your SDK of choice (say, Java JDK) by running the following command:

```sh
sdk install java
```

You will see something like the following output:

```sh
Downloading: java 8u111

In progress...

######################################################################## 100.0%

Installing: java 8u111
Done installing!
```

Now you will be prompted if you want this version to be set as default.

```sh
Do you want java 8u111 to be set as default? (Y/n):
Answering yes (or hitting enter) will ensure that all subsequent shells opened will have this version of the SDK in use by default.
Setting java 8u111 as default.
```

## More commands

* To install a specific version
qualify the version you require:

```sh
sdk install scala 2.12.1
```

* To remove a version

```sh
sdk uninstall scala 2.11.6
```

Note that removing a local version will not remove the local installation.

* To list candidates

```sh
sdk list
```

More useful commands and usages can be found at [SDKMAN Usage](https://sdkman.io/usage).
