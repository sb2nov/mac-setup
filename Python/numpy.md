## Numpy, Scipy and Matplotlib

The [Numpy](http://numpy.scipy.org/), [Scipy](http://www.scipy.org/SciPy) and [Matplotlib](http://matplotlib.org/) scientific libraries for Python are always a little tricky to install from source because they have all these dependencies they need to build correctly. Luckily for us, [Samuel John](http://www.samueljohn.de/) has put together some [Homebrew formulae](https://github.com/samueljohn/homebrew-python) to make it easier to install these Python libraries.

First, grab the special formulae (which are not part of Homebrew core):

    $ brew tap samueljohn/python
    $ brew tap homebrew/science

Then, install the `gfortran` dependency which we will need to build the libraries along with gcc:

    $ brew install gcc

Then, install `Nose`, `pyparsing` and `python-dateutil` dependency which we will need to build the libraries:

    $ pip install nose
    $ pip install pyparsing
    $ pip install python-dateutil
    $ pip install pep8

Finally, you can install Numpy and Scipy with:

    $ brew install numpy
    $ brew install scipy
    $ brew install matplotlib

(It may take a few minutes to build.)
