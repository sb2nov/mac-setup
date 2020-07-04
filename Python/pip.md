# pip

macOS comes with Python so there's a chance `pip` is already installed on your machine.

## Installation

```console
curl https://bootstrap.pypa.io/get-pip.py > get-pip.py
sudo python get-pip.py
```

To verify `pip` is installed properly run

```sh
pip --version
```

If it returns a version `pip` was successfully installed.

## Usage

Here are a few `pip` commands to get you started.

Install a Python package

```sh
pip install <package>
```

Upgrade a package

```sh
pip install --upgrade <package>
```

See what's installed

```sh
pip freeze
```

Uninstall a package

```sh
pip uninstall <package>
```
