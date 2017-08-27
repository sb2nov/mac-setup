.PHONY: deploy serve

deploy:
	sh ./scripts/publish_gitbook.sh

serve:
	./node_modules/.bin/gitbook serve
