# Heroku

[Heroku](http://www.heroku.com/) is a [Platform-as-a-Service](http://en.wikipedia.org/wiki/Platform_as_a_service) (PaaS) that simplifies deploying your apps online.

## Installation

Assuming you have a Heroku account ([sign up](https://signup.heroku.com) if you don't), let's install the [Heroku Client](https://devcenter.heroku.com/articles/using-the-cli) for the command-line using Homebrew.

```sh
brew install heroku/brew/heroku
```

The formula might not have the latest version of the Heroku Client, which is updated pretty often. Let's update it now:

```sh
heroku update
```

Don't be afraid to run `heroku update` every now and then to always have the most recent version.

## Setup

Login to your Heroku account using your email and password:

```sh
heroku login
```

If this is a new account, and since you don't already have a public **SSH key** in your `~/.ssh` directory, it will offer to create one for you. It will also upload the key to your Heroku account, which will allow you to deploy apps from this computer.

If it didn't offer create the SSH key for you (i.e. your Heroku account already has SSH keys associated with it), you can do so manually by running:

```sh
mkdir ~/.ssh
ssh-keygen -t rsa
```

Keep the default file name and skip the passphrase by just hitting Enter both times. Then, add the key to your Heroku account:

```sh
heroku keys:add
```

## Usage

Once your keys are in place and you are authorized, you're ready to deploy apps. Heroku has a [getting started guide](https://devcenter.heroku.com/articles/python), which has all the information you need (the one linked here is for Python, but there is one for every popular language). Heroku uses Git to push code for deployment, so make sure your app is under Git version control.

A cheat sheet for deployment:

```console
$ cd myapp/

# Create the app on Heroku
$ heroku create myapp

# Deploy it
$ git push heroku master

# Check its status
$ heroku ps

# Check the logs
$ heroku logs -t
```

The [Heroku Dev Center](https://devcenter.heroku.com/) is where you will find more information.
