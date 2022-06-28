#!/bin/bash
# make sure to have ssh setup
rsync -azP --exclude .git --exclude node_modules --exclude mongo $PWD root@164.92.212.85:/app
ssh root@164.92.212.85:/app /app/run.sh
