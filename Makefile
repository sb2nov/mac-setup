.PHONY: ci deploy deps install lint serve

GITBOOK 	= $(shell command -v ./node_modules/.bin/gitbook 2> /dev/null)
MARKDOWNLINT	= $(shell command -v ./node_modules/.bin/markdownlint 2> /dev/null)
YARN		= $(shell command -v yarn 2> /dev/null)


# This is run on CI to verify linting is OK and that the guide builds
ci: lint
	$(GITBOOK) install && $(GITBOOK) build


# Deploy new version of the guide. Will update list of contributors
deploy:
	sh ./scripts/publish_gitbook.sh


# Install dependencies
deps:
ifeq ($(YARN),)
	$(error "yarn is not available, please install it")
else
	$(YARN)
endif

# Install dependencies and gitbook
install: deps
	$(GITBOOK) install


# Lint markdown files
lint:
ifeq ($(MARKDOWNLINT),)
	$(error "markdownlint is not installed, run 'make deps' to install it")
else
	@$(MARKDOWNLINT) . --ignore node_modules && echo 'All good 👌'
endif


# Start a server that serves the guide locally
serve:
ifeq ($(GITBOOK),)
	$(error "GitBook is not available, please run 'make install' first")
else
	$(GITBOOK) serve
endif
