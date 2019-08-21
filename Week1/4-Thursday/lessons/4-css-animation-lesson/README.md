| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| CSS Animations | Lesson | 1:00 | Sonyl Nagale (adapted SF-SEI) |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) CSS Animations

## Learning Objectives

*After this lesson, students will be able to:*
- Use properties such as `transition` and `transform` to change element properties.
- List the types of properties that can and can't be animated.
- Identify and describe the purpose of animation properties.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Introduction  | CSS Animations and Vocabulary |
| 15 min | Demo | Transitions Demo
| 35 min | Independent Practice  | Research Transforms, Transitions, and Animations |
| 5 min  | Conclusion  | Review/Recap |

---

## Overview (5 min)

Today we'll cover three major topics, each somewhat related:

* **CSS transforms** are a set of CSS properties that take an element and transform its shape (e.g., rotating it, scaling it, skewing it, etc.).

* **CSS transitions** let us tell the browser how to change a property over time. For example, if the height of an element changes (due to a `:hover` selector, for example), we can tell the browser to change the height gradually over one second.

* **CSS animations** are similar to transitions, in that they make properties change over time, but they give us more control over how those changes occur. For example, we have more control over how the animation repeats or changes between multiple values at once, etc.

In general, it's a good idea to check [Can I Use](http://caniuse.com/) to see if the properties you want to use support most browsers. For CSS animations, you should use prefixes to ensure support for Safari and Internet Explorer, among others. The easiest way to do this is with [-prefix-free](http://leaverou.github.io/prefixfree/).

---

## Transitions Demo (15 min)

Let's look at an example of what's possible with transitions!

Review the following HTML and CSS, which renders as shown in the mockup below. That is one crazy cat:

```html
<body>
  <div class="party">
    <p>Party div!!!</p>
    <img src="images/giphy.gif">
  </div>
</body>
```

```css
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 30px;
}

div {
  border: none;
  outline: none;
  background-color: #F78FA7;
  padding: 50px 20px;
  border-radius: 4px;
  margin-left: 0;
}
```

![transition-mockup-1](images/transition-mockup-1.png)

We know what we want the page to look like when the user hovers, so we can code that accordingly using the `hover` pseudo-class:

```css
div:hover {
  background-color: yellow;
  margin-left: 100px;
}
```

![transition-mockup-2](images/transition-mockup-2.png)

#### So, Where Do We Apply the `transition` CSS?

The key is to add it to `div` and not `div:hover`. That might seem counterintuitive: Don't we want the animation to happen when the user hovers? We do, but let's break down the order of events:

1. Our `<div>` is styled with the `div{ }` rule.
2. The user hovers on `<div>`.
3. `div:hover{}` styles are applied.

We can't put `transition` on `div:hover` because, when those styles are applied, the hover has *already happened*. We put the animation styles in the non-hover state of the object to *prepare* for a hover. Here's the complete CSS for the `div`:

```css
  div {
    border: none;
    outline: none;
    background-color: #F78FA7;
    padding: 50px 20px;
    border-radius: 4px;
    margin-left: 0;
    transition: all 2s ease-in-out;
  }

  div:hover {
    background-color: yellow;
    margin-left: 100px;
  }
```

The `transition: all 2s ease-in-out;` declaration contains the following values:
- `all` means we want a transition applied to all shared properties of `div{ }` and `div:hover{ }`.
- `2s` is the total time, in seconds, it takes for the animation to occur (this can be a decimal).
- `ease-in-out` is the animation style — this means the transition will happen when the user hovers on the `div` and hovers away from the `div`.

----

## Independent Research: Transforms, Transitions, and Animations (35 min)

Break into five groups. Together, you'll have 10 minutes to prepare a short explanation/demo of your assigned topic. 

Your demos should take no longer than five minutes and include:
- A definition of the property.
- Some code to demonstrate how it works.

| Group | Topic
| --- | --- |
| 1 | [CSS Transforms (No Animation)](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) |
| 2 | [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) |
| 3 | [CSS Animations (Basic Keyframes and Syntax)](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) |
| 4 | [CSS Animations (Timing Functions)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) |
| 5 | [CSS Animations (Iterations/Repeats/Direction)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) |

---

## Conclusion (5 min)

CSS animations are easy and mostly compatible, so they're often a good choice for basic animation needs. 

For anything more complex, such as animation that depends on user input, you'll need to use JavaScript. For that, there are handy libraries, including jQuery UI and [GSAP (Greensock Animation Platform)](http://greensock.com/gsap).


