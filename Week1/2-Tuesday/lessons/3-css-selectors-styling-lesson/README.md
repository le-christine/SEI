![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| CSS Selectors and Styling | Lesson | 1:30 | Melissa Arliss and Sonyl Nagale (adapted from SF-SEI) |

# CSS Selector Basics

### Objectives

*After this lesson, students will be able to:*

- Style HTML elements on a webpage.
- Write CSS rules that target the right elements with the right properties.
- Apply best practices for specificity and cascading.
- Apply styles to specific elements using classes and IDs.

### Lesson Overview 

| Topic | Type | Timing |
| --- | --- | -- |
| What Is CSS? | Intro | 5 min |
| Let's Write Some CSS | Code-along | 20 min |
| Classes vs. IDs | Code-along | 15 min |
| Styling Using Classes and IDs | Independent practice | 10 min |
| Multiple Classes and Elements | Code-along | 10 min |
| Specificity in CSS | Intro | 10 min |
| Using CSS to Select Class and ID Attributes | Independent practice | 15 min |
| Conclusion | Recap | 5 min |

## What Is CSS? (5 min)

If HTML tells the browser what to display, CSS tells the browser how to display it.

CSS stands for:

- Cascading
- Style
- Sheet

It provides the browser with precise instructions on how to style each element we want displayed on the page and can affect the text format (such as font, size, and color), the size and position of various objects on the page, colors, spatial layouts, etc. There are literally hundreds of different properties we can use to style HTML elements on a webpage.

## Code-Along: Let's Write Some CSS! (20 min)

Create a new folder with a HTML page:

```bash

$ mkdir css-basics
$ cd css-basics
$ touch index.html

```

First, add a basic HTML structure to your `index.html` file:

```html

 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   </head>
 <body>
 	  <p>This is a paragraph element.</p>
    <div>This is a DIV.</div>
    <div>This is another DIV.</div>
 </body>
 </html>
```

### Adding CSS

There are several ways to add CSS to style your HTML. We're going to be using "external style sheets," in a file outside your HTML file. To link the style sheet to the HTML file, we need to add a self-closing `<link>` tag inside the `<head>` tags, indicating the type of relations (`rel="stylesheet"`) and the file path. But first, let's create a CSS file within our CSS directory.

```bash

mkdir css
touch css/style.css

```

Then, we can add the file path (`href="style.css"`) to our HTML file:

```html
 <!DOCTYPE>
 <html>
   <head>
	 <title>Intro to CSS</title>
   <link rel="stylesheet" href="style.css">
   </head>
 <body>
 </body>
 </html>
```

### Our First Rule

We build our CSS with a selector: usually the name of the HTML tag, followed by a "property" (what you want to style) and a value (how you're styling it):

```css
selector {
  property_1: value_1;
  property_2: value_2;
}
```

Don't forget the curly braces or the semi-colon after the value!

With that in mind, let's add some rules to `style.css`.

```css
body {
  background: red;
}

p {
  color: orange;
}

div {

    border-width: 1px;
    border-style: solid;
    border-color: black;

}
```

Our body rule still applies, and these new rules will change the color of all paragraph tags to have the font color "orange" and add a 1px black border to each "DIV" on the page, as the selector targets the "div" elements. Refresh your browser and check it out.

## Demo: Classes vs. IDs (15 min)

### The Class Selector

The class selector finds elements with a specific class; as an attribute, a class allows us to target several elements that may share similarities. Note that:
- Classes are **NOT** unique.
- You can use the same class on multiple elements.
- You can use multiple classes on the same element.
- You can select a class using `.class-name {}` (a `.` / period before the class name).

Let's add some HTML to our `index.html` and then style those elements by selecting their associated classes:

```html
<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element.</p>

    <div>This is a DIV.</div>
    <div>This is another DIV.</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

  </body>

</html>
```

Now for the style:

```css
body {
  background: red;
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}
```

If I refresh my browser, I see the updates. The browser selects all elements on the page with the `comments` class and alters their font weight and color.

### The ID Selector

The ID selector uses the ID attribute of an HTML tag to find one specific element. We can give any name we want to our ID attribute, besides the obvious reserved words, such as tag names, etc.

- An ID is **unique** within a page.
- You should use the ID selector when you want to find a single, unique element.
- In the CSS document, you use a hashtag (`#`) to denote an ID.

How about we try it out? Altering the HTML:

```html

<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element.</p>

    <div>This is a DIV.</div>
    <div>This is another DIV.</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin.
    </section>

  </body>

</html>

```

And now the style:

```css

body {
  background: red;
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}
```

Sweet!

> **Instructor Note**: Explain what happens when more than one element is referenced with the same ID and how we'll get into specificity later.

## Independent Practice: Styling Using Classes and IDs (10 min)

Using what we've done together, see how far you can get with these exercises in 10 minutes:

- Make an unordered HTML list of the following animals:  
	- Mouse  
	- Canary  
	- Penguin  
	- Salmon  
	- Cat  
	- Goldfish  
	- Dog  
	- Sheep  
	- Parakeet  
	- Tuna  

- Add the following background colors using CSS classes:
    - All mammals: `lavenderBlush`
    - All birds: `lightGray`
    - All fish: `lightYellow`

- Apply the following text colors to the list items using IDs:
    - Mouse: `gray`
    - Canary: `orangeRed`
    - Penguin: `black`
    - Salmon: `salmon`
    - Cat: `sienna`
    - Goldfish: `gold`
    - Dog: `tan`
    - Sheep: `steelBlue`
    - Parakeet: `lime`
    - Tuna: `purple`

## Code-Along: Multiple Classes and Elements (10 min)

Just as you can give an element a class and an ID, you can also chain classes together, applying several classes to one element:

In our original file, let's add:

```html

<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element.</p>

    <div>This is a DIV.</div>
    <div>This is another DIV.</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin.
    </section>

     <p class="first second">Multiple classes</p>

  </body>

</html>

```

Then, create two classes:

```css
body {
  background: red;
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}

.first {
  font-size: 40px;
}

.second {
  color: red;
}
```

We can even use classes and IDs with elements to select and style HTML. Let's add a short unordered list:

```html
<!DOCTYPE>
<html>
  <head>
  <title>Intro to CSS</title>
  <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <p>This is a paragraph element.</p>

    <div>This is a DIV.</div>
    <div>This is another DIV.</div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <div class="comments">
    	Hello
    </div>

    <section id="dolphin">
    	I am a dolphin.
    </section>

     <p class="first second">Multiple classes</p>

     <ul>
      <li class="why" >Why a dolphin?</li>
      <li class="why" id="not">Why not?</li>
     </ul>

  </body>

</html>
```

Imagine we wanted a particular style to apply to all of the elements in the list, but wanted other particular styles to apply to each item individually. This is definitely doable. Let's take a look at our CSS:

```css
body {
  background: red;
}

p {
  color: orange;
}

div {
  border: 1px solid black;
}

.comments {
	font-weight: bold;
	color: #64FE2E; /* green */
}

#dolphin {
	font-style: italic;
	color: #0040FF; /*blue*/
}

.first {
  font-size: 40px;
}

.second {
  color: red;
}

li {
  text-align: center
}

li.why {
  font-family: sans-serif;
}

li#not {
  font-family: serif;
}
```

Now all of our list items are centered, but the top item has a different font than the bottom.

As we can imagine, we could go on forever like this. The possibilities are endless. There are many properties and values to work with and many ways to target specific elements. Two pages could have the same HTML content and yet look dramatically different because of different CSS styles.

## Intro: Specificity in CSS (10 min)

One of the most important concepts with CSS is specificity. Imagine you select an element by *its class* and give it some style. Then, on the next line, you select the same element by *its element name and ID*. How does the browser know what style to apply? Well, every element gets a score, and it's this score that dictates what CSS property is applied. You can calculate CSS specificity with the CSS Specificity Calculator:

[Specificity Calculator](http://specificity.keegan.st/)

Every selector has its place in the specificity hierarchy, and if two selectors apply to the same element, the one with higher specificity wins. 

A few rules to think about:

- If two selectors apply to the same element, the one with higher specificity wins.
- When selectors have an equal specificity value, the latest rule is the one that counts.
- When selectors have an unequal specificity value, the more specific rule is the one that counts.
- Rules with more specific selectors have a greater specificity.
- The last rule defined overrides any previous conflicting rules.
- The embedded style sheet has a greater specificity than other rules.
- ID selectors have a higher specificity than attribute selectors.
- You should always try to use IDs to increase specificity.
- A class selector beats any number of element selectors.

_Taken from SmashingMagazine.com_

## Independent Practice: Using CSS to Select Class and ID Attributes (10 min)

Return to your code from the previous independent practice problem and continue to work through these exercises:

- Make the mammals bold.
- Make the birds italic.
- Make the fish underlined.

- Create a new unordered list; add a list item for each of the following plants:

    - Dogwood Tree
    - Oak Tree
    - Saguaro
    - Kelp
    - Venus Fly Trap
    - Ent

- Give all of the `ul`s a border with a width of `3px`, a color of `plum`, and a style of `dotted`. Also, give them a border radius of `5px`.
- Give all of the `li`s a top border of `3px`, a color of `seagreen`, and a style of `solid`.

## Conclusion (5 min)

CSS can be really fun or a total nightmare. You have to remember a few rules, but once you've memorized those, it's great to see your webpage come to life as you imagined.

Let's recap. After this lesson, you can::
- Describe the differences between classes and IDs.
- Identify the popular CSS properties we used today.

