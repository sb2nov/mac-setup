# Octave

[Octave](https://www.gnu.org/software/octave/) is a programming language for scientific computing.

## Prerequisite

You might need `homebrew-cask`; if you don't have it, refer to [this section](../Homebrew/Cask.md).

## Installation

### Homebrew Octave.app

[Octave.app](https://octave-app.org) is a project to distribute GNU Octave as a native Mac GUI application, to make it easier to install and use Octave on macOS. Note this is not an official GNU or GNU Octave project.
As this distributes a compiled version of Octave, installation will be much faster.

To [install using homebrew-cask](https://octave-app.org/#installing-with-homebrew-cask) run:

```sh
brew tap octave-app/octave-app
brew install --cask octave-app
```

### Homebrew official

You can also install Octave from the official Homebrew source using the method below.

Install `octave` from core Homebrew (which is available by default):

```sh
brew install octave
```

**Note**: If `brew` complains about not having a formula for Octave, the following command should fix it:

```sh
brew tap --repair
```

The command below upgrades Octave and its dependencies to the latest Homebrew-supported versions:

```sh
brew update && brew upgrade
```

Octave has many dependencies which will be downloaded and installed prior to Octave. **The entire installation process can take a few hours if you are compiling from source.**

**Note:** On Snow Leopard or earlier, Octave requires an X server. You can download one from the [XQuartz project](https://www.xquartz.org/).

You might find that you need to add:

```sh
setenv ("GNUTERM", "X11")
```

to your octaverc file, normally located at `/usr/local/share/octave/site/m/startup`.
