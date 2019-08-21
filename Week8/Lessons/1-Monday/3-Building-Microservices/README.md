---
title: Building Microservices (Advanced)
type: lesson
duration: "1:00"
creator:
    name: Prateek Parekh
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Building Microservices (Advanced)

## Learning Objectives

*After this lesson, students will be able to:*

- Define domain-driven design.
- Describe a basic microservice architecture.
- Explain why timeouts, circuit breakers, and bulkhead patterns are important for microservice architecture.

## Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening      | Learning Objectives |
| 15 min | Introduction | Scoping Microservices |
| 15 min | Exercise     | Domain-Driven Design in Action |
| 15 min | Introduction | Avoiding Failure 101 |
| 5 min  | Conclusion   | Review/Recap |

## Overview (5 min)

We already learned *what* microservices are and how they can create better systems and architecture for us. But how do we go about actually building them?

In this lesson, we'll go into more detail about how to scope and build microservice applications.

---

## How to Scope Microservices (15 min)

> **Knowledge Check**: Who can provide a one-sentence definition of microservices?

**Microservices** are a collection of *loosely coupled* but *highly cohesive* small services. But that raises the question: How small is small? How do we identify how small these services need to be? 

One of the more popular techniques of determining the scope of services involves defining **bounded context**. This technique is borrowed from a software design methodology called **domain-driven design** (DDD) and aims to design software based on real-world domains. 

### Domain-Driven Design

In domain-driven design, your software consists of models that represent the real-world problems you are trying to solve. A few unique characteristics of DDD:
- You use a common domain language to describe these components and models instead of technical jargon.
- Domain experts and software experts work together and come up with a model for the software.
- All components work together to represent functionality and solve problems within a business domain.

Here's how it breaks down:

- A domain (which may have multiple subdomains) is represented by a bounded context that has an internal language describing all of its models and components.
- Each microservice represents a bounded context.
- Each microservice represents a business domain. 
- A microservices application consists of multiple services that represent multiple domains.

As a design technique for microservices, bounded context encourages microservice design principles. It forces you to think of services with definite boundaries (i.e., what's inside and outside of these services). As a result, you end up with services that are loosely coupled with services outside the boundary and highly cohesive, as they all perform a single role. Each microservice can be independently changed and rolled out. They still need to interact with each other, but changes to one service will not impact others. 

----

## Domain-Driven Design in Action (15 min)

Let's think through how you'd scope microservice architecture for an online retailer. With your group, sketch out what the different domains and services would look like (no coding necessary).

1. Think through the different **business domains** associated with an online store. Remember to avoid technical jargon!
1. Think through what **subdomains** would be contained in each domain.
1. Determine the **bounded context** by scoping the services and components for each domain.
1. **Bonus!** Create a visual that models how each service relates to each other.

----

## Avoiding Failure 101 (15 min)

Microservices architecture is a distributed architecture consisting of several moving parts. Therefore, we have to ensure that these services are resilient to failures, as a failure in one part of the system can bring down the entire system. This is also known as [**cascading failure**](https://medium.com/@adhorn/patterns-for-resilient-architecture-part-2-9b51a7e2f10f). 

Some of these well-known patterns and best practices can not only help us make our services resilient but also isolate failures from the rest of the system. 

### Timeout

**What Is It?**
- Primarily used when invoking an external service.
- Only wait for a response for a certain amount of time (always set defaults).
- Otherwise, throw a timeout exception.
- Timeout values can be specified as part of the application's configuration.
- May need some fine-tuning to ensure that a timeout is neither too short nor too long.

**Why Is It Helpful?**
- Provides greater control on how to handle failure (e.g., degrade functionality gracefully or use cache).
- Used with logging for root-cause analysis.
  
### Circuit Breaker

![](https://cdn-images-1.medium.com/max/1600/1*zh8ylqroQeR4IzPaJzLxyA.png)
*Patterns for Resilient Architecture [Circuit breaker with Timeout](https://medium.com/@adhorn/patterns-for-resilient-architecture-part-2-9b51a7e2f10f)*

**What Is It?**
- A timeout does not prevent our application from slowing down.
- With a circuit breaker, after a certain number of failed requests to the external service, the circuit is considered broken.
- After some time, a request is sent to an external service again; if successful, the circuit is reset.
- Care should be taken so that the circuit is not broken too readily nor takes an extended amount of time.

**Why Is It Helpful?**
- New requests fail fast, unlike timeouts (no requests are sent over the network).
- Requests can potentially be queued while the circuit is broken (especially for asynchronous operations).
  
### Bulkhead Pattern

**What Is It?**
- In shipping, "bulkhead" refers to the part of a ship that can be sealed off to protect the rest of the ship.
- Comes in various forms; for example, using different connection pools for each downstream connection.
- Netflix's Hystrix library provides support for implementing bulkheads along with circuit breakers.

**Why Is It Helpful?**
- Allows a microservices application to isolate itself from failure.
- If one connection pool is exhausted, other connections are not impacted.
  
Timeouts and circuit breakers help free up resources in a resource-constrained environment. However, bulkheads can ensure that these resources are not constrained in any way in the first place. 

---

## Conclusion (5 min)

Scoping microservices appropriately is certainly not a simple process and depends greatly on the specific needs of a given application. Using domain-driven design principles, timeouts, circuit breakers, and the bulkhead pattern, you can begin to see common patterns and norms for building your applications.
