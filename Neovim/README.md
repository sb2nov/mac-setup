# neovim 
[neovim](https://neovim.io) is a hyperextensible Vim based text editor that is written in lua script and has an amazing community. One can configure it like VSCode which is very light, has a fast startup, does not lock and consumes very little system resources.
## Installation
### Homebrew 
NeoVim can be installed using [Homebrew](https://brew.sh) on macOS.
```sh
brew install neovim 
```
### Pre-built archives
```sh
curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz
tar xzf nvim-macos.tar.gz
./nvim-osx64/bin/nvim
```
### Post-Installation
After the installation is successful, you can launch neovim from command prompt using the *nvim* command. You can also create aliases in your corresponding .bash_profile or .zshrc files. At this stage there is not much difference between vim and neovim. We have to now edit the init.vim or init.lua file found in your $HOME/.config/nvim/ directory.
## Usage
One may use neovim like they use vim with the difference being that instead of a .vimrc file we are dealing with an init.vim or an init.lua file. However, since a majority of the code base in neovim uses lua, it has an excellent performance with a large ecosystem of plugins and themes. We get access Syntax highlighting, linting and supports Language Server Protocol. These reduce the number of plugins required to get syntax highlighting, definition search, hover, completion, rename, format and refactoring functions.
### Some Amazing Plugins
* [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) A language parser
* [nvim-telescope](https://github.com/nvim-telescope/nvim-telescope) More than a fuzzy finder.
* [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) Making Vim/Neovim as smart as VSCode.
There are also other powerful plugins that help with Markdown and LaTeX that are way beyond the scope of discussion.
## Customization
The complete setup of neovim to replace your IDE can be a very tedious task. So instead of writing your own init.vim or init.lua, one can download and use [LunarVim](https://www.lunarvim.org) which provides a fast IDE layer on neovim and comes preinstalled with features such as autocompletion, integrated terminal, file explorer, fuzzy finder, LSP, linting, formatting and debugging. Also one can use my [config](https://github.com/Sabitra/vimconfig) by forking it to your corresponding $HOME/.config/nvim folder.  
## More
To have a detailed youtube video tutorial on the setup, one can watch [Ben Awad's Configuration](https://www.youtube.com/watch?v=gnupOrSEikQ&t=700s)
### References
1. [Setting Up Neovim like VScode](https://dev.to/rishitpandey/setting-up-neovim-like-vscode-j8h#:~:text=Just%20add%20the%20plugin%20name,it%20will%20install%20that%20plugin.&text=This%20will%20install%20the%20vim,create%20a%20file%20as%20init.)
2. [neovim-like-vscode](https://github.com/josethz00/neovim-like-vscode)
3. [How to Configure Vim or Neovim Like VScode](https://codenanshu.in/tutorials/how-to-configure-vim-or-neovim-like-vscode)








