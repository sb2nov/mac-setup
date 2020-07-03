# Docker Tips and Tricks

A collection of useful tips and tricks for Docker.

## Delete all containers

**NOTE:** This will remove ALL your containers.

```sh
docker container prune
```

OR, if you're using an older docker client:

```sh
docker rm $(docker ps -a -q)
```

## Delete all untagged containers

```sh
docker image prune
```

OR, if you're using an older docker client:

```sh
docker rmi $(docker images | grep '^<none>' | awk '{print $3}')
```

## See all space Docker take up

```sh
docker system df
```

## Get IP address of running container

```sh
docker inspect [CONTAINER ID] | grep -wm1 IPAddress | cut -d '"' -f 4
```

## Kill all running containers

```sh
docker kill $(docker ps -q)
```
