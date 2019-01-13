# Ruby

macOS comes with Ruby installed, but as we don't want to be messing with operating system core files we're going to use the tools `rbenv` and `ruby-build` to manage and install our Ruby versions for our development environment.

## Installation

    $ brew install rbenv ruby-build rbenv-default-gems rbenv-gemset
    $ echo 'eval "$(rbenv init -)"' >> ~/Projects/config/env.sh
    $ source ~/.zshrc # Apply changes

The packages we just installed allow us to install different versions of Ruby and specify which version to use on a per project basis and globally. This is very useful to keep a consistent development environment if you need to work in a particular Ruby version.

## Switching versions

We can install version 2.1.1 and use it as our global version by running:

    $ rbenv install 2.1.1
    $ rbenv global 2.1.1

## Managing gems in application

Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.

    $ gem install bundler
    $ echo 'bundler' >> "$(brew --prefix rbenv)/default-gems"

When starting a Ruby project, you can have sandboxed collections of gems. This lets you have multiple collections of gems installed in different sandboxes, and specify (on a per-application basis) which sets of gems should be used. To have gems install into a sub-folder in your project directory for easy later removal / editing / testing, you can use a project gemset.

    $ echo '.gems' > <my_project_path>/.rbenv-gemsets

Your gems will then get installed in `project/.gems`.

## Configuration

If you use Google for finding your Gem documentation then you might want to consider saving a bit of time when installing gems by not including the documentation.

    $ echo 'gem: --no-document' >> ~/.gemrc
