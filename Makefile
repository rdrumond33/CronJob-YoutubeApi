run: setup
	sudo docker run -d --rm --name youtube cron-youtube

setup: .make.setup
.make.setup:
	sudo docker build -t cron-youtube .
	@touch .make.setup
logs:
	sudo docker logs -f youtube
reset:
	sudo docker rm -f youtube
	sudo docker image rm -f cron-youtube
	rm -rf .make.setup
	make run

