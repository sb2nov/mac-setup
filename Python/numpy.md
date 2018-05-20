# Numpy, Scipy and Matplotlib

The [Numpy](http://numpy.scipy.org/), [Scipy](https://www.scipy.org/scipylib/index.html) and [Matplotlib](http://matplotlib.org/) scientific libraries for Python are always a little tricky to install from source because they have all these dependencies they need to build correctly. Luckily for us, [Samuel John](http://www.samueljohn.de/) has put together some [Homebrew formulae](https://github.com/samueljohn/homebrew-python) to make it easier to install these Python libraries.

First, grab the special formulae (which are not part of Homebrew core):

    $ brew tap samueljohn/python
    $ brew tap brewsci/bio

Then, install the `gfortran` dependency which we will need to build the libraries along with gcc:

    $ brew install gcc

Then, install `nose`, `pyparsing` and `python-dateutil` dependency which we will need to build the libraries:

    $ pip install nose pyparsing python-dateutil pep8

Finally, you can install Numpy and Scipy with:

    $ brew install numpy scipy matplotlib

(It may take a few minutes to build)
