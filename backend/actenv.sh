#!/usr/bin/bash
if [ -f .env ]; then                                                                                                                                                                130 
	export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi
