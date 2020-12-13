# Emacs

[Emacs](https://www.gnu.org/software/emacs/) is a family of text editors that are characterized by their extensibility. The manual for the most widely used variant, GNU Emacs, describes it as the extensible, customizable, self-documenting, real-time display editor.

Development of the first Emacs began in the mid-1970s, and work on its direct descendant, GNU Emacs, continues actively as of 2017.

## Installation

There are many Emacs clients on macOS. The recommended version on macOS is Emacs Mac Port, but others are good as well.

### [Emacs Mac port](https://bitbucket.org/mituharu/emacs-mac/overview) (Recommended)

Many useful features are built with Emacs Mac Port, e.g. environment variables, full screen, visual enhancements and so on.

Link the Homebrew tap first.

```sh
brew tap railwaycat/emacsmacport
```

* Method 1: Install with `brew cask`.

```sh
brew install --cask emacs-mac
```

  There are three available versions, `emacs-mac`, `emacs-mac-official-icon`, `emacs-mac-spacemacs-icon`.

* Method 2: Install using `brew`.

```sh
brew install emacs-mac [options]
```

<details>
<summary>Click here to see available options: </summary>

1. <code>--with-dbus</code>, Build with d-bus support<br>
2. <code>--with-modules</code>, Build with dynamic modules support<br>
3. <code>--with-xml2</code>, Build with libxml2 support<br>
4. <code>--with-ctags</code>, Don't remove the ctags executable that emacs provides<br>
5. <code>--with-no-title-bars</code>, Build with a patch for no title bars on frames (--HEAD is not supported)<br>
6. <code>--with-natural-title-bar</code>, Build with a patch for title bar color inferred by your theme (--HEAD is not supported). More info is provided <a href="https://github.com/railwaycat/homebrew-emacsmacport/wiki/Natural-Title-Bar">here</a><br>
7. <code>--with-official-icon</code>, Using official Emacs icon<br>
8. <code>--with-modern-icon</code>, Using a modern style Emacs icon by @tpanum<br>
9. <code>--with-spacemacs-icon</code>, Using the spacemacs Emacs icon by Nasser Alshammari<br>
10. <code>--with-icon-for-documents</code>, Using official icon for documents which default open with Emacs<br>

</details>

### [Emacs plus](https://github.com/d12frosted/homebrew-emacs-plus#emacs-plus)

Start off by tapping the official emacs-plus cask.

```sh
brew tap d12frosted/emacs-plus
```

Emacs Plus contains separate formulas for different Emacs versions:

* emacs-plus - installs Emacs 26, current release version.

```sh
brew install emacs-plus [options]
```

* emacs-plus@27 - installs Emacs 27, next release version.

```sh
brew install emacs-plus@27 [options]
```

* emacs-plus@28 - installs Emacs 28, development version.

```sh
brew install emacs-plus@28 [options]
```

<details>
<summary>Click here to see available options: </summary>
1. <code>--with-24bit-color</code>: Experimental: build with 24 bit color support<br>
2. <code>--with-ctags</code>: Don't remove the ctags executable that Emacs provides<br>
3. <code>--with-dbus</code>: Build with dbus support<br>
4. <code>--with-mailutils</code>: Build with mailutils support<br>
5. <code>--with-natural-title-bar</code>: Experimental: use a title bar colour inferred by your theme<br>
6. <code>--with-no-title-bars</code>: Experimental: build with a patch for no title bars on frames (--HEAD has this built-in via undecorated flag)<br>
7. <code>--with-x11</code>: Experimental: build with x11 support<br>
8. <code>--without-cocoa</code>: Build a non-Cocoa version of Emacs<br>
9. <code>--without-gnutls</code>: Build without gnutls support<br>
10. <code>--without-imagemagick@6</code>: Build without imagemagick@6 support<br>
11. <code>--without-librsvg</code>: Build without librsvg support<br>
12. <code>--without-libxml2</code>: Build without libxml2 support<br>
13. <code>--without-modules</code>: Build without dynamic modules support<br>
14. <code>--without-multicolor-fonts</code>: Build without a patch that enables multicolor font support<br>
15. <code>--without-spacemacs-icon</code>: Build without Spacemacs icon by Nasser Alshammari<br>
16. <code>--HEAD</code>: Install HEAD version<br>
</details>

> **Note**: 1) You might want to install [exec-path-from-shell](https://github.com/purcell/exec-path-from-shell) if you are using Emacs plus. It takes care of your environment variables.
> 2) To have the title bar match your theme background color, consider using instead:
> `brew install emacs-plus --HEAD --with-natural-title-bars`

## Spacemacs

[Spacemacs](https://github.com/syl20bnr/spacemacs/blob/master/README.md) is a new way to experience Emacs -- a sophisticated and polished set-up focused on ergonomics, mnemonics and consistency.

Spacemacs can be used naturally by both Emacs and Vim users -- you can even mix the two editing styles. Switching easily between input styles makes Spacemacs a great tool for pair-programming.

### Installation

1. If you have an existing Emacs configuration, back it up first:

   ```sh
   cd ~
   mv .emacs.d .emacs.d.bak
   mv .emacs .emacs.bak
   ```

   Don't forget to backup and _remove_ `~/.emacs` file otherwise Spacemacs
   **WILL NOT** load since that file prevents Emacs from loading the proper
   initialization file.

2. Clone the repository:

   ```sh
   git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
   ```

   `master` is the stable branch and it is _immutable_, **DO NOT** make any
   modification to it or you will break the update mechanism. If you want to
   fork Spacemacs safely use the `develop` branch where you handle the update
   manually.

3. (Optional) Install the [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) font.

   If you are running in terminal you'll also need to change font settings of
   your terminal.

4. Launch Emacs. Spacemacs will automatically install the packages it requires.
   If you get an error regarding package downloads then you may try to disable
   the HTTPS protocol by starting Emacs with

   ```sh
   emacs --insecure
   ```

   Or you can set the `dotspacemacs-elpa-https` to `nil` in your dotfile to
   remove the need to start Emacs with `--insecure` argument. You may wish to
   clear out your `.emacs.d/elpa` directory before doing this, so that any
   corrupted packages you may have downloaded will be re-installed.

5. Restart Emacs to complete the installation.

## Purcell's Emacs configuration

This is [Purcell's](https://github.com/purcell/emacs.d) emacs configuration tree, continually used and tweaked since 2000, and it may be a good starting point for other Emacs users, especially those who are web developers. These days it's somewhat geared towards macOS, but it is known to also work on Linux and Windows.

### Installation

To install, clone this repository to `~/.emacs.d`, i.e. ensure that the `init.el` contained in this repository ends up at `~/.emacs.d/init.el`:

```sh
git clone https://github.com/purcell/emacs.d.git ~/.emacs.d
```

Upon starting up Emacs for the first time, further third-party packages will be automatically downloaded and installed. If you encounter any errors at that stage, try restarting Emacs, and possibly running `M-x package-refresh-contents` before doing so.

## Doom Emacs

[Doom](https://github.com/hlissner/doom-emacs) is a configuration for GNU Emacs written by a stubborn, shell-dwelling, and melodramatic ex-vimmer. It wasn't originally intended for public use, but can be considered a hacker's starter kit.

### Installation

```sh
git clone https://github.com/hlissner/doom-emacs ~/.emacs.d
cd ~/.emacs.d
cp init.example.el init.el  # maybe edit init.el
make install
```

Don't forget to run `make` every time you modify `init.el`!

Visit the wiki for [a more detailed guide on installing, customizing and grokking Doom](https://github.com/hlissner/doom-emacs/wiki).
