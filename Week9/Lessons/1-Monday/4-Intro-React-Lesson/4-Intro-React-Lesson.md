---
title: Intro to React
type: lesson
duration: "1:15"
creator:
    name: Melissa Arliss (adapted from SF-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to React.js

### LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- Explain what a front-end framework is and why they can be helpful in writing more complex applications.
- Explain what React.JS is and where it fits in our applications' stack.
- Explain the component model of web development.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening         | Discuss lesson objectives |
| 5 min  | Introduction    | Front-end frameworks |
| 5 min  | Introduction    | Intro to React |
| 10 min | Introduction    | Components |
| 15 min | Exercise        | Identifying Components |
| 15 min | Guided Practice | Initial Setup |
| 10 min | Exercise        | React app exploration |
| 5 min  | Conclusion      | Review / Recap |

## Opening (5 min)

In this lesson, we'll explore what React is and why we use it.

## What is a Front-end Framework? (5 min)

When we first learned about Spring, we learned about what a **web framework** is. 

> Check: Can someone explain what a framework is? 

<details>

<summary>A framework...</summary>

...can help standardize code, give you additional functionality and performance, and can help get your code off the ground faster. 

</details>
 
As an example, Spring Boot is a framework that runs on the server side, receiving an incoming request from the client, performing some work that you have defined, and returning some response to the client.  

Front-end frameworks run on the client side, receiving input from interactions with the page, performing some work that you have defined, and make any updates necessary. There are [many](https://medium.com/existek/top-front-end-frameworks-in-2019-4c73c0f845d3) front-end frameworks and each go about solving problems of how state is managed, updated, and represented by a view but there are many commonalities.

> Sidebar: There is a lot of debate over whether front-end frameworks count as frameworks at all -- some people say that they are just libraries and should be referred to as such. It's a conversation for another time.

## What is React.js? (5 min)

React is a JavaScript library used to craft modern day UI and views for the front-end in web applications.

> **Selling Point:** By modeling small, compatible components that focus on just rendering a view, we can move business logic out of the DOM, and therefore improve our app's performance, maintainability, modularity and readability.

### Some History

The first thing most people hear about React is "Facebook uses it." And they are correct!
- First used by Facebook in 2011.
- Then Instagram in 2012.
- Went open source in May 2013.

React was born out of Facebook's frustration with the traditional MVC model and how...
- Re-rendering something meant re-rendering everything (or just a lot).
- That had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

> If you want to get a taste of what React is all about, [here's an introduction from React.js Conf 2015](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510). Recommend starting around the 8:35 mark and watching until 16:30.

### React in MVC

<details>

<summary>What the heck is MVC? Let's refresh.</summary>

MVC stands for "model, view, controller" and is a widely used design pattern for developing the user interface of a web application. It helps to separate an application's concerns into a data model, presentation information, and control information.

</details>

React can be thought of as the "Views" layer.

<details>

<summary>What is the role of a "view" in a front-end JavaScript application?</summary>

The visual template the user sees, often populated with data from our models.

</details>

React's role is just to use data to render a UI. This means that React can also coexist with other JavaScript frameworks. It can also work with any back-end language or framework (and we will, of course, be using Java and Spring Boot). Let them handle the models and controllers, and have React sort out the views.

## Components (15 min)

One comment made about React when it was first open sourced was "Rethinking established best practices," which kind of became the React motto. In React, we want to move away from template pages, away from separating code based purely on file type, and more towards a **component-based** separation of concerns. More: [Templates vs Components](https://wanderoak.co/fixed-templates-vs-components/)

![Templates Page](images/templates-page.png)

![Components Page](images/components-page.png)

> [WanderOak - Fixed Templates vs. Components](https://wanderoak.co/fixed-templates-vs-components/)

When taking a look at Facebook, you could think of each status update as a mini-component in React. And a list of those updates is a component that contains several of those mini-components. You could take that one step further and think of the Facebook app, as one giant component with several components within it. (Things like the list of status updates, the friends list, the header, etc...)

Imagine you worked at Facebook when they wanted to shift from using likes to reactions. Using traditional JavaScript, HTML, and CSS the shift would make you have to change your code in a bunch of places. Component based architecture allows us to maintain our code more easily.

### Another Example

Let's look at a mock up for the London Tube system.

![Wireframe](images/wireframe.png)

![Wireframe with components](images/wireframe_deconstructed.png)

> [MakeTea - Building Robust Apps with React](http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html)

Notice the structure of how the various components are nested. 

```
- TubeTracker
    - Network
        - Line
    - Predictions
        - DepartureBoard
            - Trains
```

Here's what we can see:
- TubeTracker contains the application
- Network displays each line on the network
- Line displays the stations on a line
- Predictions controls the state of the departure board
- DepartureBoard displays the current station and platforms
- Trains displays the trains due to arrive at a platform

### F.I.R.S.T. Components

A React component is built to expect an input and render a UI with it. More importantly, a well-structured component only receives data specific to its purpose.

This is because React follows a more **functional** approach to programming. For React components under this approach, **the same input will always produce the same output**.

Best practice is that React components follow the **F.I.R.S.T.** guidelines. (More on that here: [F.I.R.S.T. Components](https://addyosmani.com/first/).)

#### Focused

Components should do one thing and do it well.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another.

#### Reusable

Components should be written in a way that reduces the duplication of code.

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

> We'll be using [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) for testing soon.

## Exercise: Identifying Components (15 min)

Break into groups of three and take a look at Facebook, Craigslist, Ebay, or another website of your choice. Identify the visual "components" the website is comprised of. Use markers to draw these out on the wall.

As you're drawing this out, think about the following questions...
* Where do you see "nested components"? Where do you not?
* Are there any components that share the same structure?
* Of these similar components, what is different about them?

> 10 minutes exercise. 5 minutes debrief as a class.

## Initial Setup (15 mins)

In order to create a new project and to get our development environment setup, we are going to use the Terminal command   `create-react-app`. It will create a new folder in your current directory for the in-class application.

`create-react-app` is an NPM package also built by Facebook that writes our build dependencies for us so that we can do less configuration. It allows us to use React, JSX, and ES6. It also allows us to import our CSS, it autoprefixes our CSS so that we don't have to worry about cross browser compatibility, it gives us a dev server to run, and it enables hot reloading which updates the code in our browser without us refreshing the page.

It uses Webpack, which is a build tool that enables many of the features listed above. It also includes Babel which transpiles our JavaScript from ES6 to be compatible with older browsers. It also includes ESLint for linting, and Jest for testing. So yeah, it does all the things.

You can also set up all this yourself, but for now `create-react-app` allows us to worry more about our code and less about configuration.

```bash
$ npm i -g create-react-app
$ create-react-app blog-app
$ cd blog-app
$ code .
$ npm run start
```

> Here you will begin setting up a blog app that you will continue working on during this lesson's exercises. For demonstration purposes, we will be creating a simple "hello world" app.

After running `$ npm run start`, we can view the app at `http://localhost:3000`.

`create-react-app` provides us with all the necessary tools and configuration necessary to start writing React. `npm run start` refers to an included script that starts up the development server.

Along with installing the necessary dependencies, it creates an initial app skeleton that looks like this...

```bash
├──README.md
├──  favicon.ico
├──  index.html
├──  node_modules
├──  package.json
└──  src
    ├──  App.css
    ├──  App.js
    ├──  index.css
    ├──  index.js
    └──  logo.svg
```

Most of the important files, which are primarily the ones where we will be working today, are in the `/src` directory.

## Time to Explore (10 mins)

On your own... 
- Explore the files we just created.
- Check out the different naming conventions we are seeing here.
- Check out the boilerplate code `create-react-app` gave us.

Write down **2 observations** and **2 questions** you have based on what you looked at.

Take 5 mins to do this on your own and then we'll review as a class.

## Conclusion (5 min)

- Why do we use components in React?
- What does React help with?
