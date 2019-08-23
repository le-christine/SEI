![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Working With the Command Line | Lesson | 1:30 | Melissa Arliss (adapted from SEI-CC) |


## Working With the Command Line

### Lesson Objectives
* Download and install the necessary software.
* Use the terminal app to navigate files and folders.
* Create files and folders on the command line.
* Navigate files and folders using relative paths on the command line.
* Print "Hello, World" to the console.
* Build, open, and use a file structure in Sublime Text from the command line.

## Software
* [Google Chrome](https://www.google.com/chrome/)
* [Sublime Text](https://www.sublimetext.com/3)

## What Is a GUI (Pronounced "Gooey")? (5 min)

* DOS, UNIX, Linux, Commodore 64.
* Windows, macOS, iOS, Android, and more.
* Computers didn't previously have a graphical user interface (GUI).
* Everyone used a command-line interface (CLI).

![](https://upload.wikimedia.org/wikipedia/commons/9/94/FreeDOS_Beta_9_pre-release5_%28command_line_interface%29_on_Bochs_sshot20040912.png)

## Command-Line Interface

* The command line still exists, even though most computer users don't see it.
* We use the command line to:
    * Manage our files and tell our computer how to run our programs.
    * Speed up our development process.
    * Help us take ownership of our computer at a deeper level.
* Improper use of the command line could lead to serious damage.
    
## Terminal

* Terminal gives us access to the command-line interface of the operating system.
* It's one of the most powerful software programs on your computer.
* Think of it as the central hub of your development process.
* You can give your computer direct, text-based instructions.
* For now, we'll use it to navigate through files and folders (or directories) in our computer.

🔵 **Open Terminal**
* Hit `⌘ (command) + space` or open Spotlight.
* Type "Terminal".
* Hit `enter`.
* Keep it locked in your dock. Right click on the icon, highlight options, and check "Keep in Dock."

When the terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde symbol (`~`).

🔵 **Terminal Preferences**

You can change the color and font size of your terminal app to make the output easier to read.

> Terminal > Preferences > Pro

In Finder or Explorer, we can navigate through our computer's folders and files. This is helpful for organizing photos or documents. Folders on your computer are like physical folders — they can contain files and more folders. But when we're working with a (UNIX) terminal, we call them directories — they're equivalent to folders in a GUI.

Let's close our Finder or Explorer windows now, and we'll almost completely stop using them for the rest of the course.

#### What Is a Shell?

A shell is a type of command-line program that contains a simple, text-based user interface enabling us to access all of an operating system's services. It's a program that accepts text as input and translates that text into the appropriate functions you want your computer to run.

_Just for fun: [Type like a hacker](http://hackertyper.com/)._

## Bash

[Bash](https://www.gnu.org/software/bash/) is a type of shell. It understands commands written in the Bash scripting language. The commands are abbreviations of English words, or acronyms.

* The `pwd` command prints the current working directory. It shows you the `path` of your current location in the file system. It's like sending up a flare or homing beacon, where you can see how far you've "traveled" from the root directory.
* The `ls` command lists the contents of the current directory. You can see:
    * The immediate child directories (the directories inside this directory).
    * The files and directories that are not hidden.

#### Flags

Commands can take `flags` denoted by a dash `-`:
* `ls -a` lists content, including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.
* `ls -l` lists content using a long list format.

##### Combining Flags

```
- `ls -la`
- `ls -lha`
```

There are also double-dash flags or options on most commands. For example, many commands have the `--help` option: `nano --help`.

Directories (folders) can have directories within them, and there can be directories inside those directories ad infinitum. This creates a tree structure in which directories can have many children with many different branches.

## Changing Directories

We can navigate to other directories relative to the current working directory.
* `cd some_directory`
    * Navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
* `cd ..`
    * Navigates into the parent of the current directory.
    * `..` is shorthand for parent.
* `cd` will take you back home.

##### More Terminal Shortcuts

* Tab completion: autocompletes (case-sensitive).
* Up or down arrow: cycle command history.

🔵 **Code-Along (2 min)**

* From the home directory, navigate to `Library`.
* Pick a directory and navigate to the end with `cd directory_name`. Remember to autocomplete.
* Then, navigate back up with `cd ..`.
* Navigate to `Library`.
* Pick a directory and navigate to the end.
* Navigate back home with `cd`.

## Making Directories and Files

`mkdir` makes a directory.

Example:
* `mkdir directory_name` makes a directory called `'directory_name'`.

`touch` creates an empty file. A file will typically have a file extension such as `.txt`, whereas a directory will not.

Example:
* `touch file.txt` makes a `.txt` file.

## Success Tip: Staying Organized Throughout the Course

Get organized, starting today.

* Inside your home folder, create a folder where everything from the course will live, and always store everything there. For example:
    * `mkdir dev-academy` (the name of our course)
    * `cd dev-academy`
* In that folder, create a new folder for each day, where the name includes the date and topics for the day, and navigate into it. For example:
    * `mkdir 8_26_2019_terminal_loops`
    * `cd 8_26_2019_terminal_loops`
* In that folder, make a new folder for each lesson, lab, or homework, and give that folder a descriptive name. For example:
    * `mkdir terminal_practice`
    * `cd terminal_practice`

🔵 **Code-Along (4 min)**

* Navigate to today's folder, then to the `terminal_practice` folder you just created.
* Create a directory called `exercise`.
* Go into the directory with autocomplete.
* Make two directories, `example1` and `example2`, and list them.
* Go into `example1` with autocomplete.
* Make two directories, `example3` and `example4`, on a single line. 
* Go into `example3` and make a file, `file1.txt`.
* List the file.
* Navigate back to `exercise`.

🔵 **Activity (10 min)**

**Construct a Labyrinth**

Using what you know about navigating directories and creating files and folders, construct a "labyrinth" in today's folder.

There are a few layers to this exercise. Precision is important. Be patient.
* Make sure you're in the correct directory when you create another directory or file.
* Make sure you use `touch` to make files and `mkdir` to make directories. Files and directories are two different things.
* Navigate to today's folder:
    * `mkdir labyrinth`
    * `cd labyrinth`
* Make a directory structure like this:

![](https://i.imgur.com/V1zaeBT.png)

* `parlor` and `stairway` are child directories of the `labyrinth` directory.
* `sarah_williams.txt` is a file inside the `ballroom` directory.
* If you make a mistake, don't worry. Just keep adding the right stuff to the right place.

## Navigation: Relative Paths

Chain more directories to the current path with the `/` separator.

* Go down the chain into child directories:
    * `cd parent_directory`
    * `cd parent_directory/child_directory`
    * `cd parent_directory/child_directory/grandchild_directory`
* Go up the chain into parent directories:
    * `cd ..`
    * `cd ../..`
    * `cd ../../..`
* Go sideways into a sibling directory by first going up, then down:
    * `cd ../sibling_directory`
* Go into an aunt or uncle directory by first going up to the parent, then the grandparent, then down again to another branch:
    * `cd ../../auntie_directory`

🔵 **Code-Along (2 min)**

**Navigate the Labyrinth**

* Navigate to the `labyrinth` root directory.
* From the `labyrinth` root directory, navigate to `stairway`.
* From `stairway`, navigate to `parlor`.
* From `parlor`, navigate to `dining_room`.
* From `dining_room`, navigate to `escher_room`.
* From `escher_room`, navigate to the `labyrinth` root directory.

🔵 **Activity (10 min)**

**Navigate the Labyrinth**

For each of these, write your command on one line using full paths:
* Navigate to the `labyrinth` root directory.
* From the `labyrinth` root directory, navigate to `dining_room`.
* From `dining_room`, navigate back up to the root directory.
* From the `labyrinth` root directory, navigate to `stairway`.
* From `stairway`, navigate to `parlor`.
* From `parlor`, navigate to `escher_room`.
* From `escher_room`, navigate to `throne_room`.
* From  `throne_room`, navigate to `ballroom`.

## (Extra) Navigation: Absolute Path

Move anywhere relative to the home directory with `cd ~/`. `cd ~/` means the path starts in the home directory.

Example:
* `cd ~/Desktop/Labyrinth/stairway/escher_room` navigates to the `escher_room` no matter where you're currently located in your file system.

> Note: You can combine absolute and relative paths when copying or moving files from one location to another with `cp` and `mv`.

**Fun Trick: Jump Back**
* Use `cd -` if you reach a faraway absolute path. You can go to the previous directory this way.

🔵 **Activity (3 min)**

But first: Are you tired of all the tedious typing and going left-left-left-left-left to go back and change one letter? Well, here are some...

**Handy Terminal Keyboard Shortcuts**

In the long term, these will help reduce your reliance on the mouse:
* `⌘ K` to clear the terminal window.
* `option arrow` (right or left arrow) to jump to the beginning of the next (or previous) word.
* `ctrl A` to go to the beginning of a line.
* `ctrl E` to go to the end of a line.
* `ctrl K` to kill line to end.
* `ctrl U` to kill line to beginning.
* `ctrl Y` to yank clipboard to line.
* `cd -` to go to the previous directory.

And now back to our...

🔵 **Activity: Navigate the Labyrinth (Some More)**

Using absolute paths:
* Navigate to `throne_room`.
* Navigate to `ballroom`.
* Navigate to `parlor`.

## Code

We're going to:
* Build a file structure.
* Open the file structure in Sublime.
* Write some code.
* Run parts of the code.

🔵 **Code-Along (5 min)**

* In terminal, navigate to your folder for today.
* Make a `file_structure_hello_world` directory and `cd` into it.
* Create a folder structure:
    * `mkdir hello_app`
    * `touch index.html`
    * `mkdir css`
    * `touch css/style.css`
    * `mkdir js`
    * `touch js/app.js`

This is a standard front-end file structure.

Let's print a message to the console. It's tradition to write a "Hello, World" program as a first step in programming.

* Open the file structure (or folder on PC) in Sublime Text using your fancy new shortcut.
* Add this to your `app.js`: `console.log('Hello, World!');`.

Open this folder structure in Chrome and click on `index.html`. Open the Developer Tools. You should see:

> => Hello, World!

Congrats! You've written your first "Hello, World" of the course.

