![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Positioning

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| CSS Positioning | Lesson | 0:55 | Melissa Arliss and Sonyl Nagale (adapted from SF-SEI) |


### Learning Objectives

*After this lesson, students will be able to:*
- Explain the difference between static, relative, fixed, and absolute positioning.
- Use cases of static, relative, fixed, and absolute positioning.

### Lesson Overview 

| Topic | Type | Timing |
| --- | --- | -- |
| The Box Model | Intro | 5 min |
| Positioning | Code-along | 40 min |
| Conclusion | Recap | 10 min |

## Introduction: Positioning (5 min)

The CSS `position` property is a way of building more complexity into your page layout; creating things like a sticky header that remains in place as the user scrolls or text that appears on top of an image. Let's look at some examples.

## Demo: Positioning (40 min)

There are four values of positioning:
- Static
- Relative
- Absolute
- Fixed

Static is the default positioning setting for any element. We won't spend time here. Let's move onto where it gets meaty.

### Relative

Using `position: relative;` positions an element within the document flow in relation to that element's original static position. If that sounds like a mouthful, that's because it is.

Remember our moving boxes that we built with the CSS box model? When it comes to positioning, this is akin to saying "move the red box 40px to the right of its current location."

For example, let's place two `<div>`s on our page and view them in their natural document flow:

```html
<div class="first"></div>
<div class="second"></div>
```

```css
div {
  height: 100px;
}

.first {
  border: 1px solid blue;
}

.second {
  border: 1px solid red;
}
```

![Relative](./images/relative-1.png)

Looks like we'd expect. What if we set the second `<div>` to `position: relative;`?

![Relative](./images/relative-1.png)

No change! This is because the element has not received any information on *where* it should be placed in relation to its natural position in the flow. We can give it specific instructions using the `top`, `bottom`, `right`, and `left` properties, like so:

```css
.second {
  position: relative;
  top: -50px;
  left: 20px;
  border: 1px solid red;
}
```

![Relative](./images/relative-2.png)

Wow! The second `<div>` moved `50px` from its original `top` position in the flow and `20px` away from its original `left` position.

> **Instructor Note**: Point out that the element has not been removed from the document flow. In other words, the rest of the page still acts as if `.second` is in the spot it originally occupied.

### Absolute

Styling an element with `position: absolute;` will remove that element from the rest of the document flow and position it in **relation to the closest positioned element**. If there are no other positioned elements on the page, the `absolute` element will use the `<body>` as a reference object.

There's no physical metaphor for this rule, because it allows your elements to overlap and intersect each other. Sadly, real boxes don't work this way!

Because `position: absolute;` elements work in tandem with other positioned elements, you must set the reference element to `position: relative;`. Let's look at an example:

```html
<figure>
  <img src="assets/catburrito.jpg">
  <figcaption>Cat Burrito</figcaption>
</figure>
```

```css
  figure {
    width: 50%;
    margin: auto;
  }

  figcaption {
    position: absolute;
  }
```

![Absolute](./images/absolute-1.png)

Similar to `relative` elements, the `absolute` element needs specific instructions on where it's meant to be positioned. Let's place the `figcaption` in the bottom-right corner of the photo:

```css
  figcaption {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
```

![Absolute](./images/absolute-2.png)

What did we miss? Our caption appears at the bottom-right corner of the *page*, not our `figure` as we expected.

The answer:

```css
figure {
  position: relative;
  width: 50%;
  margin: auto;
}
```

That's right! We need to set a position on a parent or ancestor, in this case, `figure`, so that `<figcaption>` can be absolutely placed in relation to that element.

![Absolute](./images/absolute-3.png)

### Fixed

A `fixed` element is not only removed from the document flow, it also stays in its position as the user scrolls on the page. A common `fixed` element is the `nav`. Let's see it in action. 

Here's the `nav` in its natural flow of the document:

![Fixed](./images/fixed-1.png)

```html
<nav>
  <a href="#">About</a>
  <a href="#">Portfolio</a>
  <a href="#">Contact</a>
</nav>
<div class="container">
	<h1>Welcome to my site!</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veritatis id aspernatur minus cum similique iusto sunt quasi nostrum, voluptate reiciendis sequi ducimus beatae et? Quis doloribus, sequi commodi obcaecati?</p>
</div>
```

```css
body {
  margin: 0;
  height: 150vh;
}

.container {
    width: 50%;
    text-align: center;
    margin: 0 auto;
}

nav {
  background: #eee;
  padding: 40px;
  text-align: center;
  position: fixed;
}

a {
  font-family: sans-serif;
  text-decoration: none;
  size: 20px;
  color: #222;
  padding: 0 20px;
}
```

By default, `nav` will scroll with the rest of the page.

What happens when we set the `nav` to `position: fixed;`?

![Fixed](./images/fixed-2.png)

What happened? Let's break down the changes we're seeing:
- As we know, a `fixed` element is taken out of the document flow. This means it will position itself in the top-left corner of the document.
- A `fixed` element also loses its default `width` when it's removed from the document flow. We can easily rest it using the `width` property.
- It's also important that we remember the `top` and `left` properties to reinforce the `nav`'s position in the document.

```css
nav {
  background: #eee;
  padding: 40px;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
```

![Fixed](./images/fixed-3.png)

The `nav` looks correct, but it's hiding the rest of the page content! This is also caused by the `fixed` element being removed from the document flow. Simply move the other elements down using `margin` or `padding`.

```css
.container {
    width: 50%;
    text-align: center;
    margin: 100px auto;
}
```

![Fixed](./images/fixed-4.png)

Great! Now we have a fixed `nav` that will stay at the top of the page while the user scrolls.

### z-index

With relative, absolute, and fixed positioning, elements can overlap. We can use the `z-index` property to control which elements are layered on top of each other.

This property takes a number — the higher the number, the closer that element is to the front.

`z-index` functions similarly to  "Bring to front" and "Send to back" in design programs.

Example:

```html
<div id="box1" class="box"></div>
<div id="box2" class="box"></div>
<div id="box3" class="box"></div>
```

```css
* {
  box-sizing: border-box;
}

.box {
  width: 150px;
  height: 150px;
}

#box1 {
  background-color: #E16F20;
  position: relative;
}

#box2 {
  background-color: #FFC84E;
  position: relative;
  top: -50px;
  left: 50px;
}

#box3 {
  background-color: #00465D;
  position: relative;
  top: -100px;
}
```

![](https://git.generalassemb.ly/GA-Cognizant/html-css/blob/master/css-positioning-lesson/images/z-index.png)

## Conclusion (10 min)

Positioning is tricky and, unfortunately, not all that intuitive. 

Let's recap by matching each of these definitions with the correct `position` value:
- Allows you to position the element top, bottom, left, or right, relative to where it would normally occur.
- Removes the element from the document flow and places it exactly where you tell it to be, relative to its parent container.
- Positions an element relative to the browser window. It will not move even if the window is scrolled.

## Resources

- [CSS Diner Game](https://flukeout.github.io/)
- [CSS Position](https://www.youtube.com/watch?v=zH8kjJdvmOs&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=8)
- [CSS Positioning Explained by Building an Ice Cream Sundae](https://medium.freecodecamp.com/css-positioning-explained-by-building-an-ice-cream-sundae-831cb884bfa9?gi=9bc90f76062b)
- [A List Apart &mdash; CSS Positioning 101](http://alistapart.com/article/css-positioning-101)
- [The Lowdown on Absolute vs. Relative Positioning](https://codemyviews.com/blog/the-lowdown-on-absolute-vs-relative-positioning)
