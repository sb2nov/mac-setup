.PHONY: ci build deploy deps lint serve

YARN			= $(shell command -v yarn 2> /dev/null)
MARKDOWNLINT	= $(shell command -v ./node_modules/.bin/markdownlint 2> /dev/null)

# This is run on CI to verify linting is OK and that the guide builds
ci: lint build

# Build the Docusaurus site
build:
ifeq ($(YARN),)
	$(error "yarn is not available, please install Yarn")
else
	$(YARN) run build
endif

# Deploy new version of the guide
deploy:
	sh ./scripts/publish_docusaurus.sh

# Install dependencies
deps:
ifeq ($(YARN),)
	$(error "yarn is not available, please install Yarn")
else
	$(YARN) install
endif

# Lint markdown files
lint:
ifeq ($(MARKDOWNLINT),)
	$(error "markdownlint is not installed, run 'make deps' to install it")
else
	@$(MARKDOWNLINT) . --ignore node_modules --ignore build && echo 'All good 👌'
endif

# Start a development server
serve:
ifeq ($(YARN),)
	$(error "yarn is not available, please install Yarn")
else
	@$(YARN) start || (echo "❌ Error: 'make serve' failed!" && echo "💡 Try running 'make deps' first to install dependencies" && exit 1)
endif

