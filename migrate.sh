#!/bin/bash
# make sure to have ssh setup
rsync -nazP --exclude .git --exclude node_modules --exclude mongo --exclude uploads "$PWD" root@164.92.212.85:/app &&
