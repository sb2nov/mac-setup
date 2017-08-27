#!/bin/bash -e

readonly commands=(python git gitbook cp)

function is_available {
  command -v $1 >/dev/null 2>&1 ||
    { echo >&2 "I require $1 but it's not installed. Aborting."; exit 1; }
}

# Make sure all executables are available on $PATH
for cmd in ${commands[@]}; do is_available "$cmd"; done

echo "All required packages are available, will continue"

echo "Updating list of contributors"
python ./contributors.py
git commit -a -m "Update list of contributors"
git push origin master
echo "Finished updating list of contributors"

echo "Building the guide using gitbook"
gitbook install && gitbook build

git checkout gh-pages
git pull origin gh-pages --rebase

cp -R _book/* .

git clean -fx node_modules
git clean -fx _book
echo "Finished building guide"

git add .

readonly HASH=$(git rev-parse --short HEAD)
git commit -a -m "Deploy version with hash $HASH"

git push origin gh-pages
git checkout master

echo "Finished building and deploying new version of guide"
