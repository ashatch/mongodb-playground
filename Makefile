.PHONY: clean
clean:
	rm -Rf data/*

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down
