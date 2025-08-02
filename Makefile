.PHONY: ci deploy deps install lint serve build

NPM = $(shell command -v npm 2> /dev/null)
MARKDOWNLINT = $(shell command -v ./node_modules/.bin/markdownlint 2> /dev/null)

# This is run on CI to verify linting is OK and that the guide builds
ci: lint build

# Build the Docusaurus site
build:
ifeq ($(NPM),)
	$(error "npm is not available, please install Node.js")
else
	$(NPM) run build
endif

# Deploy new version of the guide
deploy:
	sh ./scripts/publish_docusaurus.sh

# Install dependencies
deps:
ifeq ($(NPM),)
	$(error "npm is not available, please install Node.js")
else
	$(NPM) install
endif

# Install dependencies (alias for deps)
install: deps

# Lint markdown files
lint:
ifeq ($(MARKDOWNLINT),)
	$(error "markdownlint is not installed, run 'make deps' to install it")
else
	@$(MARKDOWNLINT) . --ignore node_modules --ignore website/node_modules --ignore website/build && echo 'All good 👌'
endif

# Start a development server
serve:
ifeq ($(NPM),)
	$(error "npm is not available, please install Node.js")
else
	$(NPM) start
endif

# Start alias
start: serve
