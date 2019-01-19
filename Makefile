.PHONY: deploy deps install serve

GITBOOK = $(shell command -v ./node_modules/.bin/gitbook 2> /dev/null)


deploy:
	sh ./scripts/publish_gitbook.sh

deps:
	yarn

install: deps
	$(GITBOOK) install

serve:
ifndef GITBOOK
	$(error "Gitbook is not available, please run 'make install' first")
else
	$(GITBOOK) serve
endif
