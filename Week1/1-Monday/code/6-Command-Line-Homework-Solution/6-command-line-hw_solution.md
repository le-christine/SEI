# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Star Wars Command Line | HW | 1:00 | Rachel Moskowitz (adapted from NYC_SEI) |


![star wars theme image](https://i.ytimg.com/vi/SBW95uQM45U/hqdefault.jpg)

# Star Wars, The Command Line, and The Battle for the Fate of the Universe

As a programmer, the ability to work comfortably in the command line is a critical skill to develop. It's a big break from what you're used to, and practice (eventually) makes perfect. Let's explore the Star Wars narrative using the command line!

Record your commands underneath each bullet point in the markdown below.

As you work, make sure you `git add .` and `git commit -m "YOUR MESSAGE HERE"`!

## "A New Hope"
### Act I

* In your `homework` directory, create a new directory called `star_wars`.

> Example answer: `mkdir star_wars`

* In the `star_wars` folder, create two new directories: `empire` and `rebellion`.
> cd star_wars && mkdir empire rebellion

* Inside the `empire` directory, create a `.txt` file called `darth_vader`.
> cd empire && touch darth_vader.txt

* Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the `darth_vader` file. (Forgotten how to do this? Use the `other force`, known as Google!)
> echo "...heavy breathing..." >> darth_vader.txt

* Inside the `empire` directory, create a `.txt` file called `emperor_palpatine`.
> touch emperor_palpatine.txt

* Inside the `empire` directory, create a directory called `death_star`.
> mkdir death_star

* Move `darth_vader` into the `death_star`.
> mv darth_vader.txt ./death_star

### Act II

* Move into the `rebellion` directory.
> cd ../rebellion

* Create a file called `princess_leia` and add the text "Help me, Obi-Wan... You're my only hope."
> mkdir princess_leia && echo "Help me, Obi-Wan... You're my only hope."

* Create a file called `obi_wan`.
> touch obi_wan

* Create a file called `luke_skywalker`.
> touch luke_skywalker

* Create a directory called `millenium_falcon`.
> mkdir millenium_falcon

* Inside the `millenium_falcon`, create two files: `han_solo` and `chewie`.
> cd millenium_falcon && touch han_solo && touch chewie

* Move `luke_skywalker`, `obi_wan`, and `princess_leia` into the `millenium_falcon`.
> mv luke_skywalker princess_leia obi_wan ./millenium_falcon

* Move the `millenium_falcon` into the `death_star`.
> cd .. && mv ./millenium_falcon ../empire/death_star

### Act III

* Unload the Millenium Falcon! Move the whole crew from the `millenium_falcon` directory into the `death_star` directory.
> mv ./death_star/millenium_falcon/* ./death_star

* `darth_vader` has defeated `obi_wan`! Delete poor `obi_wan`.
> rm ./death_star/obi_wan

* Our heroes have disabled the tractor beam! Move the whole crew back into the `millenium_falcon`. Remember: `darth_vader` remains in the `death_star` and `emperor_palpatine` is still in the `empire`.
>  mv chewi han_solo luke_skywalker princess_leia ./millenium_falcon

* Move the `millenium_falcon` back into the `rebellion` directory.
> mv millenium_falcon ../../rebellion

* `darth_vader` leaves the `death_star` to pursue Luke! Move him from the `death_star` into the `empire` directory.
> mv darth_vader.txt ..

* Thanks to his practice back home at Beggar's Canyon, Luke blew up the `death_star`! Remove it from the galaxy.
> cd .. && rm -rf death_star

 :boom:
