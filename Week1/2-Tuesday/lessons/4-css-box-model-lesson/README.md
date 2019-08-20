# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| CSS Box Model | Lesson | 0:55 | Melissa Arliss (adapted from DEN-SEI) |

## Box Model

### Learning Objectives

*After this lesson, students will be able to:*
- Use the box model to style element borders and structure a webpage.
- Adjust element spacing using padding and margins.
- Describe the difference between block, inline, and inline-block elements.

### Lesson Overview 

| Topic | Type | Timing |
| --- | --- | -- |
| The Box Model | Intro | 10 min |
| The Box Model Components | Code-along | 20 min |
| The Display Property | Code-along | 20 min |
| Conclusion | Recap | 5 min |

## Introduction: Box Model (10 min)

Raise your hand if you've played Tetris before. Think about trying to fit all of those pieces together. For example, 15 pieces have come down, and you just need four blocks in a line to complete some rows, but you keep getting L-shaped pieces. Now you understand the frustration of the CSS box model and positioning in web development.

Webpages, at a base level, are made out of boxes. As we've already seen with HTML, our website is basically a reverse game of Tetris, one in which each rectangular element stacks to the upper-left corner based on how it's shaped. Obviously, this is functional but not organized in the slightest. Today, we're going to look into one of the crucial ways of reshaping these boxes into a more functional layout: the CSS box model. This model will be a necessary cornerstone for almost every project you undertake.

All HTML elements can be considered boxes. Even if you see a circle, it's living within a box. Everything is a box.

We can literally think of HTML elements as a series of moving boxes sitting in an empty living room on your moving day. They have the same properties:

- **Width/height**: How big is your box? This will determine how much of your stuff you can cram into it.
- **Padding**: Let's say you were moving something fragile. You'd probably want to line your box with packing peanuts or something similar to keep the delicate object away from the edges.
- **Content**: All of the stuff you're trying to cram into your box.
- **Border**: Wraps around the edge of the element before the margin starts.
- **Margin**: How far away from other boxes you want this particular box to be? For the sake of our metaphor, imagine that you were creating space between boxes with packing blankets.

The sum of all of these properties looks a little like this:

![Box Model](https://git.generalassemb.ly/GA-Cognizant/html-css/blob/master/css-box-model-lesson/images/box-model.png)

## Code-Along: Box Model Components (20 min)

Let's make some boxes and start practicing. We're going to make a digital living room and arrange our boxes in a way that makes sense to us.

- Create a new directory called `box-model-work`.
- Create an HTML page called `index.html` with an externally linked CSS style sheet called `main.css`.
- Inside your HTML page, create a "livingRoom" `<div>` that holds four `<div>`s within it. Change the background color to whatever color you want your carpet to be.
- Write some content in your boxes to denote what's inside each of them.
- Inside our CSS page, make the main `<div>` a 800px square and have it contain 100px squares that are red, blue, green, and yellow.

Once you're finished, check your work against the following:

<details>
    
<summary>Looking at the HTML...</summary>

```html
<link rel="stylesheet" type="text/css" href="main.css">

<div id="livingRoom">
    <div id="box1">Books</div>
    <div id="box2">Dishes</div>
    <div id="box3">Closet Junk</div>
    <div id="box4">Towels</div>
</div>
```

</details>

<details>
    
<summary>And the CSS...</summary>

```css
#livingRoom {
    height: 800px;
    width: 800px;
    background-color: gray;
}
#box1 {
    background-color: red;
    height: 100px;
    width: 100px;
}
#box2 {
    background-color: blue;
    height: 100px;
    width: 100px;
}
#box3 {
    background-color: green;
    height: 100px;
    width: 100px;
}
#box4 {
    background-color: yellow;
    height: 100px;
    width: 100px;
}
```

</details>

### Box Model Components

Let's go into some more detail and practice with each of the box model's elements.

### Margin

The margin is the space around the element. The larger the margin, the more space between our element and the elements around it. We can adjust the margin to move our HTML elements closer to (or farther from) each other. Adjusting our margins not only moves our element relative to other elements on the page, it also moves it relative to the "walls" of the HTML document.

For instance, if we take an HTML element with a specific width (such as our `<div>` in the editor) and set its margin to `auto`, this tells the document to automatically put equal left and right margins on our element, centering it on the page.

If you want to specify a particular margin, to a particular side, you can do so like this:

```css
div {
  margin-top: /*some value*/
  margin-right: /*some value*/
  margin-bottom: /*some value*/
  margin-left: /*some-value*/
}
```

You can also set an element's margins all at once: You simply start from the top margin and go around clockwise (
from top to right to bottom to left — remember the acronym TRouBLe!). 

For instance:

```css
div {
  margin: 1px 2px 3px 4px;
}
```

You can even do top-bottom and side-side:

```css
div {
  margin: 0 auto;
}
```

#### You Do: Moving Day 

Whatever was in your green box has begun to smell. Adjust its margin so that it's at least 40px away from all other boxes.

### Border

We've talked briefly about borders; the border is the edge of the element. It's what we've been making visible every time we set the `border` property.

The `border` property accepts three values: thickness, pattern, and color.

```css
div {
  border: 5px solid black;
}
```

#### You Do: Moving Day 

Your red box is full of heavy stuff. Make the borders extra thick so that our metaphorical cardboard won't rip.

### Padding and Content

The padding is our packing peanuts... the spacing between the content and the border of the box. Whereas `margin` is typically used to push elements away from each other, `padding` is used to create space between the content and the border. We can adjust `padding` to move the border (or boundaries of our box) closer to (or farther from) the content.

Unlike in real life, adding more padding to your box will increase its size to accommodate the contents of the box (that is, unless you've set an explicit height and width). Then, it will smush the content inside.

`padding` accepts the same value types as `margin`:

```css
div {
  padding: 2px;
}
```

#### You Do: Moving Day 

- Your blue box is full of breakable objects. Make the padding at least 30px, because we don't want anything getting broken!
- Your yellow box is WAY too full. Put at least 175 characters in it. Keep in mind that you might have to make your box bigger.
 
## Code-Along: The Display Property (20 min)

Our boxes are looking just about ready to move. Now, let's learn some CSS tools that can't be used on physical boxes!

In the CSS box model, you can further augment how your boxes are laid out using the `display` property. 

`display` has four main properties:
* A **block** element takes up the full width of its container by default, regardless of the content it contains. It doesn't allow any other elements to sit next to it. It's best for large containers and other sizeable page content.
* An **inline** element takes up only as much space as the content requires and sits in the same line as preceding elements. Margin and padding only affect the left and right sides of the elements. This display style is great for elements that should not disrupt the surrounding content, such as a link in a paragraph of text.
* An **inline-block** element maintains the properties of an inline element, but allows a width and height to be applied to it (as well as side margin/padding). This display style is good for wrapping lists of elements that are still block-like, such as a grid of products on Amazon.
* If you assign **none** as the value of the `display` property, this will make the element and its content disappear from the page entirely!

Here's a visual example:

![Block vs. Inline Example](https://git.generalassemb.ly/GA-Cognizant/html-css/blob/master/css-box-model-lesson/images/boxmodel-block-vs-inline.png)

Just as elements have a default font color or size, certain elements have default `display` properties.

Default **block elements**:
- `<p>`
- `<h1>`
- `<ul>`
- `<div>`
- `<section>`

Default **inline elements**:
- `<span>`
- `<a>`

To illustrate this, create a new HTML file with the following code:

```html
<div class="inline">
    <div class="inline">Content</div>
    <div class="inline">Content</div>
    <div class="inline">Content</div>
</div>

<div class="block">
    <div class="block">Content</div>
    <div class="block">Content</div>
    <div class="block">Content</div>
</div>

<div class="inline-block">
    <div class="inline-block">Content</div>
    <div class="inline-block">Content</div>
    <div class="inline-block">Content</div>
</div>

```

Without any CSS, all nine of these blocks would just stack on top of each other and take up the entire width of the page. Not ideal!

Luckily for us, we can overwrite an element's default `display` property, courtesy of our friend CSS. Here's what that looks like:

```css
.inline {
    display: inline;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}
```

We would end up with something like this:

![display](https://git.generalassemb.ly/GA-Cognizant/html-css/blob/master/css-box-model-lesson/images/display.png)

## Conclusion (5 min)

Let's finish by recapping...
- The difference between inline, block, and in-line block elements.
- The difference between margin and padding.
- If I wanted to move an element toward the center of a page, what property would I use?
- If I wanted to make the element take up more space, what property would I use?

### Resources

- [CSS Box Model](https://www.youtube.com/watch?v=HNgdhp1_kEE&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=6)
- [* { Box-sizing: Border-box } FTW](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

