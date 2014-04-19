# CPlusPlus

Make sure you have installed Xcode command line tools. Check the c++ version to make sure it is Clang 4.0+

    $ c++ --version
    Apple LLVM version 5.1 (clang-503.0.38) (based on LLVM 3.4svn)
    Target: x86_64-apple-darwin13.1.0
    Thread model: posix

Then create an alias for c++11 installation in your `env.sh` file.

    alias cppcompile='c++ -std=c++11 -stdlib=libc++'

Then you can run all cpp file directly using `cppcompile main.cpp` and it will use c++11 so no errors in the case of using vectors, auto, sets etc.
