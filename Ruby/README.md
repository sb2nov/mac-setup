#Ruby

OS X comes with Ruby installed (Mavericks even gets version 2.0.0, previously it was only 1.8.7), as we don't want to be messing with core files we're going to use the brilliant rbenv and ruby-build to manage and install our Ruby versions for our development environment.

    $ brew install rbenv ruby-build rbenv-default-gems
    $ echo 'eval "$(rbenv init -)"' >> ~/Projects/config/env.sh
    $ sourcezsh

The package we just installed allow us to install different versions of Ruby and specify which version to use on a per project basis and globally. This is very useful to keep a consistent development environment if you need to work in a particular Ruby version.

    $ rbenv install 2.1.1
    $ rbenv global 2.1.1

Install bundler. Bundler manages an application's dependencies, kind of like a shopping list of other libraries the application needs to work.

    $ gem install bundler
    $ echo 'bundler' >> "$(brew --prefix rbenv)/default-gems"

Skip r-doc generation. If you use Google for finding your Gem documentation like I do you might consider saving a bit of time when installing gems by skipping the documentation.

    $ echo 'gem: --no-document' >> ~/.gemrc

Install Jekyll and Kramdown.

    $ gem install jekyll
    $ gem install kramdown

Install Rails. With Ruby installed and the minimum dependencies ready to go Rails can be installed as a Ruby Gem.

    $ gem install rails
    $ echo 'rails' >> "~/.rbenv/default-gems"
