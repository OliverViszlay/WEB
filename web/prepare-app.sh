#!/bin/bash
docker build -t oliversid/node-app:latest .


kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

