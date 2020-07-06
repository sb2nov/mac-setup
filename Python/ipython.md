# IPython

[IPython](http://ipython.org/) is an improved Python shell than the one you get from running `python` in the command-line. It has many cool functions (running Unix commands from the Python shell, easy copy & paste, creating Matplotlib charts in-line etc.). You can find all functions in the [documentation](http://ipython.readthedocs.io/en/stable/).
IPython is a kernel for Jupyter Notebook. If you are confused IPython with Jupyter, refer to the [Jupyter documentation](https://jupyter.readthedocs.io/en/latest/)

## Installation

```sh
pip install ipython
```

If you want a more fine-grained command you can try the following:

For zsh ->

```sh
pip install 'ipython[zmq,qtconsole,notebook,test]'
```

For bash ->

```sh
pip install ipython[zmq,qtconsole,notebook,test]
```
