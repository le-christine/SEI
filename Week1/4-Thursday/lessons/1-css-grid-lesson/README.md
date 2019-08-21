![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| CSS Grid | Lesson | 0:45 | Sonyl Nagale (adapted SF-SEI) |

# CSS Grid

### Learning Objectives

- Define the CSS grid.
- Use CSS grid to create a page layout.

### Lesson Overview 

| Topic | Type | Timing |
| --- | --- | -- |
| CSS-Grid Layout | Intro | 10 min |
| Implementing CSS Grid | Code-along | 30 min |
| Conclusion | Recap | 5 min |

## What Is CSS Grid Layout? (10 min)

From the [www.w3.org](https://www.w3.org/TR/css-grid-1/) website...

"Grid layout is a new layout model for CSS that has powerful abilities to control the sizing and positioning of boxes and their contents. Unlike flexible box layout, which is single-axis–oriented, grid layout is optimized for two-dimensional layouts: those in which alignment of content is desired in both dimensions."

OK, can someone summarize that for me in plain English?

With grid layout, you can divide up the screen into `rows` and `columns` of sizes of your choosing and then specify how many rows and columns each `cell` takes up. Sizings can be fixed or dynamic, allowing you to create modern-looking, versatile websites.  

*Example of **flexbox** layout:*

![flex layout example](./images/flex-layout-ex.png)

*Example of **grid** layout:*

![grid layout example](./images/grid-layout-ex.png)

> Notice how the grid layout allows the cell on the right to take up multiple rows.  

Let's take a few minutes to explore this [web app](https://www.inprnt.com/discover/) built with the grid layout.

> Fun fact: This site was built by a former GA student using CSS grid layout, flexbox, and React. This could be you one day! 

## Code-Along: Implementing CSS Grid (30 min)

There are a few ways to implement a CSS grid. I'll show you the steps of how I like to do it.  

1. To start, you must have a *container* (or *parent*) element, with at least one *nested* (or *child*) element inside.

```html
<div class="parent">
  <div class="child-one">1</div>
  <div class="child-two">2</div>
  <div class="child-three">3</div>
</div>
```

2. On the container, specify that you are using `display: grid` and what your ***template*** will look like; specifically, your ***rows*** and ***columns***. Here's an example:

```css
.parent {
  display: grid;
  grid-template-rows: 100px 200px 300px;
  grid-template-columns: 100px 1fr 2fr 100px;
}
```

`fr` represents `fraction`; it's a unit that will evenly span the remainder of the space.

Here we have specified ***three rows***, taking up 100, 200, and 300 pixels, respectively. We also specified ***four columns***, giving us a total of ***12 cells***; `grid-template` also takes other units such as `%`, `rem`, and `auto`. For now, we will focus on `px` and `fr` units. You can also use `repeat` to specify multiple rows or columns of one size, like this: `repeat(5, 1fr)`.

3. With the *child* elements, you can specify *where* the *cells* are located and the *size* you want them to be. I like to follow this pattern:

```css
selector {
  grid-row: where-to-start / span size;
}
```
> The same would work for `grid-column`.

So, something like this on a *child* element:

```css
.child {
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
}
```

This element takes up one row, starting at Row 1, and two columns, starting at Column 1.

We could also write `grid-row: 1;` for short, if your element only spans one row.

### We Do: Griddle Me This

Now, let's follow along and try to make our *Holy Grail* website design using the grid layout. We will need a header, footer, two side columns, and a main section. Grab the `starter-code` for this lesson.

Take a moment to look over the files.  

Let's add our `grid-template` code to our parent element:  

```css
  body {
    display: grid;
    grid-template-rows: 80px 1fr 80px;
    grid-template-columns: 100px 1fr 100px;
  }
```

Let's figure out how to format our `header`. We want the header to take up one row and three columns. Let's give it some color, too:  

```css
header {
  grid-row: 1;
  grid-column: 1 / span 3;
  background: steelblue;
}
```

Now onto our left column: That will only take up one column and one row, starting at Row 2:

```css
.left {
  grid-row: 2;
  grid-column: 1;
  background: lightseagreen;
}
```

The right column can be positioned in a very similar fashion:  

```css
  .right {
    grid-row: 2;
    grid-column: 3;
    background: mistyrose;
  }
```

The main section is the largest section (except on tiny screens) but really only takes up one row and one column:
```css
  main {
    grid-row: 2;
    grid-column: 2;
    background: lemonchiffon;
  }
```

Lastly, our footer will take up the entire bottom row, spanning three columns:

```css
  footer {
    grid-row: 3;
    grid-column: 1 / span 3;
    background: rebeccapurple;
  }
```

----

## Conclusion (5 min)

Let's recap!

- Why is alignment so important with modern web development?
- What problems do flexbox and CSS grid solve?
- Where do we put `display: flex` or `display: grid`?
- With flexbox, what are some properties that `justify-content` can take?
- Explain how to place an item into a grid container.

---

## Resources

* [CSS Grid Garden](http://cssgridgarden.com/)
* [The CSS `grid` Module](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Wes Bos Teaches CSS Grid](http://wesbos.com/announcing-my-css-grid-course/)
* [Learn CSS Grid](http://learncssgrid.com/)

