# Numpy, Scipy and Matplotlib

The [NumPy](https://numpy.org/), [SciPy](https://scipy.org/) and [Matplotlib](https://matplotlib.org/) scientific libraries for Python are always a little tricky to install from source because they have all these dependencies they need to build correctly.

There are two ways to install these libraries:

* Using `pip`

Python provides an inbuilt package management system `pip` which can be used to install these libraries

```sh
python -m pip install --user numpy scipy matplotlib ipython jupyter pandas sympy nose
```

* Using [MacPorts](https://www.macports.org/) and Python 3.5

```sh
sudo port install py35-numpy py35-scipy py35-matplotlib py35-ipython +notebook py35-pandas py35-sympy py35-nose
```
