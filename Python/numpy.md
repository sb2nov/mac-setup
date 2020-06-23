# Numpy, Scipy and Matplotlib

The [Numpy](http://numpy.scipy.org/), [Scipy](https://www.scipy.org/scipylib/index.html) and [Matplotlib](http://matplotlib.org/) scientific libraries for Python are always a little tricky to install from source because they have all these dependencies they need to build correctly.

There are two ways to install these libraries:

* Using `pip`

Python provides an inbuilt package management system `pip` which can be used to install these libraries

```shell script
python -m pip install --user numpy scipy matplotlib ipython jupyter pandas sympy nose
```

* Using [Macports](https://www.macports.org/) and Python 3.5

```shell script
sudo port install py35-numpy py35-scipy py35-matplotlib py35-ipython +notebook py35-pandas py35-sympy py35-nose
```