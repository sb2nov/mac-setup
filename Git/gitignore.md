# Git Ignore (global)

Create the file `~/.gitignore` as shown below to not track files that are almost always ignored in all Git repositories.

```
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

Or simply download the [OS X specific .gitignore](https://github.com/github/gitignore/blob/master/Global/macOS.gitignore) maintained by GitHub itself and put contents of it to `~/.gitignore`.

**Note**: You can also download it using curl and put it in the right place
with this command:
```sh
curl https://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore -o ~/.gitignore
```
