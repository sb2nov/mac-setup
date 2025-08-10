#!/bin/bash -e

# -----------------------------------------------------------------------------
# publish_docusaurus.sh
#
# This script automates building and deploying the Docusaurus documentation
# site to the `gh-pages` branch.
#
# Steps:
#   1. Verifies that required binaries are available.
#   2. Aborts if there are any uncommitted changes in the working directory
#      to avoid pushing unrelated changes.
#   3. Runs the contributor list generator (`scripts/generate_contributors.js`)
#      and commits any changes to `docs/contributors.md` to `main`.
#   4. Installs dependencies with Yarn and builds the Docusaurus site.
#   5. Saves the current commit hash (used later in the deploy commit message).
#   6. Switches to the `gh-pages` branch and rebases with `origin/gh-pages`.
#   7. Removes previous site artifacts from the repo root on `gh-pages`
#      (HTML/CSS/JS plus `assets`, `img`, `docs`, `static`).
#   8. Copies the freshly built site from `build/` into the repo root.
#   9. Cleans untracked directories like `node_modules` and `build` on
#      `gh-pages` to avoid committing extra junk.
#  10. Stages changes and commits them with a message that includes the short
#      hash of the source commit from `main` (e.g., “Deploy …
#      from main@abc123”).
#  11. Pushes the update to `origin/gh-pages`.
#  12. Switches back to `main`.
#
# Usage:
#   ./scripts/publish_docusaurus.sh
#
# Requirements:
#   - git
#   - yarn
#   - node
#
# Note: This script has room for improvement, you could say. It's not an atomic
#       operation to deploy a new version which can lead to some annoyances. We
#       should probably let ChatGPT or some other LLM write a better script but
#       I'll let someone else do that, I've shared enough pain with this script
#       over the years :) /simeg
#
# -----------------------------------------------------------------------------

readonly required_bins=(git yarn node)

# Make sure we don't push unrelated changes
if [[ $(git status -s | wc -l) -gt 0 ]]; then
  echo "🚨 You have changed files. Aborting."
  exit 1
fi

function is_available {
  command -v "$1" >/dev/null 2>&1 ||
    { echo >&2 "🚨 I require $1 but it's not installed. Aborting."; exit 1; }
}

# Make sure all executables are available on $PATH
for cmd in "${required_bins[@]}"; do is_available "$cmd"; done
echo "✅ All required packages are available, will continue"

echo "👥 Updating list of contributors.."
node ./scripts/generate_contributors.js
if git diff --quiet docs/contributors.md; then
  echo "👥 No contributor changes to commit"
else
  git add docs/contributors.md
  git commit -m "Update list of contributors"
  git push origin main
  echo "👥 Completed updating list of contributors"
fi

echo "📖 Building the guide using Docusaurus.."
yarn install
yarn run build
echo "📖 Done building guide"

# Get current commit hash before switching branches
declare MAIN_HASH
MAIN_HASH=$(git rev-parse --short HEAD)
readonly MAIN_HASH

git checkout gh-pages
git pull origin gh-pages --rebase

# Clean old files and copy new build
rm -rf ./*.html ./*.css ./*.js ./assets ./img ./docs ./static
cp -R build/* .

echo "🌲 Cleaning untracked files from working tree.."
git clean -fx node_modules
git clean -fx node_modules
git clean -fx build
echo "🌲 Done cleaning untracked files"

git add .

git commit -a -m "Deploy Docusaurus version from main@$MAIN_HASH"

git push origin gh-pages
git checkout main

echo "😎 Finished building and deploying new version of guide"
