echo Deploying website on $HOSTNAME ...

sudo docker compose up -d --build --force-recreate --remove-orphans
docker image prune -a -f

echo Deployment complete on $HOSTNAME !