# Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) is a lightweight code editor with support for many programming languages through [extensions](https://code.visualstudio.com/docs/editor/extension-gallery)

## Installation

To install the latest version, use Homebrew:

```bash
brew cask install visual-studio-code
```

## macOS integration

Launch VS Code from the [command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

After that, you can launch VS Code from your terminal:

* `code .` will open VS Code in the current directory
* `code myfile.txt` will open `myfile.txt` in VS Code

### Python Extension

Install this extension
https://marketplace.visualstudio.com/items?itemName=ms-python.python

Configure the two things below

1. Change the default formatter to "Black" instead of "Autopep8". Very critical to avoid large diffs. Go to "Preferences" -> User Settings and update the setting "python.formatter.provider" to "Black" https://code.visualstudio.com/docs/python/editing

2. Enable Format on Save Setting: "Editor: Format On Save" setting on Code -> Preferences -> Settings

3. Open a python file and check if you write code that it automatically formats on saving the file.

### Markdown rendering extension

This extension allows you to see mardown files easily in Visual Studio itself so that we can read documentation directly from VS Code
https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced

### Javascript extensions

ESLint = Useful to check Javascript errors

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Prettier - Javascript code formatter
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### SQL Extensions

Format all sql files with this formatter

https://marketplace.visualstudio.com/items?itemName=bradymholt.pgformatter

## Optional extentions to consider

### GitLens

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

### Docker: Control Docker images right from VS Code

Instructions can be found here: https://code.visualstudio.com/docs/containers/overview, Extension: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

### Paste JSON as Code

https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype 
