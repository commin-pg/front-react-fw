#!/bin/bash

DOCKER_APP_NAME=node-server

EXIST_BLUE=$(docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml ps | grep Up)

if [ -z "$EXIST_BLUE" ]; then
	echo "blue up"
	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d

	
    for i in 1 2 3 4 5 6 7 8 9 10
    do
        sleep 1
        echo "blue up ... $i"
    done

    echo "green down"
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml down
else
	echo "green up"
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d

    for i in 1 2 3 4 5 6 7 8 9 10
    do
        sleep 1
        echo "green up ... $i"
    done

    echo "blue down"

	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml down
fi