# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Objects Lab

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Objects | Lab | 1:30 | Sonyl Nagale (adapted from wdi-cc) |

---

## Practice

### 1. Syntax

List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! This list is finite.

Example:

```javascript
// {} curly braces
```

---

### 2. Me

1. Create an empty object called `me`.
1. Assign it properties for **name**, **age**, and **email** with corresponding values. Afterward, logging the object should produce the following output:

    ```js
    {
        name: "Kristyn",
        age: 42,
        email: "kristyn@foo.bar"
    }
    ```

1. Using dot notation, log only the **name** property in your object.
1. Using bracket notation, update the value of **age** to be 43 years old.
1. Using dot notation, `console.log()` **age** to verify that it has been updated.
1. Add a property to this object called `"place of residence"` and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
1. Print the value of `"place of residence"`.

---

### 3. Slimer

```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
```

Given the `slimer` object, do the following:

1. `console.log()` the `name`.
1. Change the `type` to `'creature'`.
1. Add a property to the object called `age`, and set its value to `6`.
1. `console.log()` the object to make sure `type` and `age` are what you want them to be.
1. Give the monster a method to introduce himself, interpolating some of his properties. Call the method.

---

## Apply

### 4. Ogres

Let's say you want to create an adventure in which an adventurer and an ogre fight each other.

**Spend a few minutes reading this question a couple of times, thinking and pseudocoding before you actually write the code.**

Write a small program that will simulate a battle between your adventurer and an ogre.
* The battle should play out automatically.  
* The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.  
* The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
* Whenever someone's hitpoints go below zero, the other wins the battle.  

Create **objects** and have them interact. Remember, you are modeling things from real life. Just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

* How would you define your `adventurer`? Your `adventurer` will want a **name** and **hitpoints**. What else would your adventurer need?
* How would you define an `ogre`? Your `ogre` will want **hitpoints**, right?
* How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
* Use `console.log()` to show each attack, how many hitpoints the person being attacked loses, and the updated stats for the `ogre` and `adventurer`. At the end, log the winner.
* You can use a loop to make the game play out. But what kind of loop? How and when will it stop?
* Would it be helpful to create another object to control and keep track of other data that isn't specifically about the `ogre` or the `adventurer`? Such as a `game` object, perhaps?

Doing this efficiently requires planning. If you just started coding immediately without thinking through what you're trying to do and planning accordingly, then you're doing it wrong. Timewise, programming is 75–90% planning and 10–25% actually typing code.

> Believe it or not, spending some time planning out your code structure upfront will save you time in the long run! It's a great habit to form.

---

# Hungry for More?

## Cat Combinator

#### 1. Mama Cat

* Define an object called `cat1` that contains the following properties:
    * Name
    * Breed
    * Age (a number)

* `console.log()` the cat's age.
* `console.log()` the cat's breed.

#### 2. Papa Cat

* Define an object called `cat2` that also contains the properties:
    * Name
    * Breed
    * Age (a number)

#### 3. Combine Cats!

The cats are multiplying!

Write a function, `combineCats()`, that has two parameters: `mama` and `papa`. The function will take two arguments; each a cat object.

* Pass `cat1` and `cat2` as arguments to the `combineCats()` function. The function should `console.log()` them.

Example:

```javascript
combineCats(cat1, cat2);
```

> { name: "Mittens", age: 9, breed: "Tabby" }

> { name: "Fluffy", age: 8, breed: "Siamese" }


**This is to demonstrate that functions can take objects as arguments.**

You could also invoke the `combineCats` function by writing the objects straight into the parentheses:

```javascript
combineCats({ name: "Apollo", age: 5, breed: "Shorthair" }, { name: "Venus", age: 10, breed: "Ragdoll" });
```

* Make it so the `combineCats()` function will return a combination of the two incoming cats.
    * The result should be an object wherein the:
        * `age` is 1.
        * `name` is a concatenation of the parents' names.
            * **Extra challenge**: Alternatively, use the first half of the mother cat's name and the last half of the father cat's name to create more interesting and unique names. For example, "Fluffy" and "Mittens" would have the kitten "Flutens." "Venus" and "Apollo" would have the kitten "Vello." See what other fun names you can come up with!
        * `breed` is each of the parents' breeds with a hyphen in between.
            * **Extra challenge**: If the breed is the same for both parent cats, keep the kitten's breed the same. For example, "Tabby" and "Siamese" parents would make a "Tabby-Siamese" breed, but if both parents are "Tabby" then the kitten should remain as just "Tabby," not "Tabby-Tabby."

Example:

```javascript
console.log(combineCats(cat1, cat2));
```

Result:

```js
// Without extra challenges
{ name: 'FluffyMittens', age: 1, breed: 'Tabby-Siamese'}

// With extra challenges
{ name: 'Flutens', age: 1, breed: 'Tabby-Siamese'}
```

**This demonstrates that a function can return an object.**

In case you needed a visual of what a "Tabby-Siamese" kitten would look like, here you go:

![](https://res.cloudinary.com/briezh/image/upload/v1562098719/cat-cross_fylyj7.jpg)

---

## 4. Cat Brain Bender

If `combineCats()` returns an **object** and if `combineCats()` takes **objects** as **arguments**, then it stands to reason that:

`catCombinator()` can use **itself** as its own argument.

Take a second to stew on that...

What is the result of:

```javascript
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat3, cat4)));
```

Whoa, we have a cat family tree! The `console.log()` above is **two levels** deep of `combineCats()`. Think of `cat1` and `cat2` as one set of grandparents, and `cat3` and `cat4` as the other set of grandparents. The inner calls to `combineCats()` will happen first, and they will resolve to the two parent cats (let's say `cat5` and `cat6`). Then, the outer function runs and creates our newest cat, `cat7`! So, ultimately this...

```javascript
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat3, cat4)));
```

...is equivalent to this:

```javascript
let cat5 = combineCats(cat1, cat2);
let cat6 = combineCats(cat3, cat4);
let cat7 = combineCats(cat5, cat6);
console.log(cat7);
```

So, if you write out this grandparent cat code, what do you get as output? Try running that code using our original four cats as the grandparent cats: Apollo, Venus, Fluffy, and Mittens.

Your parent cats' (`cat5` and `cat6`) names should look something like "Vello" and "Flutens" if you did the extra challenge above, or "FluffyMittens" and "VenusApollo" if you didn't. The final cat (grandchild cat `cat7`) when you `console.log(cat7)` should look like this:

```js
// Without extra challenges
{
    name: 'FluffyMittensVenusApollo',
    age: 1,
    breed: 'Tabby-Siamese-Shorthair-Ragdoll'
}

// With extra challenges
{
    name: 'Flullo',
    age: 1,
    breed: 'Tabby-Siamese-Shorthair-Ragdoll'
}
```

## That's It!

Objects are crazy useful, aren't they? Whew, enough fun with cats for now!

![](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)
