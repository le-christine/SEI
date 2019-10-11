| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Microservices: Creating a Spotify Clone | Lab | 3:00 | Prateek Parekh |  

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Create Spotify Microservices Lab

## Overview

You have already created the service registry, API gateway and a users microservice. Now let's create functionality for a separate `Song` microservice.

-----

## Requirements

Use the `starter-code` directory to grab the starter code for the lab.

Set up a basic service that returns some songs at [localhost:8080/songs](http://localhost:8080/songs).

Remember:

- The microservice will be a basic Spring Boot REST application, with some extra dependencies and annotations that tell it to register with our service registry (Eureka).
- You'll need to allocate a new port for each service to run on. The API gateway is already set to run on `8080`.
- We'll want the app to register at the `/songs` URL through the Zuul API gateway.

### Adding `Song` Functionality

Once the service is wired up to our API gateway and service registry, we'll want to add some functionality to each. Both the `User` and `Song` microservices will share the same database.
 
2. Song service should have Flyway migrations that add `SONGS` table to the database. 
	- The `SONGS` table should have at least `title` and `length` (in milliseconds) columns.
3. Song service should be able to perform CRUD (create, read, update, and delete data).

> The only catch to adding Flyway migration file is, as you know all the services by docker are run parallely so there is no way for Flyway to know which migration file to run first. That can really mess up it's head. There is no elegant way to combat this issue. So what you can do is put all migration files in any one service starting with different versions.

### Bonus Ideas

1. Create `afterMigrate` callbacks to the `User` and `Song` services to seed some data. (Remember that, with hot reloading, this seed data will add on top of itself until you call `docker-compose down`.)
2. Create a `/search` endpoint to find songs by title. (A great way to do this is hiding in [this Stack Overflow post](https://stackoverflow.com/questions/21456494/spring-jpa-query-with-like)).
