# IPython

[IPython](http://ipython.org/) is an awesome project which provides a much better Python shell than the one you get from running `$ python` in the command-line. It has many cool functions (running Unix commands from the Python shell, easy copy & paste, creating Matplotlib charts in-line, etc.) and I'll let you refer to the [documentation](http://ipython.org/ipython-doc/stable/index.html) to discover them.

### Install

Before we install IPython, we'll need to get some dependencies. Run the following:

    $ brew update # Always good to do
    $ brew install zeromq # Necessary for pyzmq
    $ brew install pyqt # Necessary for the qtconsole
    $ pip install pyzmq
    $ pip install pygments
    $ pip install jinja2
    $ pip install tornado

It may take a few minutes to build these.

Once it's done, we can install IPython with all the available options:

    $ pip install ipython

If you want a more fine grained command you can try the following:

For zsh -> `$ pip install 'ipython[zmq,qtconsole,notebook,test]'`

For bash -> `$ pip install ipython[zmq,qtconsole,notebook,test]`
