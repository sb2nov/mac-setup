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

Install this extension for Python code highlighting
https://marketplace.visualstudio.com/items?itemName=ms-python.python

Configure the two things below, in order to enable auto-formatting on "Save", i.e. `⌘ + S`

1. Change the default formatter to "`Black`" instead of "`Autopep8`". Very critical to avoid large diffs. Go to "Preferences" -> User Settings and update the setting "`python.formatter.provider`" to "Black" https://code.visualstudio.com/docs/python/editing

2. Enable `Format on Save` Setting: "Editor: Format On Save" setting on Code -> Preferences -> Settings

3. To test, Open a Python file and check if you write code that it automatically formats on saving the file.

### Markdown rendering extension

This extension allows you to see Markdown files easily in Visual Studio itself so that we can read documentation directly from VS Code
https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced

### JavaScript extensions

ESLint - Useful to check JavaScript errors and helps in auto-formatting the code
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Prettier - JavaScript code formatter
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### SQL Extensions

Format all SQL files with this formatter
https://marketplace.visualstudio.com/items?itemName=bradymholt.pgformatter

## Optional extentions to consider:

### GitLens

Used to visually represent the Git commit history and enables quick git actions in addition to those already provided by VS Code
https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

### Docker: to control Docker images right from VS Code

Instructions can be found here: https://code.visualstudio.com/docs/containers/overview, Extension: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

### Paste JSON as Code:
Infers types from sample JSON data, then outputs strongly typed models and serializers for working with that data in your desired programming language. To use this extension, just copy some JSON and use "Edit/Paste JSON as Code".
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype
