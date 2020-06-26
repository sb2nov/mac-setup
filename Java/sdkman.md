# `SdkMan`

SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems. It provides a convenient Command Line Interface (CLI) and API for installing, switching, removing and listing Candidates.

## Installation

Simply open a new terminal and enter:

```bash
 curl -s "https://get.sdkman.io" | bash
```

Follow the instructions on-screen to complete installation.
Next, open a new terminal or enter:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Lastly, run the following code snippet to ensure that installation succeeded:

```bash
sdk version
```

If all went well, the version should be displayed. Something like:

```bash
sdkman 5.0.0+51
```

## Usage

### Installing an SDK

#### Latest Stable

Install the latest stable version of your SDK of choice (say, Java JDK) by running the following command:

```bash
sdk install java
```

You will see something like the following output:

```bash
Downloading: java 8u111

In progress...

######################################################################## 100.0%

Installing: java 8u111
Done installing!
```

Now you will be prompted if you want this version to be set as default.

```bash
Do you want java 8u111 to be set as default? (Y/n):
Answering yes (or hitting enter) will ensure that all subsequent shells opened will have this version of the SDK in use by default.
Setting java 8u111 as default.
```

## More commands

* To install a specific version
simply qualify the version you require

```bash
sdk install scala 2.12.1
```

* To remove a version

```bash
sdk uninstall scala 2.11.6
```

Note that removing a local version will not remove the local installation.

* List Candidates

```bash
sdk list
```

More useful commands and usages can be found at [SDKMAN Usage](https://sdkman.io/usage).
