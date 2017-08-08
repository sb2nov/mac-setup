# `ack`

`ack` is a search tool designed for code. It's built to be a replacement for `grep` with higher speed and more options.

## Installation

To install the latest version, use homebrew.

```bash
brew install ack
```

## Why use `ack` over `grep`

- Faster
- Skips unimportant files by default
- It searches recursively by default
- Customizable

## Usage

```bash
ack [OPTION]... PATTERN [FILES OR DIRECTORIES]
```

Let's say you want to find all JavaScript files that are using the module `pancakes` in your project, with `ack` it's as easy as
```sh
ack --js pancakes
```

Or you may want to find all files that _does not_ contain the word _brew_
```bash
ack -L brew
```

## Customization

You can customize `ack` to behave the way you want it to, this configuration is stored in `/.ackrc`.

For example, you can add a custom type to use as a flag when searching. The following configuration will allow you to only search in `.md`, `.mkd` and `.markdown` files using the `--markdown` flag.
```bash
--type-set=markdown=.md,.mkd,.markdown
```

You can also tell ack to always sort and use colors in the result.
```bash
--sort-files
--color
```

To see what configuration `ack` uses you can use the `dump` flag.

```bash
ack --dump
```

## Alternatives to `ack`

There's [The Silver Surfer](The Silver Searcher) which describes itself as a
> A code searching tool similar to `ack`, with a focus on speed.
