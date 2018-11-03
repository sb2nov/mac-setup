# Octave
[Octave](https://www.gnu.org/software/octave/) is a programming language for scientific computing.

## Prerequisite
You might need `homebrew-cask`, if you don't have it refer to [this section](/mac-setup/Homebrew/Cask.html).

## Installation

### Homebrew Octave.app
[Octave.app](http://octave-app.org) is a project to distribute GNU Octave as a native Mac GUI application, to make it easier to install and use Octave on macOS. Note this is not an official GNU or GNU Octave project.
As this distibutes a compiled version of Octave, installation will be much faster.

To [install using homebrew-cask](http://octave-app.org/#installing-with-homebrew-cask) run:

    $ brew tap octave-app/octave-app
    $ brew cask install octave-app


### Homebrew official
You can also install Octave from the offical homebrew source using the method below.

Import the scientific computing packages and install necessary packages:

    $ brew tap homebrew/science
    $ brew install gcc
    $ brew install octave

**Note**: If brew complains about not having a formula for Octave, the following command should fix it:

    $ brew tap --repair

The command below upgrades Octave and its dependencies to the latest Homebrew-supported versions:

    $ brew update && brew upgrade

Octave has many dependencies which will be downloaded and installed prior to Octave. **The entire installation process can take a few hours.** **Note:** On Snow Leopard, Octave requires a X server. If you install without, Homebrew will guide you to the [XQuartz project](https://xquartz.macosforge.org) where you can download this.

You might find that you need to add:

    setenv ("GNUTERM", "X11")

to your octaverc file, normally located at `/usr/local/share/octave/site/m/startup`.
