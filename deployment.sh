#!/bin/bash
echo "Hello $USER!"
echo "Today is $(date)"
echo "Current working directory : $(pwd)"
echo "Starting website deployment..."

# Add permissions for this folder
echo "Confirming permissions for this folder..."
sudo chmod -R 777 ./

# Run container deployments
echo "Running container deployments..."

# Run the docker-compose file
docker compose -f docker-compose.yml up -d --build

# Prune images
echo "Pruning images..."
docker image prune -f

echo "Website deployment complete!"
