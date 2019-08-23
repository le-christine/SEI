---
title: How the Internet Works
type: Lesson
duration: "0:30"
creator:
    name: Gerry Mathe
    city: London
---

# ![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) How the Internet Works

### Objectives

After this lesson, students will be able to:
- Explain the differences between a client and a server.
- Explain the difference between the internet and the World Wide Web.
- Explain the significance of an internet protocol (IP) address.
- Explain how data travels through the internet.
- Break down the components of a URL: protocol, subdomain, domain, extension, and resources.
- Identify and describe the most common HTTP request-response headers and the information associated with each.

## Intro: Server, Client, Request, HTTP (10 min)

The internet comes down to requests and responses: You send information out to the web and, based on what you send, you get information back.

#### HTTP 101

Back in the 1980s, computers connected to each other over the internet using their own language and protocols. If you wanted to connect to a server at a university, you had to figure out what protocol and language it was using — and the operating system, too. This quickly became a mess, as more and more systems and universities joined the internet. Communicating with any given institution required supporting and switching between all kinds of protocols.

Along came HTTP, which stands for **Hypertext Transfer Protocol**. Because it is a protocol, it allows for communication between a variety of computers and supports a ton of different network configurations. In short, HTTP makes it easy for many different computers to talk to each other.

To make this possible, it assumes very little about a particular system and does not keep state between different message exchanges. This makes HTTP a stateless protocol.

Let's define the following vocabulary:

- **Host**: A computer or other device connected to a network. A host may offer information resources, services, and applications (via computer code) to users or other computers on the network. An example of a host is a server communicating with web services.
- **Client**: The requesting program in the client-host relationship. The client initiates an HTTP request message, which in turn is serviced through an HTTP response message. Examples of clients include browsers, terminals, and SQL clients.

![](https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg)

To sum up, communication between a host and a client occurs via a request-response pair. The client initiates an HTTP request message, which is serviced through an HTTP response message. We'll look at this fundamental message pair in the next section.

_Text from [Tuts +](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)_

#### How to Reach a Specific Server

All computers on the internet have a unique numeric address. This is the way computers find each other when communicating. You may recognize the format below — it's an IP address:

```
123.123.123.123
```

#### IP Addresses to Domains

Of course, these numbers are hard to remember and are not really human-friendly. Can you imagine if website addresses had to be given this way? Instead of commercials on the radio saying "Go to OurWebsite.com," they'd be saying "Go to 12.14.142.231" and repeating it five times just to make sure everyone got it.

What was needed was a way to translate real names into those numbers. This is why we have domain registrars. Basically, you reserve the name and, at the domain registrar, your domain name is pointed to the server's unique address.

When you type a website domain into your web browser (or other internet-capable app), what happens is a DNS lookup of that particular domain's IP address, so your computer can actually connect to it. DNS stands for **Domain Name System**, and it's the way internet domain names are located and translated into Internet Protocol addresses.

| Domain Name  | IP Address    |
|--------------|---------------|
| apple.com    | 17.172.224.47 |
| facebook.com | 31.13.65.1    |
| google.com   | 216.58.192.46 |

> Try it: Instead of typing the name of the website, type in the IP address for one of these sites. What happens?

When you go to apple.com, your browser asks a DNS server, "What is the IP address of apple.com?" The DNS server responds with "17.172.224.47," and the browser can then connect to 17.172.224.47.

In real-world terms, it's similar to how we use street addresses for finding a house, rather than using latitude and longitude coordinates; they're easier to remember and read.

#### How DNS Servers Look Up IP Addresses

Your computer looks up IP addresses for domains by asking the nearest DNS server, which is typically the local WiFi router. The WiFi router will not know the IP address unless it was previously looked up, so the router will go further up the hierarchy to your internet service provider's DNS server.

Often, another ISP customer has already requested the domain lookup, and the IP address is cached for a while, allowing for a quick response. Otherwise, the lookup is escalated to the top-level domain (TLD) registry that has a list of registrars per domain. The registrar is the final authority that resolves the IP address.

The response is passed back along the chain and cached at each step to speed up future lookups.

#### Client and Server Communication

All client-server protocols operate in the application layer. The application-layer protocol defines the basic patterns of the dialogue.

A server may receive requests from many different clients in a short period of time. Because the computer can perform a limited number of tasks at any moment, it relies on a scheduling system to prioritize incoming requests from clients to accommodate them all.

To prevent abuse and maximize uptime, the server's software limits how a client can use the server's resources. Even so, a server is not immune from abuse. A denial-of-service attack exploits a server's obligation to process requests by incessantly bombarding it with requests. This inhibits the server's ability to respond to legitimate requests.

#### Example

When a bank customer accesses online banking services with a web browser (the client), the web browser initiates a request to the bank's web server. The customer's login credentials may be stored in a database, and the web server accesses the database server as a client. An application server interprets the returned data by applying the bank's business logic and provides the output to the web server. Finally, the web server returns the result to the client web browser for display.

In each step of this sequence of client–server message exchanges, a computer processes a request and returns data. This is the request-response messaging pattern. When all the requests are met, the sequence is complete and the web browser presents the data to the customer.

*Taken from [Wikipedia](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)*

## What Is the Difference Between the Internet and the Web? (10 min)

#### The Internet Is a Big Collection of Computers and Cables

The internet is named for "interconnection of computer networks." It's a massive hardware combination of millions of personal, business, and government computers, all connected like roads and highways.

No single person owns the internet. No single government has authority over its operations. Some technical rules and hardware and software standards enforce how people plug into the internet but, for the most part, it's a free and open broadcast medium of hardware networking.

#### The Web Is a Big Collection of HTML Pages on the Internet

The World Wide Web, or web for short, is a massive collection of digital pages — that large software subset of the internet dedicated to broadcasting content in the form of HTML pages. The web is viewed by using free software called web browsers. Born in 1989, the web is based on HTTP, the language which allows you and me to "jump" (hyperlink) to any other public webpage. There are billions of public webpages today.

*Taken from [Lifewire](https://www.lifewire.com/difference-between-the-internet-and-the-web-2483335)*

#### Elements of a URL

URL stands for **Uniform Resource Locator**, and it's just a string of text characters used by web browsers, email clients, and other software to format the contents of an internet request message.

Let's break down the contents of a URL:

```
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         query string     hash fragment
```

Element | About
------|--------
Protocol | The most popular application protocol used on the World Wide Web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, and HTTPS.
Host or domain name | The host or domain name is looked up in DNS to find the IP address of the host, which is the server providing the resource.
Path | Web servers can organize resources into what's effectively files in directories. The path indicates to the server which file from which directory the client wants.
Query string | The client can pass parameters to the server through the query string (in a `GET request` method). The server can then use these to customize the response, such as values to filter a search result.
Hash fragment | The hash fragment is generally used by the client to identify some portion of the content in the response. Interestingly, a broken hash will not break the whole link — this isn't the case for previous elements.

*Schema above from [Tuts+](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)*

When someone types `http://google.com` in a web browser, a new cycle resulting in an HTTP request-response is initiated. Essentially, your browser is saying, "Hey, give me the information located at the web address 'google.com'."

When the user presses `enter`, a `GET request` will start. This is what the request will look like:

![HTTP request CLI](http://s27.postimg.org/u231qbweb/Screen_Shot_2015_08_15_at_15_27_13.png)

Note that the webpage being requested is:

`http://www.google.co.uk/?gfe_rd=cr&ei=WkvPVabgC-HH8gfWjoCIAw`

Anything after the `?` is considered a parameter — information you're also giving to that web address in the query string.

In the response, the HTTP version is provided, which in this case is 1.1.

The rest of the lines are HTTP headers, which do things like tell the web server what website to retrieve based on the domain (host), report the user agent and acceptable encoding and language, and other browser-specific options.

## Responding to a Request (10 min)

Once this request reaches the server, the server will return a response to the requester.

HTTP responses are similar to HTTP requests in that they're text-based and contain HTTP headers and status. Look at the first line above again: The HTTP response returns the HTTP status code. This code is useful for developers working with request-response cycles.

HTTP status codes come in three-digit numbers and dictate whether or not a specific HTTP request has been successfully completed. Responses are grouped into five classes, with the first digit determining the higher-level categorization:

- 1xx: informational
- 2xx: success
- 3xx: redirection
- 4xx: client error
- 5xx: server error

After the status code, some server headers are sent, including information about the type of server and software it’s running. Next, the body of the response contains the data we requested, which is generally HTML, CSS, JavaScript, or binary data like an image or PDF.

Because HTTP is a text-based protocol, it’s easy to make HTTP requests manually.

_Some text taken from [One Month](http://learn.onemonth.com/understanding-http-basics)_

#### Server Side vs. Client Side

Once the request-response cycle has been executed, the web browser is in charge of interpreting the data received and showing it to the user. Let's look more closely at the types of computer languages and markup involved:

![](http://image.slidesharecdn.com/html-css-presentation-131023112801-phpapp02/95/html-csspresentation-7-638.jpg?cb=1383133015)

The server contains code — Ruby, PHP, Java, or even JavaScript — that processes your request. Depending on the contents of your request, the server will execute different files on the server that contain code. Then, the server will return a particular set of information and data.

The information and data received is usually packaged in an HTML document with some CSS and JavaScript files. You may also get a PDF, image, or other file types. The location of the resource is specified by the user using a URI (**Uniform Resource Identifier**).

The way the browser interprets and displays HTML files is detailed in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, an important standards organization for the web. The JavaScript language specification is published by a technical committee (TC39) at the ECMA organization.

_Taken from  [HTML5Rocks](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)_

