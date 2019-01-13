# pip

macOS comes with Python so there's a chance `pip` is already installed on your machine.

## Installation

    $ curl https://bootstrap.pypa.io/get-pip.py > get-pip.py
    $ sudo python get-pip.py

To verify `pip` is installed properly run

    $ pip --version

If it returns a version `pip` was successfully installed.

## Usage

Here are a few `pip` commands to get you started.

Install a Python package

    $ pip install <package>

Upgrade a package

    $ pip install --upgrade <package>

See what's installed

    $ pip freeze

Uninstall a package

    $ pip uninstall <package>
