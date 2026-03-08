---
title: C++
---


Make sure you have installed [Xcode Command Line Tools](/xcode). Verify the compiler is available:

```console
$ c++ --version
Apple clang version 16.0.0 (clang-1600.0.26.6)
Target: arm64-apple-darwin24.3.0
Thread model: posix
```

To be able to compile files from your terminal you can add the following alias in your shell configuration file (e.g. `~/.zshrc`).

```sh
alias cppcompile='c++ -std=c++17 -stdlib=libc++'
```

Then you can run all cpp file directly using `cppcompile main.cpp` and it will use C++17.
