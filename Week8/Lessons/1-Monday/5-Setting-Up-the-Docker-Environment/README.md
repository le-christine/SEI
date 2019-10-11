| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Setting Up the Docker Environment | Lesson | 2:25 | Prateek Parekh |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Setting Up the Docker Environment

### Learning Objectives

*By the end of this lesson, students will be able to:*
- Pull an image from Docker Hub and run a container on your machine.
- Use common Docker CLI commands.
- Run source code as a container volume.
- Push a Docker image to production in Heroku.

### Lesson Overview

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening  | Lesson Objectives |
| 10 min | Guided Practice | Docker Installation |
| 15 min | Guided Practice | Docker Tools |
| 15 min | Guided Practice | Docker Hello World Image |
| 15 min | Guided Practice | Run a Docker container and open a port |
| 30 min | Guided Practice | Dockerizing a Spring Boot Applicaiton |
| 30 min | Guided Practice | Running Containers on Heroku |
| 20 min | Guided Practice | Docker Compose |
| 5 min  | Conclusion | Brief Debrief |

## Overview (5 min)

In a previous lesson, we learned the basics of what Docker is and the problems it solves. To kick your Docker skills up a notch, we'll actually pull, run, and push images in Docker.

-----

## Docker Installation (10 min)

We will use homebrew to install Docker as follows.

Docker is a system-level package and you **cannot** install it using `brew install`, and must use the `cask` instead.

`brew cask install docker`

Then launch the Docker app. Click next. 

It will ask for privileged access. Confirm. 

A whale icon should appear in the top bar.  Click it and wait for "Docker is running" to appear.

You should be able to run the docker commands below:    
- `docker ps` - lists the containers   
- `docker images` - lists the local images  

Alternatively, you can also install Docker directly from the Docker website.:
- [Download Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- [Orientation and setup](https://docs.docker.com/get-started/)

------

## Docker Tools (15 min)

Docker works with several other tools to create and manage containers. Following are the ones we will review in this lesson.    
- **Docker Client** - push/pull images
- **Docker Compose** - orchestrate multiple containers
- **Docker Kitematic** - GUI to run containers

### Docker Client

The command line interacts with Docker daemon - the engine that runs containers.

![](https://i.imgur.com/aZuu2mc.png)

![](https://i.imgur.com/9OQUMov.png)

The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.

Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.

### Docker Compose

Docker Compose allows you to orchestrate and manage multiple containers.

### Docker Kitematic

A quick and easy GUI interface to search for images and run containers.

![](https://i.imgur.com/fWHGzWi.png)

----

## Docker Hello World Image (15 min)

Now that we have Docker up and running, let's test that our machine is working properly by pulling and running a hello world image locally in a container.

We will get familiar and run some of the basic Docker commands and work with the sample [Hello World Image](https://hub.docker.com/_/hello-world) on [Docker Hub](https://hub.docker.com/).

Let's follow these steps.

#### Pull down the layered file system

```
docker pull hello-world

Using default tag: latest
latest: Pulling from library/hello-world
1b930d010525: Pull complete 
Digest: sha256:65xx0fc08ee6e608ee8dc3317e08eee178cb808ee231803xxxxxd20f
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

#### Confirm that the image was downloaded

```
docker images

REPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE
hello-world                             latest              fce289e99eb9        7 months ago        1.84kB
```

#### Create and run a container from hello-world

```
docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
  docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

#### List all containers that are running and not running

```
docker ps -a

CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                      PORTS               NAMES
02dc34aaae00        hello-world                       "/hello"                 44 seconds ago      Exited (0) 43 seconds ago                       gracious_lehmann
```

#### Stop a running container

You only need to specify the first few characters of the container ID.

```
docker stop 02dc
02dc
```

#### Remove a stopped container

```
docker rm 02dc
02dc
```

#### Remove the layered file system

```
docker rmi hello-world
Untagged: hello-world:latest
Untagged: hello-world@sha256:65xx0fc08ee6e608ee8dc3317e08eee178cb808ee231803xxxxxd20f
Deleted: sha256:65xx0fc08ee6e608ee8dc3317e08eee178cb808ee231803xxxxxd20f
Deleted: sha256:65xx0fc08ee6e608ee8dc3317e08eee178cb808ee231803xxxxxd20f
```

------

## Run a Docker Container and Open a Port (15 min)

For this example we'll pull and run a Hello World ngnix image.[ngnix](https://www.nginx.com/) can be used as a load balancer, microservices manager, caching server, or API gateway.

Here's the [Docker Hub nginx Image](https://hub.docker.com/r/kitematic/hello-world-nginx).

1. `docker pull kitematic/hello-world-nginx`
1. `docker images` - Confirm that the image was downloaded
1. Let's run the image in a container, but this time we'll assign a port from our local machine to the running container.
	- This is the format of the command: `docker run -p LOCALPORT:DOCKERPORT IMAGEID`
	- Example: `docker run -p 80:80 03b4557`
1. Navigate to `localhost:80` in your browser to view the running container.
1. `docker ps -a` - lists all containers running and not running
1. `docker stop xxx` - The first few characters will stop a ruinning container (Hello World auto exits)
1. `docker rm xxx` - first few characters of container will remove it
1. `docker rmi xxx` - first few characters of image will remove layered file system

----

## Dockerizing a Spring Boot Application (30 min)

We'll go through all the steps needed to Dockerize a Spring Boot application.

### Clone the application to Dockerize

`https://github.com/prparekh/spring-boot-websocket-chat-demo.git`

Next, we will create a Docker image of this Spring Boot application.

Go to the application’s root directory and create a new file named `Dockerfile`.

```
cd spring-boot-websocket-chat-demo
touch Dockerfile
```

We define the Docker image and specify all the configurations required to run the app in the Dockerfile. 

Following is the Dockerfile for our spring boot application:

```
# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
MAINTAINER GA <admin@xyz.com>

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# The application's jar file
ARG JAR_FILE=target/websocket-demo-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} websocket-demo.jar

# Run the jar file
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/websocket-demo.jar"]
```

### What's going on here?

**FROM:** A Docker image can use another image available in the Docker registry as its base or parent image. In the above example, we use the openjdk:8-jdk-alpine image as our base image. It is a very lightweight OpenJDK 8 runtime image that uses Alpine Linux (ideal for small Java microservices).

**LABEL:** The LABEL instruction is used to add metadata to the image. In the above Dockerfile, we have added some info about the maintainer of the image through LABEL instruction.

**VOLUME:** [Volumes](https://docs.docker.com/storage/volumes/) are a mechanism to persist data generated by the container on the Host OS, and share directories from the Host OS with the container.

In the above Dockerfile, we created a mount point with path `/tmp` because this is where the Spring Boot application creates working directories for Tomcat by default (although it’s not required for this Spring Boot application because who cares about Tomcat directories?!). But if you want to store stuff like Tomcat access logs, then VOLUMES are very useful.

**EXPOSE:** As the name suggests, this instruction allows you to expose a certain port to the outside world.

**ARG:** The ARG instruction defines a variable with a default value. You can override the default value of the variable by passing it at build time.

**ADD:** The ADD instruction is used to copy new files and directories to the docker image.

**ENTRYPOINT:** This is where you configure how the application is executed inside the container.

### Building the Docker image   

First, package the application in the form of a jar file using Maven:

`./mvnw clean package`

The above command should create the `websocket-demo-0.0.1-SNAPSHOT.jar` file in the target directory of the project.

Build the image:

`docker build -t spring-boot-websocket-chat-demo .`

List the newly created Docker images:

```
docker image ls

REPOSITORY                        TAG                 IMAGE ID            CREATED             SIZE
spring-boot-websocket-chat-demo   latest              bdbafa81b01c        2 hours ago         129MB
openjdk                           8-jdk-alpine        a3562aa0b991        2 months ago        105MB
```

### Running the Docker image

Run the docker image using the `docker run` command:

`docker run -p 5000:8080 spring-boot-websocket-chat-demo`

Port 8080 on the container should be mapped to the port 5000 on the Host OS.

After application has been started, it can be accessed at `http://localhost:5000`.

The above application is running in the foreground and can be stopped with `CTRL + C`.

Use the `-d` option to run the application in the background:

`docker run -d -p 5000:8080 spring-boot-websocket-chat-demo`

`2995c5bc81c0593faa2702e1cab11a3ff76d4ebf6cb27e1b43c3e6b6b4defb81`

The above is the container ID returned. 

If you list the containers, it should match with the container that you just started.

```
docker container ls

CONTAINER ID        IMAGE                             COMMAND                  CREATED              STATUS              PORTS                    NAMES
2995c5bc81c0        spring-boot-websocket-chat-demo   "java -Djava.securit…"   About a minute ago   Up About a minute   0.0.0.0:5000->8080/tcp   nervous_fermat
```

### Publish to Docker Hub

If we want our Docker image to be available for others to download and consume, we need to push it to the Docker Hub. 

However, before you can push anything to Docker Hub, you need an account. If you don't have a Docker ID, head over to https://hub.docker.com to create one.

#### Login with your Docker ID

```
docker login
Login with your Docker ID to push and pull images from Docker Hub. 
Username: gahub
Password: 
Login Succeeded
```

#### Tag your image

To push a local image to Docker registry, you need to associate the local image with a repository on the docker registry. The notation for the repository on docker registry is `username/repository:tag`.

Note: Replace gahub with your own tag below:

`docker tag spring-boot-websocket-chat-demo gahub/spring-boot-websocket-chat-demo:0.0.1-SNAPSHOT`

Verify that the tagged image shows up with the following command: 

```
docker image ls
REPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE
spring-boot-websocket-chat-demo         latest              bdbafa81b01c        2 days ago          129MB
gahub/spring-boot-websocket-chat-demo   0.0.1-SNAPSHOT      bdbafa81b01c        2 days ago          129MB
openjdk                                 8-jdk-alpine        a3562aa0b991        2 months ago        105MB
```

#### Push your image to Docker Hub

Finally, we push the image to the Docker Hub with the `docker push` command:

```
docker push gahub/spring-boot-websocket-chat-demo:0.0.1-SNAPSHOT
The push refers to repository [docker.io/gahub/spring-boot-websocket-chat-demo]
965bbdb13844: Pushed 
ceaf9e1xxxx5: Mounted from library/openjdk 
9b9b7f3xxxx0: Mounted from library/openjdk 
f5933xxxx4b5: Mounted from library/openjdk 
0.0.1-SNAPSHOT: digest: sha256:704xxxx5943d4cxxxxe89a4b69bfxxxx5ca0d35e4xxxx7e677xxxx size: 1159
```

----

## Running Containers on Heroku (30 min)

Heroku is a platform as a service based on a managed container system with integrated data services and a powerful ecosystem for deploying and running modern apps. 

Sign up for an account with Heroku: https://www.heroku.com/.

Install the Heroku toolbelt\:

**OSX users:**

<a href="https://cli-assets.heroku.com/branches/stable/heroku-osx.pkg">Click this link to download the ToolBelt for OSX</a>. Run the file and follow the prompts to install.

**Ubuntu users:** Run this command from your terminal:

```bash
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

Once installed, you can use the Heroku command from your command shell. Log in using the email address and password you used when creating your Heroku account.

```bash
heroku login
# Enter your Heroku credentials.
# Email: zeke@example.com
# Password:
# ...
```

Authenticating is required to allow both the Heroku and Git commands to operate.

#### Preparing for Heroku Deploy

1. Log in to Container Registry:

```
heroku container:login
```

1. Navigate to the app’s directory and create a Heroku app:

```
heroku create
```

1. Build the image and push to Container Registry:

```
heroku container:push web
```

1. Then release the image to your app:

```
heroku container:release web
```

1. Now open the app in your browser:

```
heroku open
```

-----

## Manage Containers with Docker Compose (20 min)

Docker Compose is a great way to automatically manage the lifecycle of your application and to manage multiple containers.

It allows you to...

- Start, stop, and rebuild services
- View status of running services
- Stream logs
- Run a one-off command on a service

#### Docker Compose Workflow

- Build services
- Startup services
- Rear down services

### `docker-compose.yml`

- Service configuration
- Docker Compose build -> creates images (services) to create containers

```
version: '2'
services:
	web:
		build:
			context: .
			dockerfile: Dockerfile
		networks:
	//define what we want to be running
	// Tomcat, DBs, caching
	build: context
	environment:
	image:
	networks:
	ports:
	volumes:
```

### Compose Commands

- `docker-compose build`
	- Build or rebuild services defined in .yml file
- `docker-compose build mongo`
	- One-off rebuild
- `docker-compose up`
	- Create and start the containers
- `docker-compose down`
	- Stop and remove
	- `--rmi all --volumes` delete images and volumes
- `docker-compose down`

-----

<details>
<summary>Bonus: Circle CI</summary>

## Circle CI

[Using Custom-Built Docker Images on Circle CI](https://circleci.com/docs/2.0/custom-images/)

</details>

<details>
<summary>Bonus: Communicating Between Containers</summary>

## Communicating Between Containers

### Container linking (legacy)

- Run a container with a name `--name`
	- `docker run -d --name my-postgres postgres`
- Link to running container `--link`
	- `docker run -d -p 5000:8080 --link my-postgres:postgres gahub/spring-boot-websocket-chat-demo:0.0.1-SNAPSHOT`
	- name of container - my-postgres, aliais inside other container is postgres

- `docker exec` run a command in a running container
	- to seed for example - `docker exec CONTAINERID touch /tmp/execWorks`

- To link to database, in config file, the `host` is the name of the db container

### Add Containers to a bridge network (newer)

- Create custom bridge network
	- `docker network create --driver bridge isolated_network`
- Run Containers in the network
	- `docker run -d --net=isolated_network --name CONTAINERID`

- `docker network inspect isolated_network` - note that there are no containers communicating with it
- `docker run -d --net=isolated_network --name schmitty -p 5000:8080 -v$(pwd):/var/www -w "/var/www" gahub/spring-boot-websocket-chat-demo:0.0.1-SNAPSHOT`

</details>

----

## Conclusion (5 min)

That's all for now! If that seems straightforward enough, running an application with many more containers and dependencies is where it can get tricky.

#### Resources

- [Docker API Docs](https://docs.docker.com/engine/api/v1.30/#)
- [Docker services](https://docs.docker.com/get-started/part3/)
- [Kitematic User Guide](https://docs.docker.com/kitematic/userguide/)
- [Intro to Docker (16mins)](
https://acloud.guru/course/docker-fundamentals/learn/1e1626a5-01b2-c3ff-6abb-d92dd6b5e280/1aa93e70-a8e6-ccef-eb97-41b3e03bccaa/watch)
- [A Cloud Guru](https://acloud.guru/course/docker-fundamentals/dashboard)
- [Cloud Academy](https://cloudacademy.com/amazon-web-services/labs/start-with-docker-linux-aws-109/)
- [Dockerizing a Spring boot app](https://www.callicoder.com/spring-boot-docker-example/)
- [Sharing Volume](https://github.com/rocker-org/rocker/wiki/Sharing-files-with-host-machine)
- [Env Variables Docker](https://stackoverflow.com/questions/30494050/how-do-i-pass-environment-variables-to-docker-containers)
- [Postgres](https://www.godaddy.com/garage/how-to-install-postgresql-on-ubuntu-14-04/)
- [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)
- [Docker on Ubuntu](https://askubuntu.com/questions/909691/how-to-install-docker-on-ubuntu-17-04)
- [Creating a stack](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-cli-creating-stack.html)
- [Getting Started](https://docs.docker.com/get-started/#setup)
- [Debugging Docker](https://medium.com/@betz.mark/ten-tips-for-debugging-docker-containers-cde4da841a1d)
- [Heroku Buildpack](https://devcenter.heroku.com/articles/buildpack-builds-heroku-yml)
- [Heroku Heroku.yml](https://blog.heroku.com/build-docker-images-heroku-yml)
- [Heroku Container Regristry](https://github.com/heroku/heroku-container-registry)
- [Heroku Container Regristry and Runtime](https://devcenter.heroku.com/articles/container-registry-and-runtime)

