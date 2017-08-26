#!/bin/bash -e

readonly commands=(python git gitbook cp)

function is_available {
  command -v $1 >/dev/null 2>&1 ||
    { echo >&2 "I require $1 but it's not installed. Aborting."; exit 1; }
}

# Make sure all executables are available on $PATH
for cmd in ${commands[@]}; do is_available "$cmd"; done

echo "All required packages are available, will initialise publishing process"

# Update contributors list
python contributors.py
git commit -a -m "Update contributors"
git push origin master

# install the plugins and build the static site
gitbook install && gitbook build

# checkout to the gh-pages branch
git checkout gh-pages

# pull the latest updates
git pull origin gh-pages --rebase

# copy the static site files into the current directory.
cp -R _book/* .

# remove 'node_modules' and '_book' directory
git clean -fx node_modules
git clean -fx _book

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin gh-pages

# checkout to the master branch
git checkout master
