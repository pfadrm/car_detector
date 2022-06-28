#!/usr/bin/zsh
compose="./docker-compose.yml"
docker-compose -f $compose  down
mkdir -p ./build/static/uploads
npm run-script --prefix ./frontend/cdfe build
/bin/cp -rf ./frontend/cdfe/build/* ./build
docker-compose -f $compose up --build -d
