# RubyGems

[RubyGems](http://rubygems.org/), the Ruby package manager, should be installed on your machine if you previously have installed Ruby. Verify this by running:

    $ which gem

## Update RubyGems

To update to its latest version with:

    $ gem update --system

## Install gems

To install a _gem_ (Ruby package), run:

    $ gem install <gemname>

To install without generating the documentation for each gem (faster):

    $ gem install <gemname> --no-document

## List installed gems

    $ gem list

To check if any installed gems are outdated:

    $ gem outdated

## Update installed gems

To update all gems or a particular gem:

    $ gem update [<gemname>]

## Remove old gem versions

RubyGems keeps old versions of gems, so feel free to do some cleaning after updating:

    $ gem cleanup
