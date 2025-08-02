#!/bin/bash -e

readonly commands=(git npm)

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
if git diff --quiet website/docs/contributors.md; then
  echo "👥 No contributor changes to commit"
else
  git add website/docs/contributors.md
  git commit -m "Update list of contributors"
  git push origin main
  echo "👥 Completed updating list of contributors"
fi

echo "📖 Building the guide using Docusaurus.."
yarn install
npm run build
echo "📖 Done building guide"

# Get current commit hash before switching branches
readonly MAIN_HASH=$(git rev-parse --short HEAD)

git checkout gh-pages
git pull origin gh-pages --rebase

# Clean old files and copy new build
rm -rf *.html *.css *.js assets img docs static
cp -R website/build/* .

echo "🌲 Cleaning untracked files from working tree.."
git clean -fx node_modules
git clean -fx website/node_modules
git clean -fx website/build
echo "🌲 Done cleaning untracked files"

git add .

git commit -a -m "Deploy Docusaurus version from main@$MAIN_HASH"

git push origin gh-pages
git checkout main

echo "😎 Finished building and deploying new version of guide"
