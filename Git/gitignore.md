# Git Ignore (global)

Create the file `~/.gitignore` as shown below

```gitignore
# Folder view configuration files
.DS_Store
Desktop.ini

# Thumbnail cache files
._*
Thumbs.db

# Files that might appear on external disks
.Spotlight-V100
.Trashes

# Compiled Python files
*.pyc

# Compiled C++ files
*.out

# Application specific files
venv
node_modules
.sass-cache
```

followed by running the command below, in terminal:

```sh
git config --global core.excludesfile ~/.gitignore
```

to not track files that are almost always ignored in all Git repositories.

Or simply download [macOS specific .gitignore](https://github.com/github/gitignore/blob/master/Global/macOS.gitignore) maintained by GitHub itself and put contents of it to `~/.gitignore`.

* You can also use a default gitignore using Curl

```sh
curl https://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore -o ~/.gitignore
```

## Generate gitignore

Visit [gitignore.io](https://www.gitignore.io/?templates=macos) and fill it with your needs.
