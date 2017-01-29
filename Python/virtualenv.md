# Virtualenv

[Virtualenv](http://www.virtualenv.org/) is a tool that creates an isolated Python environment for each of your projects. For a particular project, instead of installing required packages globally, it is best to install them in an isolated folder in the project (say a folder named `venv`), that will be managed by virtualenv.

The advantage is that different projects might require different versions of packages, and it would be hard to manage that if you install packages globally. It also allows you to keep your global `/usr/local/lib/python2.7/site-packages` folder clean, containing only critical or big packages that you always need (like IPython, Numpy).

### Install pyenv method
There is a pyenv plugin named [pyenv-virtualenv](https://github.com/yyuu/pyenv-virtualenv) which comes with various features to help pyenv users to manage virtual environments created by virtualenv or Anaconda. Use this plugin if you are using pyenv.

Install with homebrew other methods can be found [here](https://github.com/yyuu/pyenv-virtualenv#installation) :

    $ brew install pyenv-virtualenv

After installation, update the env.sh:

    $ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/Projects/config/env.sh

#### Usage pyenv-virtualenv
Let's say you have a project in a directory called `myproject`. To set up pyenv-virtualenv for that project:

    $ cd myproject/
    $ pyenv virtualenv 2.7.10 venv2.7.10

This will create a virtualenv based on Python 2.7.10 under ~/.pyenv/versions in a folder called venv2.7.10

Now activate your venv:

    pyenv activate <name>
    pyenv deactivate

For more advanced configurations, [read on](https://github.com/yyuu/pyenv-virtualenv#installation)

### Install (not pyenv method)
To install virtualenv, simply run:

    $ pip install virtualenv

#### Usage virtualenv

Let's say you have a project in a directory called `myproject`. To set up virtualenv for that project:

    $ cd myproject/
    $ virtualenv venv

If you want your virtualenv to also inherit globally installed packages (like IPython or Numpy mentioned above), use:

    $ virtualenv venv --system-site-packages

These commands create a `venv` subdirectory in your project where everything is installed. You need to **activate** it first though (in every terminal where you are working on your project):

    $ source venv/bin/activate

You should see a `(venv)` appear at the beginning of your terminal prompt indicating that you are working inside the virtualenv. Now when you install something:

    $ pip install <package>

It will get installed in the `venv` folder, and not conflict with other projects.

To leave the virtual environment use.

    $ deactivate

**Important**: Remember to add `venv` to your project's `.gitignore` file so you don't include all of that in your source code!

It is preferable to install big packages (like Numpy), or packages you always use (like IPython) globally. All the rest can be installed in a virtualenv.

### Virtualenvwrapper
For easier management of different virtual environments for multiple packages. Installing Virtualenv Wrapper is possible. For installation instructions read the [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) documents here.

Add this to `env.sh`:

    # Virtual Environment
    export WORKON_HOME=$HOME/.virtualenvs
    export PROJECT_HOME=$HOME/Projects
    source /usr/local/bin/virtualenvwrapper.sh

One thing to mention is that virtualenvwrapper keeps all the virtual environments in `~/.virtualenv` and does not add them to the project directory.
