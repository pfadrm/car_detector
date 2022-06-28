#!/usr/bin/zsh
compose="/app/docker-compose.yml"
docker-compose -f $compose  down
mkdir -p /app/build/static/uploads
npm run-script --prefix /app/frontend/cdfe build
/bin/cp -rf /app/frontend/cdfe/build/* /app/build
docker-compose -f $compose up --build -d
