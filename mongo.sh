#/bin/bash

mongod --dbpath ./data/ --port 27090 --smallfiles --oplogSize 128
