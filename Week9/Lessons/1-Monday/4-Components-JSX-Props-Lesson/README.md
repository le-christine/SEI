---
title: Components and Props
type: lesson
duration: "1:25"
creator:
    name: Melissa Arliss (adapted from SF-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Components and Props

### LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- Create and render React components in the browser.
- Pass data into a component using props.
- Create a nested component.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening         | Discuss lesson objectives |
| 10 min | Guided Practice | A very basic component |
| 5 min  | Introduction    | JSX |
| 10 min | Introduction    | The Virtual DOM |
| 15 min | Guided Practice | Props      |
| 25 min | Exercise        | Building a blog app |
| 10 min | Guided Practice | Nested Components     |
| 5 min  | Conclusion      | Review / Recap |

## Opening (5 min)

In our last lesson, we learned what components are and how they fit into the world of web development. In this lesson, we'll actually start creating them!

## A very basic component (10 mins)

The basic unit you'll be working with in React.JS is a **component**. We've already heard a bit about these!

<details>

<summary>Can someone explain what a component is?</summary>

Components can be thought of as functional elements that take in data and as a result, produce a dynamic UI.

</details>

Throughout class, we have separated HTML, CSS, and JavaScript.

With components, the lines between those three become a bit blurry. "DEAR GOD NO!", shout many developers at first... but most come around when they see how logical it ends up feeling. Instead, we organize our web apps according to small, reusable components that define their own content, presentation and behavior.  

What does a component look like? Let's start with a simple "Hello World" example...

To start, in our `/src/App.js` file, let's remove the contents, and in its place, add this component definition...

```js
// bring in React and Component instance from React
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
```

Let's break down the things we see here...

#### `class Hello`

This is the component we're creating. In this example, we are creating a "Hello" component.

#### `extends Component`

This is the React library class we inherit from to create our component definition and OH HEY IT SURE LOOKS A LOT LIKE CLASSES IN JAVA DOESN’T IT!! worlds colliding.

#### `render()`

Every component has, at minimum, a render method. It generates a **Virtual DOM** node that will be added to the actual DOM. It looks just like a regular ol' DOM node, but it's not yet attached to the DOM.

##### `export default Hello`

This exposes the Hello class to other files which import from the App.js file. The `default` keyword means that any import that's name doesn't match a named export will automatically revert to this. Only one default is allowed per file.

## JSX (5 min)

> Hey you got your html in my javascript!
>
> You got your javascript in my html!
>
> (https://youtu.be/O7oD_oX-Gio?t=5s)

Let's talk about the value that the `render` method returns. It looks an awful lot like an HTML heading, but it's not. We often write out React components in **JSX**.

JSX is a language that compiles to Javascipt that allows us to write code that *strongly* resembles HTML. It is eventually compiled to lightweight JavaScript objects.

Your Hello component's render method:
- Currently returns JSX, not HTML. The JSX creates a heading with 'Hello World!'.
- Your component reads this and renders a "Hello World!" heading.

> React can be written without JSX. If you want to learn more, [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).  

## Virtual DOM (10 min)

You may have noticed that our `src/index.js` code mentions ReactDOM. ReactDOM doesn't refer to the same DOM we know and love. Instead, it refers to a **Virtual DOM**. The Virtual DOM is a key piece of how React works.

The Virtual DOM is a JavaScript representation of the actual DOM. The Virtual DOM is a staging area for changes that will eventually be implemented.

What makes it handy?
- Because of that, React can keep track of changes in the actual DOM by comparing different instances of the Virtual DOM.
- React then isolates the changes between old and new instances of the Virtual DOM and then only updates the actual DOM with the necessary changes.
- By only making the "necessary changes," as opposed to re-rendering an entire view altogether, we save up on processing power.
- This is not unlike Git, with which you compare the difference -- or `diff` -- between two commits.

![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

> If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

So we've created the template for our component. Now, let's use `/src/index.js` to load in our new component and render it on the DOM...

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

> In place of `ReactDOM.render`, some tutorials will use React.renderComponent, which has been phased out. The change is outlined [here](http://bit.ly/1E81Whs).

`ReactDOM.render` takes the Virtual DOM node created by `extends Component` and adds it to the actual DOM. It takes two arguments...

  1. The component.
  1. The DOM element we want to append it to.

> **NOTE:** Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/` like `<Hello />` in the above example.

## Props (15 min)

Our `Hello` component isn't too helpful. Let's make it more interesting! Rather than simply display "Hello world", let's display a greeting to the user.

So the question is, how do we feed a name to our `Hello` component without hardcoding it into our render method?

First, we pass in data wherever we are rendering our component, in this case in `src/index.js`...

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

Then in our component definition, we have a reference to that data as a property on the `props` object...

```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

### Hold up...

What's that `.props` thing we passed in?

Properties! Every component has `.props`.
- Properties are immutable. That is, they cannot be changed while your program is running.
- We define properties in development and pass them in as attributes to the JSX element in our `.render` method.

First, we can pass multiple properties to our component when it's rendered in `src/index.js`.

```js
import React from 'react';
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
)
```

The biggest convenience of JSX is that it gives us an HTML-like syntax that we can use to compose our components and application. With JSX, we can pass any variable as a prop. To do that, we pass it in between curly brackets..

Then, in our component definition, we have access to both values...

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      </div>
    )
  }
}

```

> Note: The return statement in `render` can only return one DOM element. You can, however, place multiple elements within a parent DOM element, like we do in the previous example with `<div>`.

## Practice: A Blog Post (25 min)

Let's have some practice creating a React component from scratch. How about a blog post?

- Create a `post` object literal in `src/index.js` above `ReactDOM.render()` that has the below properties.
  1. `title`
  1. `author`
  1. `body`
  1. `comments` (array of strings)
- Render these properties using a Post component.
- The composition of your Post is up to you.

Take 20 mins to work on this, and then we'll spend some time reviewing the solution.

If you finish early, try experimenting with CSS (Make sure you use `className` instead of `class` in `JSX`!).

## Nested Components (10 min)

> Check: What problems did you encounter when trying to add multiple comments to your Post?

It would be a pain to have to explicitly define every comment inside of `<Post />`, especially if each comment itself had multiple properties. This problem is a tell tale sign that our separation of concerns is being stretched, and it's time to break things into a new component.

Solution: We can nest a Comment component within a Post component!
1. We create these comments the same way we did with posts: `extends Component` and `render`.
1. Then we can reference a comment using `<Comment />` inside of Post's render method.

Let's create a new file for our Comment component, `src/Comment.js`...

```js
import React, {Component} from 'react'

class Comment extends Component {
  render () {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Comment
```

Then in `src/App.js`, we need to load in our `Comment` component and render it inside of our `Post` component...

```js
import React, { Component } from 'react';
// Load in Comment component
import Comment from './Comment.js'


class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        // Render Comment component, passing in data
        <Comment message={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
```

> Note: We could put all of our code in one file, but it's considered a good practice to break components out into different files to help practice separation of concerns. The only downside is we have to be extra conscious of remembering to **export / import** each component to where it's rendered.

The above code works, but we'd have to hard-code all of our `Comments`. This is not very DRY and our code will not dynamically change. The best way to handle this is to set a variable equal to all of the `<Comments />` for this post. We can do this using `.map` in `Post's` `render` method.

We can use `.map` in `Post's` `render` method to avoid having to hard-code all of our `Comments`.

```js
class Post extends Component {
  render() {
    let comments = this.props.comments.map((comment, index) => (
      <Comment message={comment} key={index}/>
    ))
    return(
      <div className='post-page'>
        <h1>{this.props.title}</h1>
        <h2>By {this.props.author}</h2>
        <p>{this.props.body}</p>

        <h3>Comments</h3>
        {comments}
      </div>
    )
  }
}
```

## Conclusion (5 min)

- What is the Virtual DOM?
- What is JSX?
- What is a nested component?
