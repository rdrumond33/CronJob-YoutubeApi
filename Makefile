ifneq ("$(wildcard .env)","")
        include  .env
        export
endif

run: setup
	yarn start

setup: .make.setup
.make.setup:
	yarn install
	@touch .make.setup
