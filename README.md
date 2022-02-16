### Docker basics

IN mongo-express create database viestit and under it a collection viesti.


Build images from Dockerfile
```bash
 docker build -t my-app:1.0 .
 ```


Enter container names beatiful_wright into sh-shell
```bash
docker exec -it beautiful_wright /bin/sh

```

```bash
perunakellari@perunakellari-HP-Pavilion-dv6-Notebook-PC:~/kontti_kurssi$ docker image list
REPOSITORY                     TAG                   IMAGE ID       CREATED         SIZE
mongo                          latest                5285cb69ea55   13 days ago     698MB
harttu/unbuntu-nodejs          latest                484698dab6fe   3 weeks ago     173MB
repository/new_image_name      latest                96b76154b7db   3 weeks ago     173MB
ubuntu                         latest                d13c942271d6   5 weeks ago     72.8MB
mongo-express                  latest                2d2fb2cabc8f   3 months ago    136MB
hello-world                    latest                feb5d9fea6a5   4 months ago    13.3kB
harttu/node-web-app            latest                ec88624258a9   14 months ago   920MB
node                           12                    82c222f66a6c   15 months ago   918MB
turkunlp/turku-neural-parser   latest-fi-en-sv-cpu   a0c4297c8d04   2 years ago     4.84GB
perunakellari@perunakellari-HP-Pavilion-dv6-Notebook-PC:~/kontti_kurssi$ docker run ec88624258a9
```


### Docker example

Pull relevant images
```bash
docker pull mongo
docker pull mongo-express
```

Check that images are ok
```bash
docker images
```

Aet tup docker network
```bash
docker netwrok ls
docker network create mongo-network
```

```bash
docker network create mongo-network
```

MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD

```bash
docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    --name mongodb_esim \
    --net mongo-network \
    mongo:4.4.6
```

ME_CONFIG_MONGODB_ADMINUSERNAME | ''              | MongoDB admin username
ME_CONFIG_MONGODB_ADMINPASSWORD | ''              | MongoDB admin password
```bash
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
--net mongo-network \
--name mongo-express_esim \
-e ME_CONFIG_MONGODB_SERVER=mongodb_esim \
mongo-express
```

