# IPython (Jupyter)

[IPython](http://ipython.org/) is an awesome project which provides a much better Python shell than the one you get from running `$ python` in the command-line. It has many cool functions (running Unix commands from the Python shell, easy copy & paste, creating Matplotlib charts in-line, etc.) and I'll let you refer to the [documentation](http://ipython.org/ipython-doc/stable/index.html) to discover them.
IPython is a kernal for Jupyter Notebook. If you are confused iPython with Jupyter,  refer to thd [Jupyter documentation](http://jupyter.readthedocs.io/en/latest/ipython/content-ipython.html)

### Install



## pip

    $ pip install ipython

If you want a more fine grained command you can try the following:

For zsh -> `$ pip install 'ipython[zmq,qtconsole,notebook,test]'`

For bash -> `$ pip install ipython[zmq,qtconsole,notebook,test]`

or you can use `pip3`

```shell
pip3 install --upgrade pip
pip3 install jupyter
```

## conda



For new users, we **highly recommend** [installing Anaconda](https://www.continuum.io/downloads). Anaconda conveniently installs Python, the Jupyter Notebook, and other commonly used packages for scientific computing and data science.

We recommend using the Anaconda distribution to install Python and Jupyter. We’ll go through its installation in the next section.

- Download [Anaconda](https://www.continuum.io/downloads). We recommend downloading Anaconda’s latest Python 3 version (currently Python 3.5).
- Install the version of Anaconda which you downloaded, following the instructions on the download page.
- Congratulations, you have installed Jupyter Notebook. To run the notebook:`jupyter notebook`







# Documentions



You can find some docs in this [page](https://jupyter.readthedocs.io/en/latest/index.html). The Jupyter(include IPython) provides several useful magic methods. Here I can list some features: 

Use `timeit` to timing computation modules,  sometimes to compare to a older one.

```python
In [1]: %timeit range(1000)
100000 loops, best of 3: 7.76 us per loop

In [2]: %%timeit x = range(10000)
   ...: max(x)
   ...:
1000 loops, best of 3: 223 us per loop
```

Some shell commands:

```python
!cd
!pwd
!ls

```

Check input in history

```python
%history
```

... 



By the way, if you used to do research about data visualization, you will find IPython show chart easily with these libraries: `matplotlib` `seaborn` `ggplot`.  Have fun. 