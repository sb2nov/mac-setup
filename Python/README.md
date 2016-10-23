# Python

OS X, like Linux, ships with [Python](http://python.org/) already installed. But you don't want to mess with the system Python (some system tools rely on it, etc.), so we'll install our own version with Homebrew. It will also allow us to get the very latest version of Python 2.7.

The following command will install Python 2.7 and any dependencies required (it can take a few minutes to build everything):

    $ brew install python

When finished, you should get a summary in the terminal. Running `$ which python` should output `/usr/local/bin/python`.

It also installed [Pip](https://pypi.python.org/pypi/pip) (and its dependency [Setuptools](https://pypi.python.org/pypi/setuptools)), which is the package manager for Python. Let's upgrade them both:

    $ pip install --upgrade setuptools
    $ pip install --upgrade pip

Executable scripts from Python packages you install will be put in `/usr/local/share/python`, we already had this in the `Env.sh` file created before. Save the file and open a new terminal to take the new `$PATH` into account (everytime you open a terminal, `.bash_profile` gets loaded).

## P.S if you can't access pip.

This Guide will help you install pip if it is not already installed with the python installation that OSX ships with.

**Installation**

Open your teminal window and enter the following command

        curl https://bootstrap.pypa.io/get-pip.py > get-pip.py

then enter

        sudo python get-pip.py

Enter your password when prompted, Once the installation runs through you are done.

to verify pip is installed properely enter

        pip --version

If it tells you the version of pip you've installed, you are all set to use **pip**.
