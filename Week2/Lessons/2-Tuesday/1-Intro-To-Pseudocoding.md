
| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Intro to Pseudocoding | Lesson | 1:00 | Rachel Moskowitz (adapted from SEI) |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to Pseudocoding

## Learning Objectives

At the end of this lesson, students will be able to:
- Describe the role of pseudocode in development.
- List the steps for problem-solving.
- Create pseudocode to describe a basic problem.

## What Is Pseudocode? (5 min)

Pseudocode is a way of describing the solution to a problem without writing code in full.
* Writing pseudocode forces you to think critically about the problem and break it down into smaller steps.
* It's usually written using a combination of English and logic. As a result, it's easy to read.
* It might display some features of the final product, such as indentation and code blocks.

Pseudocode should describe the entire logic of a problem, so programming becomes a task of translating pseudocode line by line into actual code.

## How to Make a Peanut Butter and Jelly (PB&J) Sandwich (10 min)

We're going to make a PB&J sandwich — for real.

In today's demo, the supporting instructor will act like a computer. You'll be tasked with guiding the instructor through the process of making the sandwich. Keep in mind that your instructions will need to be explicit — otherwise, things could get messy.

<details>
<summary>Here's one approach to solving our problem.</summary>

```
PROGRAM MakePB&JSandwich:
Grab a paper plate;
Open bread container;
Grab bread package;
Untwist bread package;
Open bread package and remove two slices;
Place slices on paper plate;
Grab a plastic knife;
Grab peanut butter jar;
Open peanut butter jar;
Use knife to scoop out peanut butter;
Apply peanut butter to one slice of bread;
Spread peanut butter on slice;
Place knife on plate;
Close peanut butter jar;
Grab jelly bottle;
Open jelly bottle;
Squeeze jelly onto second bread slice;
Close jelly bottle;
Place down jelly bottle;
Pick up knife;
Spread jelly on slice;
Place knife on plate;
Bring two slices of bread together;
Pick up knife;
Cut slices in half down the middle;
Throw knife in the trash;
Pick up one half of sandwich;
Enjoy;
END.
```

> This example's sequence is thorough. However, we're still assuming that our utensils or ingredients already exist. What if we're out of plates? Will we grab a napkin instead to place our sandwich on? What if we're out of jelly? Will we throw the sandwich away or eat it with just peanut butter?
</details>

## Approaching a Coding Problem (15 min)

Computers aren't smart. We need to give them step-by-step instructions to account for conditions. They can't make changes without being explicitly told through programming. Programming is a series of tasks that can be completed only if a certain number of conditions are met.

Computers can't adapt, but we can. Your first pass at pseudocode probably won't cover everything, but once you know more, you may come back to update and refactor your pseudocode.

Pseudocode isn't just about writing down the steps you already know — it's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to define it.

#### Identify the Problem

- What exactly are we trying to solve?
- What are we delivering?

#### Conceptualize

- Look at the big picture.
- Avoid details.
- Whiteboards, pen, and paper can be useful tools here.

#### Break It Down

- Break down the conceptual models into concrete steps or actionable items.
- Identify risks (e.g., gaps in knowledge and technology).

#### Start Small, Stay Small

Write code using these concrete steps:
- Verify that each step achieves what you want before continuing.
- If you do too much at once and things break — which they always do — you won't know what's causing the problem.
- Humans thrive on easy wins and forward progress. Use this to your advantage.


### Where Does Pseudocode Fit In?

#### Break It Down

This process is iterative. We keep circling around and repeating the earlier steps, just at a different level.

When we first approach a problem, we see the big picture. Break it down into big steps first. Then, take one of those steps and break it down again into smaller steps.

Write pseudocode to help illustrate the problem. Pseudocoding proves that we've **identified** the problem, understood it **conceptually**, and **broken it down** into **small steps** we can follow.

#### Example 1.1

```
PROGRAM IsEvenOrOdd:
  var num = number;
  IF (num % 2 === 0)
    THEN Print "even";
    ELSE Print "odd";
  ENDIF;
END.
```

<details>
<summary>What do we think?</summary>

This is not a great example. Here, we're using `var` in our pseudocode when it should read in plain English. Also, we should not be using the JavaScript syntax `===` in our conditional. Would a non-programmer know that `num % 2 === 0` indicates an even number?

</details>

#### Example 1.2

```
PROGRAM IsEvenOrOdd:
  Read number;
  IF (number divided by two has no remainder)
      THEN Print the number is even;
      ELSE Print the number is odd;
  ENDIF;
END.
```

<details>
<summary>What do we think?</summary>

This is better: It's closer to English and clearly states what we're trying to achieve and how without getting bogged down in the minutiae of code. Even someone who doesn't code can help us check our logic. Is any number that can be divided by two cleanly — without leaving a remainder — even? Is anything else odd?

</details>


## You Do: Pseudocode Concentration (15 min)

Take 10 minutes with a partner to create a pseudocode of the game Concentration.

The user should see a grid of cards. Clicking a card reveals it and allows the user to click another card. If they match, the cards stay up and, if not, they flip back over. Users get a point for every pair they flip. The game ends after one minute or when all of the cards have been matched.

When you're done, we'll spend five minutes sharing approaches as a class.


## Conclusion

1. What are some helpful steps for solving problems?
2. What does pseudocode help us do?
3. Do we only perform pseudocoding at the start of a project?

## Resources

- [Introduction to Pseudocode](http://www.slideshare.net/DamianGordon1/pseudocode-10373156)
