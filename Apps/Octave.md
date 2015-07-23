# Octave

### Before you start

In order to simplify the installation process you should install homebrew-cask which provides a friendly homebrew-style CLI workflow for the administration of Mac applications distributed as binaries. Refer to [this](../Homebrew/Cask.md) article in order to install homebrew-cask.

### Install

Octave can be installed with `brew cask install octave` or using the method below.

Import the scientific computing packages, including Octave:

    brew tap homebrew/science

To install Octave, update to the latest package definitions, install ,
and then Octave:

    brew update && brew upgrade
    brew install gfortran
    brew install octave

Note: If brew complains about not having a formula for octave, the
following command should fix it:

    brew tap --repair

The command below upgrades Octave and its dependencies to the latest
Homebrew-supported versions:

    brew update && brew upgrade

Octave has many dependencies which will be downloaded and installed prior to Octave. The entire installation process can take a few hours. Note: On Snow Leopard, Octave requires a X server. If you install without, Homebrew will guide you to the [XQuartz project](https://xquartz.macosforge.org) where you can download this.
You might find that you need to add:

    setenv ("GNUTERM", "X11")

to your octaverc file, normally located at `/usr/local/share/octave/site/m/startup`.

