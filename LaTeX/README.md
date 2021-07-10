# LaTeX

[LaTeX](https://www.latex-project.org/about/), which is pronounced «Lah-tech» or «Lay-tech», is a document preparation system for high-quality typesetting. It is most often used for medium-to-large technical or scientific documents but it can be used for almost any form of publishing.

## Installation

When installing LaTex, two following options are given to users:

  1. Install MacTeX with builtin editor (TexLive) - (3.2GB)
  2. Install BasicTeX only (100MB) + your personal LaTeX editor

### MacTeX vs BasicTeX

MacTeX includes additional programs such as an editor and a BibTeX reference manager that help users to work with TeX outside of the command line. BasicTeX does not include these GUI programs. The trade-off that comes with using BasicTeX is that you will have to download and install additional packages and programs as the need arises- and BasicTeX is so basic that the need will arise. So, after installing BasicTeX you will be faced with the tasks of installing additional programs and installing missing packages.

#### MacTex

Download [MacTex](http://www.tug.org/mactex/), or use `brew install --cask mactex`.
You can read more about MacTex in [What is installed (pdf)](https://www.tug.org/mactex/What_Is_Installed.pdf).

Since MacTex installs a LaTex editor ([TexMaker](http://www.xm1math.net/texmaker/download.html)) already, installing another LaTeX editor is unnecessary.

#### BasicTeX

Download [BasicTeX](http://tug.org/mactex/morepackages.html), or use `brew install --cask basictex`. You can read more about BasicTex in [BasicTeX (pdf)](https://www.tug.org/mactex/BasicTeX.pdf).

You may use `tlmgr` to install tools/packages that you need.

> **Note**: You may find CLI tool `tlmgr` cumbersome to use, in that case install GUI for `tlmgr` - [*TeX Live Utility*](https://amaxwell.github.io/tlutility/) - `brew install --cask tex-live-utility`.

Now you should pick a LaTeX editor, here are some to choose from:

  1. [TexMaker](http://www.xm1math.net/texmaker/)
  2. [TeXstudio](http://texstudio.sourceforge.net/)
  3. [TeXworks](https://github.com/TeXworks/texworks/releases)
  4. [TeXShop](http://pages.uoregon.edu/koch/texshop/)
  5. [LyX](http://www.lyx.org/)
  6. [TeXlipse](http://texlipse.sourceforge.net/)
  7. [Sublime Text 3 - LaTeXTools](https://github.com/SublimeText/LaTeXTools)
  8. [Visual Studio Code - LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)

> **Note**: You may want to use a PDF reader that watches your PDF files, like Skim (can be installed by `brew install --cask skim` and *Sync* feature can be enabled in Preferences -> Sync).
