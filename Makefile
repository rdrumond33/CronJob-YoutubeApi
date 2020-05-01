run: setup
	docker run -d -rm cron-youtube 

setup: .make.setup
.make.setup:
	sudo docker build -t cron-youtube .
	@touch .make.setup
