# RubyGems

[RubyGems](http://rubygems.org/), the Ruby package manager, should be installed on your machine if you previously have installed Ruby. Verify this by running:

```sh
which gem
```

## Update RubyGems

To update to its latest version with:

```sh
gem update --system
```

## Install gems

To install a _gem_ (Ruby package), run:

```sh
gem install <gemname>
```

To install without generating the documentation for each gem (faster):

```sh
gem install <gemname> --no-document
```

## List installed gems

```sh
gem list
```

To check if any installed gems are outdated:

```sh
gem outdated
```

## Update installed gems

To update all gems or a particular gem:

```sh
gem update [<gemname>]
```

## Remove old gem versions

RubyGems keeps old versions of gems, so feel free to do some cleaning after updating:

```sh
gem cleanup
```
