# IPython

[IPython](http://ipython.org/) is an awesome project which provides a much better Python shell than the one you get from running `$ python` in the command-line. It has many cool functions (running Unix commands from the Python shell, easy copy & paste, creating Matplotlib charts in-line, etc.) and I'll let you refer to the [documentation](http://ipython.org/ipython-doc/stable/index.html) to discover them.
IPython is a kernal for Jupyter Notebook. If you are confused iPython with Jupyter,  refer to thd [Jupyter documentation](http://jupyter.readthedocs.io/en/latest/ipython/content-ipython.html)

### Install

    $ pip install ipython

If you want a more fine grained command you can try the following:

For zsh -> `$ pip install 'ipython[zmq,qtconsole,notebook,test]'`

For bash -> `$ pip install ipython[zmq,qtconsole,notebook,test]`
