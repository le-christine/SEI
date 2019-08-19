---
title: Component Lifecycle
type: lesson
duration: “1:15”
creator:
    name: Melissa Arliss (adapted from DEN-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Component Lifecycle

### LEARNING OBJECTIVES

*After this lesson, you will be able to:*
* Name and describe several key functions that are part of a component's lifecycle.
* Pause an application in the middle of executing a lifecycle function.
* Choose what lifecycle functions could be used for various common use cases, like registering event listeners.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening              | Discuss lesson objectives |
| 5 min  | Lecture              | Meet the methods |
| 25 min | Lecture              | A few key methods |
| 20 min | Independent Practice | Changing components |
| 15 min | Exercise             | Scenario gameshow |
| 5 min  | Conclusion           | Review / Recap |

## Opening (5 min)

React components provide several lifecycle methods that you can use to control your application based on the state of the UI.

These methods happen automatically - but you can call them to modify them.

These methods are called at specific points in the rendering process. You can use these methods to perform actions based on what's happening on the DOM.

Some common uses of lifecycle methods are making asynchronous requests, binding event listeners, and optimizing for performance.

------

## Meet the Methods (5 mins)

React components' lifecycle events fall into three broad categories:

- **Initializing / Mounting**: e.g., What happens when the component is created? Was an initial state set? Methods:
  - `constructor()`
  - `static getDerivedStateFromProps()`
  - `componentDidMount()`
  - `render()`

- **Updating**: e.g., Did an event happen that changed the state? Methods:
  - `static getDerivedStateFromProps()`
  - `shouldComponentUpdate()`
  - `componentDidUpdate()`
  - `render()`

- **Destruction / Unmounting**: e.g., What needs to happen when we're done with the component? Method:
  - `componentWillUnmount()`

> There are a few methods that are slated for deprecation that you might still see in a lot of React tutorials out in the wild: `componentWillMount`, `componentWillUpdate`, and `componentWillReceiveProps` are slated for deprecation. We won't focus on them today, but wanted to give you a heads up.

Let's go through them. Again, you don't need to write these methods - they happen automatically, just like constructors did before we explicitly wrote one. You only have to worry about these if you want to change something in them - but if you do, it's important to understand them!

[Check out the documentation on components!](https://facebook.github.io/react/docs/react-component.html)

![React Component Lifecycle](img/reactComponentLifecycle.jpeg)

Open the [interactive version of this image](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) in a new window next to this one, and follow along as we go through the methods.

------

## A Few Key Methods (25 min)

We won’t go through every method we mentioned above, but we will talk about these ones:
- `constructor()`
- `componentDidMount()`
- `componentWillUnmount()`
- `render()`

### `constructor()`

This is something we've already seen when we were learning `state`. Like any JavaScript class, the `constructor` method is called when a component is instantiated (i.e., when it's first rendered).  

In a class constructor, you must call `super` before you do anything else. So a React component constructor in its most basic form looks like this:

```js
constructor(props) {
  super(props);
}
```

You don't need to define a constructor if that's all it does, though. This happens automatically when your component is invoked. A common use of the constructor is to initialize state using the props passed to the component - as we have been doing!

```js
constructor(props) {
  super(props);
  this.state = {
    fruits: props.fruits,
  };
}
```

> This constructor sets the initial `fruits` state of the component to the `fruits` prop passed to the component. Then, using `setState`, your user can add fruits, delete them, or whatever else your component allows.

Another common use of the constructor method is to *bind class methods*.

When a method is "bound" to a component, it means that when the method is invoked, `this` will refer to the component, and not to the context that invoked the method. So, if you pass a component's method to a child component from a parent component, you can be sure that `this.setState` will set the state of the parent component if the method is bound to it.

In JavaScript classes, methods aren't bound by default. So, if you pass a component's method to a child component without binding it, it can lose its context, and not behave the way you intended. Here's an example:

```js
class FruitTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: props.fruits,
    };
    this.addFruit = this.addFruit.bind(this);
  }

  addFruit(fruit) {
    this.setState(prevState => ({
      fruits: prevState.fruits.concat(fruit),
    }));
  }

}
```

Notice that in the constructor, `this.addFruit` is bound to the class - `this.addFruit = this.addFruit.bind(this);`

Now, if we pass `this.addFruit` to a child component as an onChange callback, it will be bound to `FruitTable` and will update its state when it's invoked.

Again, you _don't_ need a constructor in every React component, but if you need to initialize state by props or bind methods, the constructor is where you do it.

> Note: Arrow methods don't always need to be bound. Arrow methods in classes aren't quite standard JS yet, but they are bundled into the create-react-app Babel package.

### `componentDidMount()` and `componentWillUnmount()`

The `componentDidMount` method is called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, this is where to do it (_not_ in the constructor).

[Side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) should be avoided in the `constructor`, and so server requests shouldn't be made there. The accepted answer on [this Stack Overflow](http://stackoverflow.com/questions/41612200/in-react-js-should-i-make-my-initial-network-request-in-componentwillmount-or-co) from a member of the React team at Facebook gives more detail. 

In the following example, we fetch data from the server, then set the state of the component using the response.

```js
componentDidMount() {
  fetch(`http://api.com/${this.props.id}`)
    .then(response => response.json())
    .then(data => this.setState(prevState => ({ data })));
}
```

Another common use for `componentDidMount` is to bind event listeners to your component. You can then remove the event listeners in `componentWillUnmount`. In this example, we bind and unbind an event listener for a drag-drop component.

```js
class FruitTable extends React.component {

  componentDidMount() {
    document.addEventListener('dragover', this.handleDragStart);
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', this.handleDragStart);
  }

  handleDragStart(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dragging: true
    }));
  }

}
```

### `render()`

This is the one method that every React class component **must** have. In render, you return JSX using the compoment's props and state. You should never set state in render - render should only react to changes in state or props, not create those changes. The following component renders a single prop and a single state key - a car model and a speed. Once this component is mounted, its `speed` state will go up by 1 every second. You can [try it out yourself on CodePen](https://codepen.io/andrewdushane/pen/aJEJjm).

```js
class Car extends React.Component {

  constructor(props) {
    super(props);

    // sets initial state to either the `speed` prop, or 0 if the `speed` prop
    // is not passed to the component
    this.state = {
      speed: props.speed || 0,
    }

    // binds this.incrementSpeed to class
    // this way when it's used as a callback for `setTimeout`
    // `this` refers to the `Car` class
    this.incrementSpeed = this.incrementSpeed.bind(this);
  }

  componentDidMount() {
    // calls this.incrementSpeed after one second
    window.setTimeout(this.incrementSpeed, 1000);
  }

  incrementSpeed() {
    // sets the `speed` state to one unit higher than it was previously
    this.setState(prevState => ({ speed: prevState.speed + 1 }));

    // recursive method
    // increases speed by 1 again after one second
    window.setTimeout(this.incrementSpeed, 1000);
  }

  render() {
    return (
      <div>
        This {this.props.model} is going {this.state.speed} miles per hour!
      </div>
    );
  }

}
```

To break down what's happening in this component:

**`constructor`**

The initial state is set to either the `speed` prop, or 0 if the `speed` prop is not passed to the component.  

We bind `this.incrementSpeed` to the class, so that when it's used as a callback for `setTimeout`, `this` refers to the `Car` class.

**`componentDidMount`**

Use [`window.setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) to call `this.incrementSpeed` after one second (1000 ms).

**`incrementSpeed`**

`this.setState(prevState => ({ speed: prevState.speed + 1 }));`: The `speed` state is set to one higher than it was previously - we add one.

`window.setTimeout(this.incrementSpeed, 1000)`: The `incrementSpeed` method is [recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science) - it invokes itself as the timeout callback. After one second, `window.setTimeout` will call `this.incrementSpeed` again - the `speed` will go up by one, and a new timer will be set to do it again.

------

## Challenge (20 min)

Pull down the starter code in this repo and see if you can:

1. Modify it to add an event listener to the Car component (e.g. 'click').
1. Make the background color a new random color each time the component updates.

-----

## Scenario Gameshow (15 min)

Okay, so it’s not *actually* a gameshow, but we wanted to take a few minutes to talk through the methods we learned and identify scenarios in which we’d use each of them.

Let’s get into groups of 3-4 people and gear up for the competition! I’ll call out a scenario and give you 30 seconds to discuss in your group. Each group will shout out their answer in a calm and civilized manner, and we’ll keep track of who gets what correct.

The group with the most points gets a prize at the end! (Spoiler alert: The prize is just fame, glory, and bragging rights.)

<details>
<summary>Name at least two common uses for React component constructor methods.</summary>

Answer:
- calling `super`
- initializing `state`
- binding methods

</details>

<details>
<summary>Which lifecycle method must be defined?</summary>

Answer:

`render()`

</details>

<details>
<summary>Which method is appropriate to use for API calls?</summary>

Answer:

`componentDidMount()`

</details>

<details>
<summary>What method would be appropriate for attaching event listeners?</summary>

Answer:

`componentDidMount()`

</details>

<details>
<summary>What method is best for removing event listeners?</summary>

Answer:

`componentWillUnmount()`

</details>

<details>
<summary>What is the first step in using the constructor() method?</summary>

Answer:

Call `super`.

</details>

<details>
<summary>How would you initialize state using the props passed to the component?</summary>

Answer:

Using the `constructor` method.

</details>

<details>
<summary>What is one thing you should not use the render method for?</summary>

Answer:

You should never set state in `render`.

</details>

<details>
<summary>Which method can be used to cancel network requests?</summary>

Answer:

`componentWillUnmount()`

</details>

<details>
<summary>To initialize DOM nodes, you would use...</summary>

Answer:

`componentDidMount()`

</details>

-----

## Conclusion (5 min)

Component lifecycle methods help us manage the state of our components. While the methods happen automatically, it’s important to understand how they work in case you want to alter one, and in so doing, alter the course of your component’s life.
