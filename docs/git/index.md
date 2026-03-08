---
title: Git
---


What's a developer without [Git](http://git-scm.com/)? To install, run:

```sh
brew install git
```

When done, to test that it installed properly you can run:

```sh
git --version
```

And `which git` should output `/opt/homebrew/bin/git` (Apple Silicon) or `/usr/local/bin/git` (Intel).

### Git LFS

[Git Large File Storage](https://git-lfs.github.com/) replaces large files with text pointers inside Git while storing the file contents on a remote server.

```sh
brew install git-lfs
git lfs install
```

### GitHub CLI

The [GitHub CLI](https://cli.github.com/) (`gh`) brings GitHub to your terminal. You can create PRs, review code, manage issues, and more without leaving the command line.

```sh
brew install gh
```

Authenticate with your GitHub account:

```sh
gh auth login
```

Next, we'll define your Git user (should be the same name and email you use for [GitHub](https://github.com/)):

```sh
git config --global user.name "Your Name Here"
git config --global user.email "your_email@youremail.com"
```

They will get added to your `.gitconfig` file.

To push code to your GitHub repositories, we will use the recommended HTTPS method. There are also instructions for using SSH. To prevent `git` from asking for your username and password every time you push a commit you can cache your credentials by running the following command, as described in the [instructions](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).

```sh
git config --global credential.helper osxkeychain
```

## Using HTTPS for GitHub (recommended)

These instructions are from [the official documentation](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls).

### Clone repositories using HTTPS

After creating a new repo on GitHub, clone it using:

```sh
git clone https://github.com/<username>/<repo-name>.git
```

\- if you had initialized with a README.

If you did not, follow the instructions in the section below.

### Set up a new or existing repo with HTTPS for GitHub

If you are setting up a new repo, add at least one file and commit first. Then, configure the remote and push to GitHub by running:

```sh
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## SSH Config for GitHub

These instructions are for those who wish to use SSH and not HTTPS, and are from [the official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### Check for existing SSH keys

First check for existing SSH keys on your computer by running:

```sh
ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

Check the directory listing to see if you have files named either `id_ed25519.pub` or `id_rsa.pub`. If you don't have either of those files then read on, otherwise skip the next section.

### Generate a new SSH key

If you don't have an SSH key you need to generate one. To do that you need to run the commands below, and make sure to substitute the placeholder with your email. The default settings are preferred, so when you're asked to enter a file in which to save the key, just press Enter to continue.

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label
```

### Add your SSH key to the ssh-agent

Run the following commands to add your SSH key to the `ssh-agent`.

```sh
eval "$(ssh-agent -s)"
```

Modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain:

```ssh-config
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Then add your SSH key to the ssh-agent:

```sh
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

### Adding a new SSH key to your GitHub account

The last step is to let GitHub know about your SSH key so GitHub can recognize you. Run this command to copy your key to your clipboard:

```sh
pbcopy < ~/.ssh/id_ed25519.pub
```

Then go to GitHub and [input your new SSH key](https://github.com/settings/ssh/new). Paste your key in the "Key" text-box and pick a name that represents the computer you're currently using.

We are now ready to use SSH with GitHub!

### Clone repositories using SSH

After creating a new repo on GitHub, clone it using

```sh
git clone git@github.com:<username>/<repo-name>.git
```

\- if you had initialized with a README.

If you did not, follow the instructions in the section below.

### Set up a new or existing repo with SSH for GitHub

If you are setting up a new repo, add at least one file and commit first. Then, configure the remote and push to GitHub by running:

```sh
git remote add origin git@github.com:<username>/<repo-name>.git
git push -u origin main
```
