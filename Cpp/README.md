# CPlusPlus

Make sure you have installed [Xcode Command Line Tools](https://sourabhbajaj.com/mac-setup/Xcode/). Check the C++ version to make sure it is Clang 4.0+.

```console
$ c++ --version
Apple LLVM version 5.1 (clang-503.0.38) (based on LLVM 3.4svn)
Target: x86_64-apple-darwin13.1.0
Thread model: posix
```

To be able to compile files from your terminal you can add the following alias in your `env.sh` file.

```sh
alias cppcompile='c++ -std=c++11 -stdlib=libc++'
```

Then you can run all cpp file directly using `cppcompile main.cpp` and it will use C++11 so no errors in the case of using vectors, auto, sets etc.
