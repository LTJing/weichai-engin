#!/bin/bash

set -x

image=weichai_engine
tag=0.0.3
registry=registry.xuelangyun.com/shuzhi-amd64
repo=${registry}/${image}:${tag}

docker build -t ${repo} .
docker push ${repo}
