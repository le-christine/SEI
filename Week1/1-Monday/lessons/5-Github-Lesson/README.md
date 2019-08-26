![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Git and GitHub | Lesson | 1.5 hours | Melissa Arliss (adapted from Ed-Product-Library) |

## Git and GitHub

## Lesson Objectives

- Explain basic Git commands like `init`, `add`, `commit`, `push`, `pull`, and `clone`.
- Distinguish between local and remote repositories.
- Create, copy, and delete repositories locally or on GitHub.
- Fork and clone remote repositories.

## Introduction: Git vs. GitHub and Version Control (10 min)

### What Is Git?

[Git](https://git-scm.com/) is:

- A program you run from the command line.
- A distributed version control system.

Programmers use Git to keep the history of all of the changes to their code. This means they can roll back changes (or switch to older versions) as far back as when they started using Git on their project.

You know how Google Docs allows you to have a version history and move between different versions whenever you want? Git enables you to do that with any folder and its contents on your computer.

A codebase in Git is referred to as a **repository**, or **repo** for short.

Git was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the principal developer of Linux.

**Stop, do not pass go!** 

In order to do this lesson (and, let's be honest, the rest of this course), you will need Git installed on your machine. To check, open the terminal and type this command:

```bash
git --version
```

If you see a version number like `2.20.0`, you're good! If not, [click here](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git) to do so now.

### What Is GitHub?

[GitHub](https://github.com/) is:

- A hosting service for Git repositories.
- A web interface to explore Git repositories.
- A social network of programmers.
  - We all have individual accounts and put our codebases on our GitHub account.
  - You can follow users and star your favorite projects.
- A place where developers can access public codebases.

#### Can You Use Git Without GitHub?

<!--Instructor Note: Explain the differences between remote and local.-->

Git is software that enables version control on local folders on your machine. GitHub is a place to host your Git repositories remotely. You can certainly have local files using Git that are not sent to or stored on GitHub.

Read [this overview](http://stackoverflow.com/questions/11816424/understanding-the-basics-of-git-and-github) when you have time.

> Knowledge Check: Describe how remote files compare to local files. Describe how Git compares to GitHub.

## Demo: Why Is Git Tricky to Understand? (15 min)

Git is tricky to understand because describing how it works would require the use of strange and technical-sounding words like:

- [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
- [SHA-1](https://en.wikipedia.org/wiki/SHA-1)
- Blob
- Tree

However, you don't actually need to know how it works under the hood in order to use it.

### Trees

Even though you don't need to know how it works, it's useful to know that your local repository consists of three "trees" maintained by Git.

- A **working directory**: Like any other folder on your machine that holds actual files.
- An **index**: Acts as a staging area (an area that holds files ready to be versioned).
- A **HEAD**: Points to the last commit you've made (the last version of the code you've stored using Git).

![workflow](https://cloud.githubusercontent.com/assets/40461/8221736/f1f7e972-1559-11e5-9dcb-66b44139ee6f.png)

### Commands on Commands on Commands

You can use lots of commands in Git. Take a look at the list of available commands by running:

```bash
$ git help -a
```

Although there are many different commands, we'll only need to use a handful in this course.

### The Git File Life Cycle

To understand how Git works, we need to talk about the life cycle of a Git-tracked file.

![life cycle](https://cloud.githubusercontent.com/assets/40461/8226866/62730b4c-159a-11e5-89cd-20b72ed1de45.png)

*Schema from [git-scm.com](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)*

There are four main stages of a Git version-controlled file:

1. **Untracked**: When a file is untracked, Git is not "watching" this file; the file will not be added in the next commit.
2. **Staged**: Staged files have not yet been committed to memory but are "on deck," so to speak, for your next commit.
3. **Unmodified**: The file has already been committed and has not changed since the last commit.
4. **Modified**: You have changes in the file since it was last committed; you'll need to stage them again for the changes to be added in the next commit.

Once you've committed a file and it becomes unmodified, its contents are saved in Git's memory.

- **Not saved in Git memory**: Your file is not saved until you commit the file to Git's memory.
- **Saved in Git memory**: Only when you've committed a file does it become saved in Git's memory.

### Try It

Work with the person next to you. Get on the web and take three minutes to come up with a one-sentence explanation of the difference between untracked and staged files. Get ready to share your explanation.

## Guided Practice: Let's Use Git (15 min)

Let's make our first Git repo!

To start, create a directory on your desktop and `cd` into it:

```bash
$ mkdir hello-world
$ cd hello-world
```

You can place this directory under Git version control using the command:

```bash
$ git init
```

Git will reply:

```bash
Initialized empty Git repository in <location>
```

You've now initialized the working directory.

### The .git Folder

If we look at the contents of this empty folder using...

```bash
ls -A
```

...we should see a hidden folder called `.git`. This is where all of the information about your repository is stored. You don't need to make any changes to this folder. You can control the entire Git flow using `git` commands.

### Add a File

Let's create a new file:

```bash
$ touch a.txt
```

If we run `git status`, we should get:

```bash
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt

nothing added to commit but untracked files present (use "git add" to track)
```

This means there's a new **untracked** file. Next, tell Git to take a snapshot of the contents of all files under the current directory (note the `.`).

```bash
$ git add .
```

This snapshot is now stored in a temporary staging area, which Git calls the "index."

### Commit

To permanently store the contents of the index in the repository (commit these changes to the HEAD), you need to run:

```bash
$ git commit -m "Please remember this file at this time"
```

You should now get:

```bash
[master (root-commit) b4faebd] Please remember this file at this time
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

#### Checking the Log

If we want to view the commit history, we can run:

```bash
git log
```

You should see:

```bash
* b4faebd (HEAD, master) Please remember this file at this time
```

> Knowledge Check: Did you get this message?

To exit this view, you need to press:

```bash
q
```

### Make Changes to the File

Now, let's open a `.txt` file in a text editor. Inside the file, write something.

If you press `return` on the terminal, you'll see that you have untracked changes.

Running `git status` again will show you that a `.txt` file has been **modified**.

### Revert to a Previous Commit

Let's make a second commit.

```bash
$ git add .
$ git commit -m "Second commit"
```

Checking `git log` will show you two commits with different IDs:

```bash
* 6e78569 (HEAD, master) Second commit
* b4faebd Please remember this file at this time
```

We can revert the file back to the first commit using its specific commit ID:

```bash
$ git reset --soft b4faebd
```

This will do a soft reset, where the changes in the file remain — they're staged but not committed anymore.

If we want to revert the file and disregard any changes (which can be dangerous), we can use:

```bash
$ git reset --hard b4faebd
```

## Guided Practice: Making and Cloning Repositories (10 min)

Let's do this together:

1. Go to your GitHub account.
2. in the top-left corner, hit the `+` button and select "New repository."

![](https://help.github.com/assets/images/help/repository/repo-create.png)

3. Name your repository `hello-world`.

![](https://help.github.com/assets/images/help/repository/repo-create-name.png)

4. **Initialize this repository with a README** (so we can `git pull`).
5. Click the green "Create repository" button.

We now need to connect our local Git repo with our remote repository on GitHub. We have to add a remote repository, an address where we can send our local files to be stored.

```bash
git remote add origin git@github.com:github-name/hello-world.git
```

You can find this address by clicking on the "Clone or download" button:

<img src="https://i.imgur.com/PNyQ2YW.png" align="center">

### Pushing to GitHub

To send files from our local machine to our remote repository on GitHub, we need to use the command `git push`. However, we also need to add the name of the remote repo (in this case, we called it `origin`) and the name of the branch or copy of the code (in this case, `master`). Don't worry about branches just yet.

```bash
git push origin master
```

In other words: "Hey Git, take the code I have locally and send it to the 'master' copy located at the 'origin' web address."

This should fail due to new files on the remote repo.

### Pulling From GitHub

As we added the `readme.md` in our repo, we need to first `pull` that file to our local repository to check that we don't have a conflict, or a difference between our remote and local code.

```bash
git pull origin master
```
In other words: "Hey Git, give me the current code from the 'master' copy located at the 'origin' web address."

Once you've done this, you should see the README file on your computer. Now you can push your changes:

```bash
git push origin master
```

Refresh your GitHub webpage, and the files should be there.

### Cloning Your First Repository

Now that everyone has their first repository on GitHub, let's clone them. Cloning allows you to get a local copy of a remote repository.

Navigate back to your desktop and **delete your `hello-world` repository**:

```bash
cd ~/Desktop
rm -rf hello-world
```

Now, ask the person sitting next to you for their GitHub name and navigate to their repository on GitHub:

```bash
https://www.github.com/<github-username>/hello-world
```

Again, on the right-hand side, you'll see:

<img src="https://i.imgur.com/mnnEwUN.png" align="center">

Ensure that you have SSH checked and copy this URL.

### Clone Their Repo

To retrieve the contents of their repo, all you need to do is:

```bash
$ git clone git@github.com:username/hello-world.git
```

Git should reply:

```bash
Cloning into 'hello-world'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
Checking connectivity... done.
```

You should have another `hello-world` folder on your machine. `ls` to check it out. You have now cloned your first repository!

## Introduction: What Is Forking? (5 min)

The `fork`-and-`pull` model allows anyone to fork an existing repository and push changes to their personal fork without requiring access to be granted to the source repository.

Most commonly, forks are used to either propose changes to someone else's project or use someone else's project as a starting point for your own idea.

> Knowledge Check: Could someone explain the difference between forking and cloning?

### Cloning vs. Forking

When you fork a repository, you make a new **remote** repository that's exactly the same as the original, except you're the owner. You can then `clone` your new fork and `push` to and `pull` from it without needing any special permissions.

When you clone a repository, unless you've been added as a contributor, you won't be able to push your changes to the original remote repository, because it's not your GitHub repository.

#### Pull Requests

When you want to propose a change to a repository (the original project) you've forked, you can issue a pull request. With a pull request, you're saying: "I've made some changes to your repository. If you want to include them in your original one, you can pull them from my fork."

We'll give this a shot in the next section.

## Guided Practice: Working With Forks and Creating Pull Requests on GitHub (15 min)

Let's practice the flow you'll be using in all of our classes to get assignments and submit your work.

The goal is to get the work from [this](https://git.generalassemb.ly/GA-Cognizant/github-forking-exercise) repo onto your local machine, make a change, and submit a pull request.

1. First, click the link to this repository: https://git.generalassemb.ly/GA-Cognizant/github-forking-exercise.
2. Click the "Fork" button on the top-right corner. (After you do so, notice you have a new repo that you own, forked from `ga-cognizant/github-forking-exercise`.)
3. Find the "Copy to clipboard" button to get the clone URL.
4. Jump back to the terminal and, from your root directory, type in `git clone URL`.
5. `cd` into the cloned repository and open the `forking-exercise` folder in a text editor.
6. Type your name on the `readme.md` file.
7. `add`, `commit`, and `git push origin master`.

Remember, before you can open a pull request from your fork, you must commit new code to the local clone of your fork and push that code to your forked copy on GitHub.

Now, to create a pull request:

1. Visit your forked repository.
2. Click the "Compare, review, create a pull request" button on the repository. 

![pull request](https://cloud.githubusercontent.com/assets/40461/8229344/d344aa8e-15ad-11e5-8578-08893bcee335.jpg)

3. You'll land right on the compare page. You can click "Edit" at the top to pick the new fork-branch combo you're requesting to merge with using the "Head Branch" dropdown.
4. Select the target fork-branch you're requesting your fork-branch be merged with using the "Base Branch" dropdown.
5. Review your proposed change.
6. Click "Create a pull request" for this comparison.
7. Enter a title and description for your pull request.
8. Click "Send pull request."

Nice work! Take a moment to think about this, flow because we'll be using it throughout the course.

## Partner Practice: Assess (10 min)

Use the internet and what you've learned today to answer the following questions with a partner:
- How do I send changes to the staging area?
- How do I check what will be committed?
- How do I send the commits to GitHub?
- How do I go back to the previous commit?
- How do I check the configuration on a specific machine?
- How does GitHub know I'm allowed to push to a specific repo?

## Introduction: .gitignore File (10 min)

Before we wrap things up, let's have a chat about the `.gitignore` file.

When you create a new project, most integrated development environments usually generate files specific to your computer (e.g., set up files, temporary files, compiled code, and more). These files should not be pushed to the remote Git repository, as they're specific to you and might affect other people's ability to use the project. This is where the `.gitignore` file comes in.

The `.gitignore` file lists the files that should not be uploaded to your remote Git repo (i.e., what files to **ignore**).

You can put `.gitignore` files in your repo, so whomever clones your project can ignore unnecessary files. You can also set up your computer so that you always ignore certain files for all of your projects — a "global" `.gitignore`. Let's do that now.

Go to [gitignore.io](https://www.gitignore.io/), a website that generates `.gitignore` files. Type in the types of projects you'll be working with and press "Generate." Copy all of the generated text.

Open the terminal and create the `.gitignore` file wherever you want; I tend to run `touch ~/.gitignore`. Then, open it and paste the generated text into the file. Make sure to save it.

Now, you have to register the file with Git. In terminal, run:

```bash
  git config --global core.excludesfile ~/.gitignore
```

All of your future projects will ignore the files listed.

Note: For local `.gitignore` files, you don't have to register them with Git. Just put them in the root folder of your Git project.

## Conclusion (5 min)

As a developer, you'll have to use Git almost every day. The learning curve is steep and all of the principles of version control can be a bit blurry, so it's best to push your homework every day and commit regularly during project time.

Don't be frustrated by all of these new commands, because we'll definitely have time to practice using them during this course.
