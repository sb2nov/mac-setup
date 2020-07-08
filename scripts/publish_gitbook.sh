#!/bin/bash -e

readonly commands=(git gitbook cp)

# Make sure we don't push unrelated changes
if [[ $(git status -s | wc -l) -gt 0 ]]; then
  echo "🚨 You have changed files. Aborting."
  exit 1
fi

function is_available {
  command -v $1 >/dev/null 2>&1 ||
    { echo >&2 "🚨 I require $1 but it's not installed. Aborting."; exit 1; }
}

# Make sure all executables are available on $PATH
for cmd in ${commands[@]}; do is_available "$cmd"; done
echo "✅ All required packages are available, will continue"

echo "👥 Updating list of contributors.."
node ./scripts/generate_contributors.js
git commit -a -m "Update list of contributors"
git push origin main
echo "👥 Completed updating list of contributors"

echo "📖 Building the guide using gitbook.."
gitbook install
gitbook build
echo "📖 Done building guide"

git checkout gh-pages
git pull origin gh-pages --rebase

cp -R _book/* .

echo "🌲 Cleaning untracked files from working tree.."
git clean -fx node_modules
git clean -fx _book
echo "🌲 Done cleaning untracked files"

git add .

readonly HASH=$(git rev-parse --short HEAD)
git commit -a -m "Deploy version with hash $HASH"

git push origin gh-pages
git checkout main

echo "😎 Finished building and deploying new version of guide"
