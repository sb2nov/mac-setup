# Perl

macOS ships with [Perl](https://www.perl.org), but it's not safe to
rely on it for more than basic one-liners. Apple has broken it twice,
and let it go very stale at least once. Many packages distributed with
Homebrew depend on the version of Perl it installs, but for complete
control of what version you're running and what packages are
installed, there's also [Perlbrew](https://perlbrew.pl).

There are several methods of installing modules from the Comprehensive
Perl Archive Network ([CPAN](https://www.cpan.org)), but the easiest
is [cpanminus](https://metacpan.org/pod/App::cpanminus) (`cpanm`).

## Installation

### Homebrew

```sh
brew install perl cpanminus
```

### Perlbrew

```sh
curl -L https://install.perlbrew.pl | bash

source ~/perl5/perlbrew/etc/bashrc
perlbrew install-cpanm
perlbrew install --switch stable

echo source ~/perl5/perlbrew/etc/bashrc >> ~/.bash_profile
```

Other useful commands:

```sh
# full documentation
perlbrew help

# override version in current shell
perlbrew use $version

# execute a script with a specific version
perlbrew exec $version $script

# revert to vendor/Homebrew Perl in current shell
perlbrew off

# reinstall all modules in a different version
perlbrew clone-modules $from $to
```

## Usage

To install additional modules from [CPAN](https://www.cpan.org):

```sh
cpanm Modern::Perl
```

## Customization

You can set the environment variable `PERLBREW_ROOT` to override
the default installation directory.
