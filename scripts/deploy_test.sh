#!/bin/bash -e

# Test script for deployment without actually deploying
# This allows us to verify the process without committing/pushing

readonly commands=(git npm)

function is_available {
  command -v $1 >/dev/null 2>&1 ||
    { echo >&2 "🚨 I require $1 but it's not installed. Aborting."; exit 1; }
}

# Make sure all executables are available on $PATH
for cmd in ${commands[@]}; do is_available "$cmd"; done
echo "✅ All required packages are available"

echo "👥 Testing contributor generation.."
node ./scripts/generate_contributors.js
echo "✅ Contributors generated successfully"

echo "📖 Testing build process.."
npm install
npm run build
echo "✅ Build completed successfully"

echo "🔍 Checking build output.."
if [ -f "website/build/index.html" ]; then
  echo "✅ index.html exists"
else
  echo "❌ index.html missing"
  exit 1
fi

if [ -d "website/build/assets" ]; then
  echo "✅ assets directory exists"
else
  echo "❌ assets directory missing"
  exit 1
fi

# Check if key pages exist
key_pages=("homebrew" "python" "git")
for page in "${key_pages[@]}"; do
  if [ -d "website/build/$page" ]; then
    echo "✅ $page directory exists"
  else
    echo "❌ $page directory missing"
    exit 1
  fi
done

echo ""
echo "🎉 Deployment test PASSED!"
echo "The following would be deployed to gh-pages:"
echo "$(find website/build -name "*.html" | wc -l) HTML files"
echo "$(find website/build -name "*.css" | wc -l) CSS files" 
echo "$(find website/build -name "*.js" | wc -l) JavaScript files"
echo ""
echo "✅ Contributors will be updated"
echo "✅ Static site will be built with Docusaurus"
echo "✅ Files will be copied to gh-pages branch"
echo ""
echo "To actually deploy, run: make deploy"