.PHONY: deploy serve

deploy:
	sh ./scripts/publish_gitbook.sh

serve:
	gitbook serve
