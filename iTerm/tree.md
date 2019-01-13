# `tree`

`tree` is a recursive directory listing command that produces a depth indented listing of files.

## Installation

To install the latest version, use homebrew:

```bash
$ brew install tree
```

## Usage

Running `tree` will produce output like this:

```bash
.
├── Apps
│   ├── Octave.md
│   ├── README.md
│   ├── Settings.md
│   ├── araxis-merge.jpg
│   ├── beyond-compare.png
│   ├── delta-walker.jpg
│   ├── filemerge.png
│   └── kaleidoscope.png
├── CONTRIBUTING.md
├── Cpp
│   └── README.md
├── Docker
│   └── README.md
├── Git
│   ├── README.md
│   └── gitignore.md
└── Go
    └── README.md

5 directories, 14 files
```

To limit the recursion you can pass an `-L` flag and specify the maximum depth `tree` will use when searching.

```bash
$ tree -L 1
```

will output:

```bash
.
├── Apps
├── CONTRIBUTING.md
├── Cpp
├── Docker
├── Git
└── Go

5 directories, 1 files
```
