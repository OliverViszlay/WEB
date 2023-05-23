#!/bin/bash

kubectl delete -f service.yaml

kubectl delete -f deployment.yaml

docker rmi -f oliversid/node-app