Installfest should be completed on Day 1 of the course, after students have gone through the course welcome.

## What is Installfest?

Let's get our machines set up for the initial phase of the course.  We will be iteratively building out a development environment throughout the course, but the basics are fairly minimal. We will use the `Terminal` app that's built into Mac OS to run some of the install commands. Most of the tools we need can be installed with `homebrew`, a package manager for OS X.

------

## Slack, Browser, And Text Editor

Slack is a cloud-based team collaboration tool. You will use this to communicate with your instructional team, classmates, and the GA staff. For consistency, our class will be using `Google Chrome` as our default browser, and our text editor of choice will be `Sublime Text`.

If you haven't downloaded any of these technologies yet, please do so now:

- [Slack](https://slack.com/downloads/mac)
- [Google Chrome](https://www.google.com/chrome/)
- [Atom](https://github.com/atom/atom/releases/tag/v1.39.1)
- [IntelliJ](https://www.jetbrains.com/idea/download/#section=mac)

#### Atom Resources

- [Atom Tutor](https://atom.io/packages/atom-tutor)
- [Atom Shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)

----

## Homebrew

[Homebrew](https://brew.sh/) is an extremely popular and easy to use package manager for macOS. This is the tool we will use to install all of the software we need for this course.

1. Open the Terminal application, and run `which brew` to check if you have Homebrew installed already. The `which` Terminal command shows where on your computer a program is installed. If it is installed, the Terminal will output a file path. If it is not installed, the Terminal won't output anything.

2. **Only if you do not have Homebrew installed**, run the command below to install Homebrew. Wait while Homebrew downloads and installs.

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This install script will tell you the files it will create and ask for your password. 

**YOUR PASSWORD WILL NOT DISPLAY AS YOU TYPE**, just type your password as you normally do.

After the install, brew will print an output describing where to find more information on how to use it.

#### Brew References

- [Brew Docs](https://docs.brew.sh/)
- [Brew Cask](https://caskroom.github.io/)
- [Bash Git Prompt Install](https://github.com/magicmonty/bash-git-prompt#via-homebrew-on-mac-os-x)
- [Bonus: Brew Fonts](https://github.com/Homebrew/homebrew-cask-fonts)

----

## Git

Let's install `git` and a nifty helper for viewing files in the command line, `tree`. The `tree` package adds a command to your Terminal that displays files in a tree view (instead of a list view like `ls`).

```
brew install git
brew install tree
```

Now run the Terminal command `tree` to see a tree view of all the files inside your current directory!

> If you run `tree` from your root directory, it might be printing files for a LONG time! Remember that you can always use `ctrl + C` in the terminal to stop the currently running process.

### Bash Git Prompt

After running the Homebrew install, we want to configure our `bash prompt` to display helpful Git information.

From the command line, open your `~/.bash_profile` file with Sublime Text using the command:

```shell
atom ~/.bash_profile
```

Copy & paste the following into `~/.bash_profile`:

```shell
if [ -f "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh" ]; then
  __GIT_PROMPT_DIR=$(brew --prefix)/opt/bash-git-prompt/share
  source "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh"
fi
```

Save the file and quit Atom.

### Configure Git

We want to set a default name an email address that Git will use to identify our commits. We want to be sure to use the same email as the one we created our GitHub Enterprise account with.

1. Use the following `git config` commands to configure your git user information. We use the `--global` (or `-g`) option to make the configuration apply to all repositories.

```shell
git config --global user.name "YOUR NAME HERE"
git config --global user.email YOUR_EMAIL@DOMAIN.COM
```

2. Generate a SSH key for GitHub by [following GitHub's instructions](https://help.github.com/articles/generating-ssh-keys). This will allow you to use GitHub from your Terminal without entering your login information every time you push.

#### Clarifying notes for GitHub's instructions that might be confusing:

When you are "[Adding a new SSH key to your GitHub Account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)" the following command:

```bash
  $ pbcopy < ~/.ssh/id_rsa.pub
  # Copies the contents of the id_rsa.pub file to your clipboard
```

will take your SSH key that was saved to the file id_rsa.pub and copy it to your clipboard (similar to using Command-C, but with the command line).

3. We will also tell Git to use `Sublime Text` as our default editor:

```shell
git config --global core.editor "subl -n -w"
```

#### Git Config Reference

- [Git First Time Set Up](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [Git Config Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)
- [GitHub Setting username](https://help.github.com/articles/setting-your-username-in-git/#setting-your-git-username-for-every-repository-on-your-computer)
- [GitHub Setting email](https://help.github.com/articles/setting-your-commit-email-address-in-git/)
- [GitHub about commit email](https://help.github.com/articles/setting-your-commit-email-address-in-git/)

-----

## Github

You should have a Github (regular, public Github) and Github Enterprise (GA's corporate instance) account for the course.

- Go to https://github.com to create a regular Github account.
- Go to https://git.generalassemb.ly/ to create an Enterprise account.

You should use the same name, username, profile image, and email for both accounts.

