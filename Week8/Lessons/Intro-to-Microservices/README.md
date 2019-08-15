| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Microservices Environment Overview | Lesson | 2:50 | Prateek Parekh |  

## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Microservice Environment Overview

### Learning Objectives

*After this lesson, students will:*
- Implement a API gateway and service registry using Eureka and Zuul.
- Explain how the API gateway, service registry, and services operate together in a microservice application.
- Use Docker to start up our services.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 10 min  | Opening | Introduction  |
| 15 min | Guided Practice | Getting Started |
| 30 min | Guided Practice | Creating the Service Registry |
| 30 min | Guided Practice | Creating the API Gateway |
| 30 min | Guided Practice | Setting up `docker-compose` | 
| 15 min | Lecture | Naming Services with the API Gateway |
| 30 min | Guided Practice | Creating the Users Service |
| 10 min | Closing | Summary |

## Opening (10 min)

Today, we are going to build out a basic microservice environment. 

**Quick refresher:** With a partner, discuss the following related to what we've learned about micrservices already:
- What are some of the benefits of building microservices?
- What challenges do they bring?
- How do bounded contexts and domains help us build microservices?

-----

## Getting Started (15 min)

There are three basic components we will need for our microservice environment:

![server-side microservices diagram](https://cdn.auth0.com/blog/microservices/server-side-discovery-diagram.png)

> Diagram borrowed from this [excellent Auth0 blog series on Microservices](https://auth0.com/blog/an-introduction-to-microservices-part-1/).

- **The API Gateway** - Each of our services will have its own URL. A client may require data from each of those, and managing several URLs can be extremely cumbersome. An API gateway will allow us to create a single entry-point for any client to consume.
- **The Service Registry** - Our API gateway needs to know where our services live so that it can shuttle data back and forth. The Service Registry will keep a live "database" of each of our services, along with its address. As new services spin up, they will automatically register themselves in this database, and therefore automatically expose themselves through our central API Gateway URL.
- **Services** - Each of our services will be its own, fully-functioning application. They will look like mini versions of a monolithic app. The only thing we will need to add to our little MVC services is the ability to register with the Service Registry on startup.

Let's start by creating a new wrapper directory for all of our microservices:

```bash
$ mkdir spring-boot-microservices
```

```bash
$ cd spring-boot-microservices
```

----

## Creating the Service Registry (30 min)

We'll create our Service Registry first. The API gateway will need this to tell us where our services live, and our services will need it running so that they can register. 

To keep things simple, we're going to use a pre-packaged Service Registry implementation built by Netflix. [Netflix Eureka](https://github.com/Netflix/eureka) is a fully-featured service registry library that the company uses in production with fantastic results. Fortunately for us, they have open-sourced it. Let's see what it looks like.

First, we'll create a fresh Spring Boot application in a new `eureka-server` folder:

```bash
$ spring init eureka-server
```

Now let's move into our new server directory and open the project in IntelliJ IDEA:

```bash
$ cd eureka-server
```

```bash
$ idea pom.xml
```

> Be sure that `auto-import` is checked when IDEA opens the project.

### Setting up Dependencies

The Spring ecosystem includes several Spring Cloud dependencies that are very easy to set up. One of these is a simple wrapper that turns any Spring Boot app into a Eureka server. Let's include this dependency in our `pom.xml`:

```
<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
	<version>2.1.2.RELEASE</version>
</dependency>
```

You can get the latest version from [here](https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-eureka-server). Your complete `pom.xml` will look like this,

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.6.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>eureka-server</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
			<version>2.1.2.RELEASE</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```

### Setting up Eureka

Now that we've added our Spring Cloud Eureka JAR, we'll need to add an annotation to our `DemoApplication` main class which is under `src/main/java/com/example/eurekaserver` folder. 

Let's rename the main class to `EurekaServerApplication`, by right-clicking on th class. Replace its contents with this:

```java
package com.example.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}
}
```

There is nothing special going on in this code. As a matter of fact, the contents of our class are just the default Spring-generated code. All we've added to the standard Spring boilerplate is a small annotation at the top of the class: `@EnableEurekaServer`.

This is all we need to do! The Spring Cloud Eureka JAR that we've included will take care of the rest. All we had to do was drop it in and add a single annotation.

### Configuration

We'll need to set up a few bits of configuration in our `application-dev.properties` before we get started. Let's create the file in our `resources` package and add a few lines:

```ruby
server.port=8761

eureka.client.registerWithEureka=false
eureka.client.fetchRegistry=false
eureka.server.waitTimeInMsWhenSyncEmpty=0
```

This configuration tells our Eureka server to run on the standard Eureka port, `8761`. It also tells Eureka not to try to register with any other service registries when it starts up.

Now you can create an executable JAR file, and run the Spring Boot application by running the below command from the same directory as our project pom.xml file:

`mvn clean install`

### Start it up!

Let's start the app in the `dev` profile. 

Use the name of the jar file created in the previous step. You can find the name either under `/target` folder or towards the end in the logs. If you have followed the steps to the T so far the name of your jar file should be `eureka-server-0.0.1-SNAPSHOT.jar`

```bash
$ java -jar -Dspring.profiles.active=dev target/eureka-server-0.0.1-SNAPSHOT.jar
```

We can visit [localhost:8761](http://localhost:8761) in the browser to see our Eureka dashboard!

-----

## Creating the API Gateway (30 min)

Now that we have a service registry running, we can create our API Gateway. Netflix has a tool for this as well! 

Let's set up a second Spring Boot app inside of our wrapper directory that will function as an API gateway using [Netflix Zuul](https://github.com/Netflix/zuul).

From our top-level directory `spring-boot-microservices`, let's generate another fresh Spring Boot app and open it in IDEA:

```bash
$ spring init api-gateway
```

```bash
$ cd api-gateway
```

```bash
$ idea pom.xml
```

### Adding Dependencies

Spring Boot has a wrapper for Zuul as well! Let's drop it in in `pom.xml`.

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
    <version>2.1.2.RELEASE</version>
</dependency>

<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
	<version>2.1.2.RELEASE</version>
</dependency>
```

You can check the latest version from [here](https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-zuul).

### Setting up the Server

Just like our Eureka server, the Zuul gateway will be a standard Spring Boot app with a single annotation on the `DemoApplication` main class. 

Let's rename our main class to `ZuulGatewayApplication` and fill it in:

```java
package com.example.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
@EnableEurekaClient
public class ZuulGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZuulGatewayApplication.class, args);
	}
}
```

### Configuration

Just like earlier, let's set up our dev server configuration in `application-dev.properties` before we start it up:

```
spring.application.name=api-gateway

management.security.enabled=false

eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

# Add color to log output
spring.output.ansi.enabled=ALWAYS
```

This config gives the application a name, which will be passed to Eureka.

It also tells Spring to turn off security in our `dev` profile. We'll need this when we check our routes later on.

Finally, it tells our app where the Eureka server lives. The Eureka URL here assumes the Eureka server lives on a host named `eureka` instead of `localhost`, because we are now going to use `docker-compose` to start everything up.

Before that, let's quickly build our app by running `mvn clean install` to make sure everything is working smoothly.

-----

## Setting Up `docker-compose` (30 min)

We can continue starting each of these services individually, but as we continue to add services we'll have to manage more and more start-up commands as well. We'll need to pull in `docker-compose` to solve this problem for us.

`docker-compose` is a perfect tool for a microservice development environment. It will allow us to run start and stop commands for all of our services with a single `docker-compose up` or `down` command. 

Let's drop a new `docker-compose.yml` file into our wrapper directory `spring-boot-microservices` and configure it to start our Eureka (Service Registry) and Zuul (Api-Gateway) servers:

```yaml
version: '3'

services:
  eureka:
    image: maven:3.6.1-jdk-8
    ports:
      - '8761:8761'
    working_dir: /app
    volumes:
      - ./eureka-server:/app
    command: 'mvn spring-boot:run'
    environment:
      - SPRING_PROFILES_ACTIVE=dev
  api-gateway:
    image: maven:3.6.1-jdk-8
    ports:
      - '8080:8080'
    working_dir: /app
    volumes:
      - ./api-gateway:/app
    depends_on:
      - eureka
    command: 'mvn spring-boot:run'
    environment:
      - SPRING_PROFILES_ACTIVE=dev
```

Now, when we run `docker-compose up` from our top-level directory, each service will start up in the `dev` profile on their assigned ports. Make sure you already have Docker installed and running before running this command.

Remember that Maven will download and cache its dependencies the first time this happens so it will take a little while.

> Note: If you want to start just one service, you can run `docker-compose up <app-name>` (e.g. `docker-compose up api-gateway`.)

Let's move into our top-level directory and try it out!

```bash
docker-compose up
```

Everything starts up! It takes a little longer because we are running inside of the Docker environment, but remember that `docker-compose` lets us hot-reload our code. Once everything is started up, we won't have to restart too often.

-----

## Naming Services with the API Gateway (15 min)

By default, the application name that we set in our `application.properties` will become the route that Zuul uses. In a moment, we'll add a `Users` API that will automatically register itself with Zuul as `/users`.

This is a very convenient feature, but we may not always want to expose every server route through our gateway. Anything that we expose to the gateway is exposed to our end-users. Therefore, we will leave this feature on for today, but in the future you may want to configure exactly which routes are available using Spring's [Zuul Configuration](https://cloud.spring.io/spring-cloud-netflix/multi/multi__router_and_filter_zuul.html) properties.

These properties also provide nice features such as:
- Renaming routes
- Prefixing routes, e.g. `/api/users` instead of `/users`
- Controlling which headers users are allowed to send in their request

This tool provides a lot of fantastic security and routing options. Be sure to keep the documentation handy!

------

## Creating the Users Service (30 min)

Now it's time to create our `Users` API. This API will be a standard Spring Boot MVC app, connected to a Postgres database. The only thing we'll need to add to set this apart from a vanilla Spring Boot service is the ability to register with our service registry on start-up.

Let's start by creating the basic Spring Boot skeleton:

```bash
$ spring init users-api
```

```bash
$ cd users-api
```

```bash
$ idea pom.xml
```

### Add Dependencies

We will need to mark our service as a Eureka client, so we'll pull in the Spring Cloud Eureka dependencies in our `pom.xml`. 

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
	<version>2.1.2.RELEASE</version>
</dependency>

```

Notice that we will still need the standard Spring Boot Web starter for this service to create REST APIs.

### Set up Server

Let's rename our main class to `UsersApiApplication` and drop in some starter code:

```java
package com.example.usersapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class UsersApiApplication {

	@RequestMapping("/")
	public String home() {
		return "some users";
	}

	public static void main(String[] args) {
		SpringApplication.run(UsersApiApplication.class, args);
	}
}
```

This is a basic Spring Boot main class with a single `/` route that returns some generic data.

The `@SpringBootApplication` and `@RestController` annotations are standard Spring Boot annotations that enable the Spring app context and allow us to register the `/` route within this file.

The only thing that sets this file apart from a generic Spring app is the one new annotation: `@EnableEurekaClient`. This annotation tells our app to look for a Eureka server on startup and register itself. Once the application has started and registered, Zuul will pick it up from the service registry and expose all of its URLs automatically!

### Configuration

We'll need to add some configuration to make this happen. Let's drop this into a new `application-dev.properties` file:

```
server.port=8081

spring.application.name=users

eureka.client.serviceUrl.defaultZone=http://eureka:8761/eureka/

# Add color to log output
spring.output.ansi.enabled=ALWAYS
```

This app will need to run on port `8081`, because our API gateway has taken over port `8080`.

This configuration will give our app a name, which will translate to its base URL in Zuul. We'll call our app `users` so that any requests to `/users` will end up here.

We also need to tell our app where Eureka lives so it can register on start-up.

### Dockerize It

Let's tell our `docker-compose.yml` file where this app lives and how to start it up:

```yaml
version: '3'

services:
  eureka:
    image: maven:3.6.1-jdk-8
    ports:
      - '8761:8761'
    working_dir: /app
    volumes:
      - ./eureka-server:/app
    command: 'mvn spring-boot:run'
    environment:
      - SPRING_PROFILES_ACTIVE=dev
  api-gateway:
    image: maven:3.6.1-jdk-8
    ports:
      - '8080:8080'
    working_dir: /app
    volumes:
      - ./api-gateway:/app
    depends_on:
      - eureka
    command: 'mvn spring-boot:run'
    environment:
      - SPRING_PROFILES_ACTIVE=dev
  users-api:
    image: maven:3.6.1-jdk-8
    ports:
      - '8081:8081'
    working_dir: /app
    volumes:
      - ./users-api:/app
    depends_on:
      - eureka
    command: 'mvn spring-boot:run'
    environment:
      - SPRING_PROFILES_ACTIVE=dev
```

### Start it up!

Let's run `docker-compose up` and see our whole environment come to life!

Once everything has started, you should be able to see both api-gateway and user service registered on Eureka:

![](https://git.generalassemb.ly/GA-Cognizant/building-for-cloud/blob/master/microservices-intro-lesson/images/eureka_dashboard.png)

We should check on a few URLs,

- [localhost:8761](http://localhost:8761) should have our `API-GATEWAY` and `USERS` apps registered
- [localhost:8080/routes](http://localhost:8080/routes) should show our `/users` route
- [localhost:8080/users](http://localhost:8080/users) should return "some users"
- [localhost:8081](http://localhost:8081) should also return "some users"

----

## Conclusion (5 min)




