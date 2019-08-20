![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Command Line Lab | Lab | 1.5 hrs | Melissa Arliss (adapted from SEI-CC) |



## Command Line Lab: Introduction

> **Instructor Note**: This can be a pair programming activity or done independently. (Pair programming is preferable.)

Developing web apps requires a degree of comfort navigating and interacting with your operating system through the command line. Later in the course, you'll be writing Java and JavaScript programs and running them from the command line. For now, we'll be practicing creating, modifying, and moving files and directories (in the UNIX command-line environment, we refer to folders as **directories**) in your terminal to get you practicing UNIX commands.

So, close Finder now and don't open it again. If you want to use Finder to organize photos from your family holiday or summer vacation, then that's fine. But never use it for anything related to web development. As developers, we use the UNIX command line almost exclusively for managing files and folde — I mean **directories**.  

For your first lab, you'll create files and directories to organize your favorite books, movies, and music. Then, you'll reorganize them.

The Additional Resources section at the end of this lab has some links to UNIX command cheat sheets, and you could probably find dozens of other useful ones through a Google search.

### Important: "Man(ual) Pages" 

Nearly every UNIX command has what's called a "[man page](https://en.wikipedia.org/wiki/Man_page)" (short for "manual page"). You can get extensive info about how any UNIX command works by typing `man`, followed by the name of the program.

For example...

```bash
$ man ls
```

...will give you exhaustive information about how the `ls` command works and the different flags or options you can use to customize the output. It might seem like too much information at first, but get in the habit of using `man` pages now and you'll learn to love them.

Hit the `Q` key to exit the `man` page viewer.

## Exercise

#### Requirements

- In your directory for today, create a directory called `command-line-lab`. Inside `command-line-lab`, create a directory called `my-favorite-things`. You'll use that directory to complete the exercises below.

- Organize your favorite books:
  - In the `my-favorite-things` directory, create a directory called `books`.
  - Create a directory in `books` named after your favorite author (e.g., `mark_twain` or `john-grisham`). Avoid spaces when naming your directory.
  - Create files named after some of the author's books in the author's directory.
  - Open the `books` directory in Sublime.
  - Edit each book file to contain a brief description of the book.

- Organize your favorite movies:
  - In the `my-favorite-things` directory, create a directory called `movies`.
  - Create a directory in `movies` named after your favorite actor.
  - Create a directory in that actor directory named after the actor's breakthrough movie.
  - Go back to the `movies` directory and create a text file named after the actor's character in their breakthrough movie.
  - Move the text file into the directory for that actor.
  - Look back at Sublime and edit that text file to include a description of the actor's role in the movie.

- Organize your favorite music:
  - In the `my-favorite-things` directory, create a directory called `music`.
  - Go into the `music` directory.
  - Create a directory called `disco`.
  - Create a text file in `disco` called `ymca`.
  - Delete the `disco` directory.
  - Create a directory called `creed`.
  - Delete the `creed` directory.
  - Create directories called `one-direction`, `the-strokes`, and `rihanna`.
  - Create a text file in `one-direction` called `what-makes-you-beautiful.txt`.
  - From within `one-direction`, copy (**not move**) `what-makes-you-beautiful.txt` into `the-strokes` and `rihanna`. 
  - Rename those files with songs by those artists.

- Reorganize everything:
  - In the `my-favorite-things` directory, create a directory called `media`.
  - Move `books`, `movies`, and `music` into the `media` directory.

- Organize the top music, movies, and books of 2019:
  - Go to the `my-favorite-things` directory and duplicate (make a copy of) the `media` directory. Your copy should be named `2019-media`.
  - In the `2019-media` directory, rename each directory to have `2019-` before the title.
  - Delete the contents of `2019-music`, `2019-movies`, and `2019-books`.
  - Create a file called `top-ten-movies.html` in `2019-movies`.
  - Create a file called `top-ten-songs.html` in `2019-music`.
  - Create a file called `top-ten-books.html` in `2019-books`.
  - Create an ordered list using HTML of the top 10 movies, songs, and books in each of the appropriate files.

**Bonus**

- Use `man` pages, Google, and the Additional rResources at the end of this lab to figure out how to do the following:
  - Find commands that let you look at the top or bottom 10 lines of each file.
  - Figure out how to search through a file from the command line — without opening the file — for a string of text.

#### Starter Code

No starter code needed for this lab.

#### Deliverable

Be sure to open up your `my-favorite-things` directory in Sublime so you can track your progress. Here's a preview of what your files and directories should look like after each big step in the exercise.

- After "Organize your favorite books:"

![](https://i.imgur.com/ySAjOeO.png)

- After "Organize your favorite movies:"

![](https://i.imgur.com/h8WcyVE.png)

- After "Organize your favorite music:"

![](https://i.imgur.com/T4E3eAg.png)

- After "Reorganize everything:"

![](https://i.imgur.com/GEoIps9.png)

- After "Organize the top music, movies, and books of 2018:"

![](https://i.imgur.com/EM2m8mL.png)


## Additional Resources

- **`man` pages** ([see "RTFM"](https://en.wikipedia.org/wiki/RTFM)): The entire development community prizes self-reliance as a virtue. To succeed, developers need persistence and drive to solve problems on their own. We'll guide you, keep an eye on you, and answer questions, but as we do so, we'll focus on instilling and enhancing self-reliance in you throughout the entire course.
- A list of [CLI shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871).
- An awesome UNIX command [cheat sheet](https://github.com/veltman/clmystery/blob/master/cheatsheet.md).

