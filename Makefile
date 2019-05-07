.PHONY: ci deploy deps install lint serve

GITBOOK = $(shell command -v ./node_modules/.bin/gitbook 2> /dev/null)
LINTER  = $(shell command -v ./node_modules/.bin/markdownlint 2> /dev/null)

ci: lint
	$(GITBOOK) install && $(GITBOOK) build

deploy:
	sh ./scripts/publish_gitbook.sh

deps:
	yarn

install: deps
	$(GITBOOK) install

lint:
	$(LINTER) . --ignore node_modules

serve:
ifndef GITBOOK
	$(error "GitBook is not available, please run 'make install' first")
else
	$(GITBOOK) serve
endif
