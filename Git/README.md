# Git and GitHub

What's a developer without [Git](http://git-scm.com/)? To install, run:

    $ brew install git

When done, to test that it installed properly you can run:

    $ git --version

And `which git` should output `/usr/local/bin/git`.

Next, we'll define your Git user (should be the same name and email you use for
[GitHub](https://github.com/)):

```sh
$ git config --global user.name "Your Name Here"
$ git config --global user.email "your_email@youremail.com"
```

They will get added to your `.gitconfig` file.

To push code to your GitHub repositories, we're going to use the recommended
HTTPS method (versus SSH). To prevent `git` from asking for your username and
password every time you push a commit you can cache your credentials by running
the following command, as described in the
[instructions](https://help.github.com/articles/caching-your-github-password-in-git/).

    $ git config --global credential.helper osxkeychain

## SSH Config for GitHub

The instructions below are referenced from [the official
documentation](https://help.github.com/articles/generating-ssh-keys).

### Check for existing SSH keys

First, we need to check for existing SSH keys on your computer. We do this by
running:

```sh
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

Check the directory listing to see if you have files named either `id_rsa.pub`
or `id_dsa.pub`. If you don't have either of those files then read on,
otherwise skip the next section.

### Generate a new SSH key

If you don't have an SSH key you need to generate one. To do that you need to
run the commands below, and make sure to substitute the placeholder with your
email. The default settings are preferred, so when you're asked to "enter a
file in which to save the key,"" just press Enter to continue.

```sh
$ ssh-keygen -t rsa -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label
```

### Add your SSH key to the ssh-agent

Run the following commands to add your SSH key to the `ssh-agent`.

```sh
$ eval "$(ssh-agent -s)"
```

If you're running macOS Sierra 10.12.2 or later, you will need to modify your
`~/.ssh/config` file to automatically load keys into the ssh-agent and store
passphrases in your keychain:

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

No matter what operating system version you run you need to run this command to
complete this step:

```sh
$ ssh-add -K ~/.ssh/id_rsa
```

### Adding a new SSH key to your GitHub account

The last step is to let GitHub know about your SSH key. Run this command to copy your key to your clipboard:

```sh
$ pbcopy < ~/.ssh/id_rsa.pub
```

Then go to GitHub and [input your new SSH
key](https://github.com/settings/ssh/new). Paste your key in the "Key" textbox
and pick a name that represents the computer you're currently using.
