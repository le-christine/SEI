
| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Pixart | Lab | 1:00 | Rachel Moskowitz (adapted from SEI NYC) |


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Pixart

For this assignment, you'll be creating a JavaScript painting app. When you're done, it should display [this functionality](http://ga-wdi-exercises.github.io/pixart_js/).

Use the starter code and commit each step of the exercise.

## Set Up
1. Fork and clone this repo.
2. Work in small steps and commit frequently.
3. When you're finished, push your code.

### Commit 1

* When you click on the `Set Color` button, it should change the color of the "brush" box to the color specified in the input field.
* You can use `document.querySelector` (or another `document` method) to select the element, then add an event listener.

> **Hint**: You'll notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you may not have used before. Search for "javascript event prevent default" on Google.

### Commit 2

* The same thing should happen when you press the `Enter` key from inside the input field.

### Commit 3

* Create 20 `div`s of the `square` class and append them to the `body` element.
  > **Hint**: Use `.appendChild()`.

### Commit 4

* Add functionality so that, when you click on each square, it changes the color of that individual square to green.
  > **Hint**: Either add the event listener while creating the squares or listen for events on the `body` element.

### Commit 5

* Modify your code so that, when you click on each square, it changes to the color set using your input (instead of green) every time.

### Commit 6

* Modify your code so that you're creating 8,000 `div`s instead of 20.
* Modify the event that changes your box colors from `click` to `mouseover`.
* Paint a picture.

### Bonus

* Add a color swatch. You should have three boxes with the three most recent colors used. When you click on each of those boxes, it should set the current brush color back to that color.
