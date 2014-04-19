# Git and Github

What's a developer without [Git](http://git-scm.com/)? To install, simply run:

    $ brew install git

When done, to test that it installed fine you can run:

    $ git --version

And `$ which git` should output `/usr/local/bin/git`.

Next, we'll define your Git user (should be the same name and email you use for [GitHub](https://github.com/)):

    $ git config --global user.name "Your Name Here"
    $ git config --global user.email "your_email@youremail.com"

They will get added to your `.gitconfig` file.

To push code to your GitHub repositories, we're going to use the recommended HTTPS method (versus SSH). So you don't have to type your username and password everytime, let's enable Git password caching as described [here](https://help.github.com/articles/set-up-git):

    $ git config --global credential.helper osxkeychain

**Note**: This might be difficult to configure in case you have two factor authentication enabled. Please use the SSH config in that case.

Setting up SSH is really simple as well. Most of the instructions below are referenced from [here](https://help.github.com/articles/generating-ssh-keys).

First, we need to check for existing SSH keys on your computer. Open up your Terminal and type:

    $ cd ~/.ssh
    $ ls -al
    # Lists the files in your .ssh directory

Check the directory listing to see if you have files named either id_rsa.pub or id_dsa.pub. If you don't have either of those files go to step 2. Otherwise, you can skip to step 3.

Second, To generate a new SSH key, copy and paste the text below, making sure to substitute in your email. The default settings are preferred, so when you're asked to "enter a file in which to save the key,"" just press enter to continue.

    $ ssh-keygen -t rsa -C "your_email@example.com"
    # Creates a new ssh key, using the provided email as a label
    # Generating public/private rsa key pair.
    # Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

Please use a strong passphrase for your keys.

Third, Add your keys to Github by going into account settings.

**Note**: On a Mac, it is important to remember to add `.DS_Store` (a hidden OS X system file that's put in folders) to your `.gitignore` files.