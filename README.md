# Docker -harjoitusprojekti
NodeJS,Express,Mongo pohjainen yksinkertainen viestipalvelu.

## Install
Install node dependencies
```bash
npm install
```

Build project to image from Dockerfile
```bash
 docker build -t my-app:1.0 .
 ```

Run images
```bash
docker-compose -f mongo.yaml down
 ```

!!!!IN mongo-express create database viestit and under it a collection viesti. 


## Docker basics
Build images from Dockerfile
```bash
 docker build -t my-app:1.0 .
 ```

Enter container names beatiful_wright into sh-shell
```bash
docker exec -it beautiful_wright /bin/sh

```

Näytä imaget
```bash
docker image list
```
Poista image
```bash
docker rmi imagen_referenssi
```
Poista kontti
```bash
docker rm kontin_referenssi
```

Hae imaget docker hubista
```bash
docker pull mongo:4.0.0
docker pull mongo-express
```

Listaa imaget
```bash
docker images
```

Viritä docker network
```bash
docker network ls
docker network create mongo-network
```

Aja kontteja suoraan komentoriviltä. Toinen tapa on docker-compose
```bash
docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    --name mongodb_esim \
    --net mongo-network \
    mongo:4.4.6
```
ja
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

