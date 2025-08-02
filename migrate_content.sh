#!/bin/bash

# Script to migrate GitBook content to Docusaurus format

DOCS_DIR="website/docs"

# Create directory structure
mkdir -p "$DOCS_DIR"/{homebrew,iterm,git,sublime-text,python,java,ruby,docker,apps}

# Function to convert GitBook markdown to Docusaurus format
convert_file() {
    local source_file="$1"
    local dest_file="$2"
    local title="$3"
    
    if [ -f "$source_file" ]; then
        echo "Converting $source_file to $dest_file"
        
        # Create frontmatter and add content
        {
            echo "---"
            echo "title: $title"
            echo "---"
            echo ""
            # Skip the first line if it's a title, then add the rest
            tail -n +2 "$source_file"
        } > "$dest_file"
    else
        echo "Source file $source_file not found"
    fi
}

# Convert main files
convert_file "Xcode/README.md" "$DOCS_DIR/xcode.md" "Xcode"
convert_file "BashCompletion/README.md" "$DOCS_DIR/bash-completion.md" "Bash Completion"
convert_file "Vim/README.md" "$DOCS_DIR/vim.md" "Vim"
convert_file "Emacs/README.md" "$DOCS_DIR/emacs.md" "Emacs"
convert_file "VisualStudioCode/README.md" "$DOCS_DIR/visual-studio-code.md" "Visual Studio Code"
convert_file "JetBrainsIDEs/README.md" "$DOCS_DIR/jetbrains-ides.md" "JetBrains IDEs"
convert_file "PostgreSQL/README.md" "$DOCS_DIR/postgresql.md" "PostgreSQL"
convert_file "MyySQL/README.md" "$DOCS_DIR/mysql.md" "MySQL"
convert_file "Cpp/README.md" "$DOCS_DIR/cpp.md" "C++"
convert_file "Scala/README.md" "$DOCS_DIR/scala.md" "Scala"
convert_file "Rust/README.md" "$DOCS_DIR/rust.md" "Rust"
convert_file "Node.js/README.md" "$DOCS_DIR/nodejs.md" "Node.js"
convert_file "Go/README.md" "$DOCS_DIR/go.md" "Go"
convert_file "Heroku/README.md" "$DOCS_DIR/heroku.md" "Heroku"
convert_file "Vagrant/README.md" "$DOCS_DIR/vagrant.md" "Vagrant"
convert_file "LaTeX/README.md" "$DOCS_DIR/latex.md" "LaTeX"
convert_file "Security/README.md" "$DOCS_DIR/security.md" "Security"
convert_file "References/README.md" "$DOCS_DIR/references.md" "References"
convert_file "Contributors.md" "$DOCS_DIR/contributors.md" "Contributors"

# Convert Homebrew files
convert_file "Homebrew/README.md" "$DOCS_DIR/homebrew/index.md" "Homebrew"
convert_file "Homebrew/Usage.md" "$DOCS_DIR/homebrew/usage.md" "Usage"
convert_file "Homebrew/Cask.md" "$DOCS_DIR/homebrew/cask.md" "Cask"

# Convert iTerm files
convert_file "iTerm/README.md" "$DOCS_DIR/iterm/index.md" "iTerm2"
convert_file "iTerm/zsh.md" "$DOCS_DIR/iterm/zsh.md" "Zsh"
convert_file "iTerm/tree.md" "$DOCS_DIR/iterm/tree.md" "tree"
convert_file "iTerm/fzf.md" "$DOCS_DIR/iterm/fzf.md" "fzf"
convert_file "iTerm/ack.md" "$DOCS_DIR/iterm/ack.md" "ack"

# Convert Git files
convert_file "Git/README.md" "$DOCS_DIR/git/index.md" "Git"
convert_file "Git/gitignore.md" "$DOCS_DIR/git/gitignore.md" "Git Ignore"

# Convert Sublime Text files
convert_file "SublimeText/README.md" "$DOCS_DIR/sublime-text/index.md" "Sublime Text"
convert_file "SublimeText/Preferences.md" "$DOCS_DIR/sublime-text/preferences.md" "Preferences"
convert_file "SublimeText/Packages.md" "$DOCS_DIR/sublime-text/packages.md" "Packages"
convert_file "SublimeText/Plugins.md" "$DOCS_DIR/sublime-text/plugins.md" "Plugins"
convert_file "SublimeText/SublimeLinter.md" "$DOCS_DIR/sublime-text/sublime-linter.md" "Sublime Linter"

# Convert Python files
convert_file "Python/README.md" "$DOCS_DIR/python/index.md" "Python"
convert_file "Python/pip.md" "$DOCS_DIR/python/pip.md" "Pip"
convert_file "Python/virtualenv.md" "$DOCS_DIR/python/virtualenv.md" "Virtualenv"
convert_file "Python/numpy.md" "$DOCS_DIR/python/numpy.md" "Numpy"
convert_file "Python/ipython.md" "$DOCS_DIR/python/ipython.md" "IPython"

# Convert Java files
convert_file "Java/README.md" "$DOCS_DIR/java/index.md" "Java"
convert_file "Java/sdkman.md" "$DOCS_DIR/java/sdkman.md" "SDKMAN!"

# Convert Ruby files
convert_file "Ruby/README.md" "$DOCS_DIR/ruby/index.md" "Ruby"
convert_file "Ruby/RubyGems.md" "$DOCS_DIR/ruby/rubygems.md" "RubyGems"

# Convert Docker files
convert_file "Docker/README.md" "$DOCS_DIR/docker/index.md" "Docker"
convert_file "Docker/UsefulCommands.md" "$DOCS_DIR/docker/useful-commands.md" "Useful Commands"
convert_file "Docker/TipsAndTricks.md" "$DOCS_DIR/docker/tips-and-tricks.md" "Tips and Tricks"

# Convert Apps files
convert_file "Apps/README.md" "$DOCS_DIR/apps/index.md" "Other Apps"
convert_file "Apps/Octave.md" "$DOCS_DIR/apps/octave.md" "Octave"
convert_file "Apps/Settings.md" "$DOCS_DIR/apps/settings.md" "App Settings"

echo "Content migration completed!"