#!/usr/bin/zsh
docker-compose down
mkdir -p build/static/uploads
npm run-script --prefix ./frontend/cdfe build
/bin/cp -rf ./frontend/cdfe/build/* ./build
docker-compose up --build
