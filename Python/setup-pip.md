## Setup pip package manager in Mac os x

pip is a package management system used to install and manage software packages written in Python.

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