| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Logging and Monitoring | Lesson | 2:50 | Prateek Parekh |  

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Logging and Monitoring

### Learning Objectives

- Explain the importance of logging and monitoring.
- Identify the best metrics against which to monitor your apps.
- Choose the best logging tools for a given situation.
- Implement logging and monitoring systems for your applications.

### Lesson Overview

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening  | Discuss lesson objectives |
| 10 min | Introduction | Overview of logging and monitoring |
| 20 min | Introduction | Key Monitoring Metrics |
| 30 min | Introduction | Key Tools |
| 5 min  | Conclusion  | Review / Recap |

## Opening (5 min)

You're dropping a hot new line of clothing on your site at 12pm. At 12:02, a bunch of customers report that they're seeing error statuses as the page loads, but you're still seeing some customers access the site with no problem. What's gives?! 

If you have a microservices application that runs hundreds of instances and containers, it can be nearly impossible to track down the instance that's having the problem and what caused it.

Breaking up a monolithic system into smaller fine-grained services brings a number of benefits, but it also adds complexity to our system. The single point of failure nature of Monolith systems can make monitoring and investigating issues a lot simpler compared to the distributed nature of a microservices application, where there are multiple servers to monitor, multiple logs to sift through, and many sources of network latency. 

----

## Introducing Logging and Monitoring (10 min)

Before we go much further, let's define the key terms of this lesson.

- **Logging** generates a detailed set of events about what's going on in your application. When an event happens, a set of data is automatically generated about what happened.
- **Monitoring** tells you if your application is working or not. It's less about specific events and more about what's happening over time.

On their own, they're both great. But they go together like chips and guac. Pairing logging with monitoring can help you sift through log data much more efficiently in order to get to the root of the problem.

Think about it: You go to the doctor and tell her that your throat hurts. That's a log - a thing that's going on. But a sore throat could be any number of things - strep, the common cold, yelling too much at a concert, etc. That's monitoring - an ongoing record of what has been happening in your life. 

Let's break it back to technology. Imagine that you're seeing errors on your server. 

You can look back at your logs to see when it happened and with what frequency. In your monitoring history, you see that memory usage is fairly stable and consistent. But then, you see a spike in the memory utilization. That's not right!

Without the logs, this spike doesn’t mean much (other than it shouldn't be there). Bringing together your logs and monitoring can provide much more clarity. During the spike in memory utilization, you find some unusual log entries indicating a specific event that caused the spike.

----
   
## Key Monitoring Metrics (20 min)

But how do you know what datapoints to monitor? How can you decide when something is good or bad? Where in your application should you be looking? It all comes down to picking the right metrics.

In a complex environment, we might need to monitor a range of metrics at many different levels: application, host, and service. 

### Host Monitoring
  
Host/Infrastructure metrics include the metrics on the platform that our microservices resides on. 
 - CPU 
 - Memory
 - Disk space
 - Network bandwidth

### Services Monitoring

Services are the microservices components that make up our microservices architecture.

 - Availability
 - Response times
 - Status codes (Errors, Exceptions, timeouts)
 - Cache hit rates
 - Error rates

Additionally, we need metrics on our own services. These are also known as business metrics that can expose issues that are subtle and hidden, as they are not directly correlated with any technical metrics and statistics. 

For example, we have rolled out a new version of our E-commerce website and there's a bug where our new checkout button is not rendering correctly on one of the browsers. It's preventing customers from proceeding with the purchase of their order. This will result in a sudden drop in sales, but since there are no obvious technical metrics around this use case that can be collected in our system, we might miss an important detail like this. 

### Monitoring Strategy 

Our monitoring strategy would differ based on whether it's a service that's part of our microservices application or it's a third party library. We also might want to collect different statistics and metrics at different stages. 

For example, if we have just released a new version of a microservice, we would want to collect more statistics around exceptions being thrown or compatibility issues introduced by a new bug in our application. 

----
 
## Tools (30 min)

Not only do we want to look at a metric (like average CPU load) aggregated for the whole system, but we also need to aggregate that metric for all instances of a service or even for a single instance of that service. This would need associating some kind of metadata with the metric that will allow us to differentiate between these contexts.  
   
### Enter: the ELK Stack  

Elastic - the developer of ELK - describes it as:

_"ELK" is the acronym for three open source projects: Elasticsearch, Logstash, and Kibana. Elasticsearch is a search and analytics engine. Logstash is a server‑side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a "stash" like Elasticsearch. Kibana lets users visualize data with charts and graphs in Elasticsearch._    
[Source](https://www.elastic.co/elk-stack)

It allows you to create a fully capable monitoring and dashboard system for your infrastructure.  
   
The Elastic company offers 2 primary ways to use the ELK stack: a cloud hosted option or a self hosted on-premise option.  

Following is a brief overview of each of these projects.

[Elasticsearch](https://www.elastic.co/products/elasticsearch):
 - Highly scalable document database
 - Built-in search, aggregation and sharding capabilities 
 - Backs up popular services like Microsoft Azure Search, Wordpress and Stack Exchange
 - Backend repository for logging and monitoring infrastructure

[Kibana](https://www.elastic.co/products/kibana):
 - Web-based front-end for viewing logs 
 - Allows searching through logs using regular expression and time ranges with a query syntax
 - Can generate graphs showing trends of the various metrics
 - Works seamlessly with Elasticsearch
 
[Logstash](https://www.elastic.co/products/logstash):
 - Aggregates incoming logs and messages
 - Processes them by modifying or supplementing the log data
 - Forwards the altered logs to Elasticsearch

[Beats](https://www.elastic.co/products/beats):
 - Collection of small, lightweight programs
  - Filebeat: analyzes text log files
  - Metricbeat: collects metrics from the OS and applications
  - Packetbeat: collects network data
  - Winlogbeat: listens on windows event log
  - Libbeat: Write your own custom utility in Golang
 - Allows the collection of data from a variety of sources
 - Can forward data to another external application like Logstash or Elasticsearch
 
So, how do all of these work together? 

First, the respective Beats applications read the logs and telemetry data, forward the information to a Logstash server where it will be changed and augmented and then sent to an Elasticsearch server. Finally, Kibana can help graph and make sense out of this information.  
  
An example of one such workflow is shown below:
  
![](https://cdn2.howtodoinjava.com/wp-content/uploads/2017/08/ELK.jpg)  
*[Source](https://howtodoinjava.com/microservices/elk-stack-tutorial-example/)*
  
### Graphite

[Graphite](https://graphiteapp.org/) is a system that exposes an API allowing our application to send metrics in real time and query them to produce displays like charts. 

![](https://graphiteapp.org/img/architecture_diagram.png)  
*[Graphite High Level Architecture](https://graphiteapp.org/)*

It can aggregate across samples or drill down to a single series. An alternative to this tool is [Prometheus](https://prometheus.io/). If you have access to the raw data, you can even provide your own custom reporting and dashboards. You can store information about your system over a long period of time to generate trend reports which can be immensely helpful for capacity planning.   

### Zipkin  

*"Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in microservice architectures. It manages both the collection and lookup of this data. Zipkin’s design is based on the Google Dapper paper."*
[Source](https://zipkin.io/)

It can trace calls across multiple system boundaries and provide very detailed tracing of interservice calls alongwith a UI to represent the data. 
  
### Pingdom

[Pingdom](https://www.pingdom.com/) is a global performance and availability monitoring solution for your websites, applications, and servers. So, it not only allows you to track if your website is down but also ensure that the users of your application are able to access it in a timely manner.  
  
It also provides [webhooks](https://www.pingdom.com/resources/webhooks/) that let you programmatically act on state changes that occur on any uptime or transaction checks.

------

## Summary (5 min)

This was a long lesson. Let's summarize everything we did.   
 
1. We introduced the concept of logging and monitoring and why it's especially important in a microservices architecture. 
1. We identified the different key monitoring metrics and the extent of their impact on our application and business. 

It's important to understand that the tools we learned about are only useful once we have explored and identified the key metrics in our application. For example, if we have an application consisting of several microservices interacting with each other over the network, we would certainly want to instrument the network traffic. 

#### Resources

- [Zipkin](https://zipkin.io/pages/quickstart.html)
- [Pingdom Reports](https://www.pingdom.com/tutorial/understanding-reports/)

