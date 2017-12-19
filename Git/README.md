# Git and GitHub

What's a developer without [Git](http://git-scm.com/)? To install, simply run:

```
$ brew install git
```

When done, to test that it installed fine you can run:

```
$ git --version
```

And `$ which git` should output `/usr/local/bin/git`.

Next, we'll define your Git user \(should be the same name and email you use for [GitHub](https://github.com/)\):

```
$ git config --global user.name "Your Username Here"
$ git config --global user.email "your_email@youremail.com"
```

They will get added to your `.gitconfig` file.

To push code to your GitHub repositories, we're going to use the recommended HTTPS method \(versus SSH\). So you don't have to type your username and password everytime, let's enable Git password caching as described [here](https://help.github.com/articles/set-up-git):

```
$ git config --global credential.helper osxkeychain
```

* * -

### SSH Config for GitHub

This might be difficult to configure in case you have two factor authentication enabled. Please use the SSH config in that case.

Setting up SSH is really simple as well. Most of the instructions below are referenced from [here](https://help.github.com/articles/generating-ssh-keys).

First, we need to check for existing SSH keys on your computer. Open up your Terminal and type:

```
$ cd ~/.ssh
$ ls -al
# Lists the files in your .ssh directory
```

Check the directory listing to see if you have files named either id\_rsa.pub or id\_dsa.pub. If you don't have either of those files go to step 2. Otherwise, you can skip to step 3.

Second, To generate a new SSH key, copy and paste the text below, making sure to substitute in your email. The default settings are preferred, so when you're asked to "enter a file in which to save the key,"" just press enter to continue.

```
$ ssh-keygen -t rsa -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label
# Generating public/private rsa key pair.
# Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

Please use a strong passphrase for your keys. Open the key with and copy the content:

```
vim ~/.ssh/id_rsa.pub
```

Third, Add your keys to GitHub by going into account settings.

### Setting up Diffmerge as the Git Mergetool

More details can be found [here](https://www.sourcegear.com/diffmerge/webhelp/sec__git__mac.html)

```
$ git config --global diff.tool diffmerge
$ git config --global difftool.diffmerge.cmd "/usr/local/bin/diffmerge \"\$LOCAL\" \"\$REMOTE\""

$ git config --global merge.tool diffmerge
$ git config --global mergetool.diffmerge.trustExitCode true
$ git config --global mergetool.diffmerge.cmd "/usr/local/bin/diffmerge --merge --result=\"\$MERGED\" \"\$LOCAL\" \"\$BASE\" \"\$REMOTE\""
```



