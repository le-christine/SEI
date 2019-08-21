# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Amex Project 2

##  Description
It's time to put everything you've learned about Spring into practice! You'll build the back-end for the Reddit-like application you constructed a front-end for in Project 1.

For this project, you'll build a monolithic back-end using Spring Boot and its modules. You'll use PostgreSQL to create your database and Tomcat to run your application.

You will be working **with a partner** for this project.

## Technical Requirements

Students' apps must:

- Persist at least **three models** (`User`, `Post`, `Comment`) to a PostgreSQL database.
- Use Spring Profiles to have **different profiles** for each environment.
- Use  **JSON Web Tokens** in Spring Security to power user authentication.
- **Protect the routes** with JWT, except for user sign-up and login.
- Expose APIs to perform **user login and sign-up**.
- Expose APIs to view and create a **user profile**.
- Expose APIs to **list posts and comments** made by a user.
- Expose APIs to perform **create, read, and delete actions** on user posts.
- Expose APIs to **create a comment** on a user post and delete that comment.
- Expose CRUD routes that were built using **REST conventions**.
- **Handle exceptions** gracefully.
- Send appropriate messages back to the client in the event that an exception occurs.
- Have complete **unit tests** that use mocks and stubs for at least one `Controller` and one `Service` class.
- Create **updated routes in the front-end** to connect to your newly built back-end (replacing the previously provided back-end from Project 1).
- Stick with the **KISS** (keep it simple, stupid) and **DRY** (don't repeat yourself) principles.


### Bonus Ideas
- Expose an API to update their own user profile.
- Add more unit tests.
- Implement integration tests.
- Allow a user to update their password.
- Allow a user to add a comment within another comment.


## Necessary Deliverables

- User stories to show the the work breakdown and project deliverables.
- A Git repository hosted on GitHub.
- Around 50 commits (or more) on GitHub, dating back to the very beginning of the project. (Commit early, commit often. Tell a story with your commits. Each message should give a clear idea of what you changed.)
- A `README.md` file with:
	- Explanations of the technologies used.
	- A couple of paragraphs about the general approach you took.
	- Descriptions of any unsolved problems or major hurdles you had to overcome.
	- A link to your planning documentation for how you broke down this project with deliverables and timelines.
	- Installation instructions for any dependencies.
	- A link to your user stories — who are your users, what do they want, and why?
	- A link to your wireframes — sketches of major views and interfaces in your application that may have been necessary to add after Project 1.
- A **10-minute** presentation, illustrating:
	- Your `README.md`.
	- Unit testing, by running at least one set of tests.
	- Triumphs.
	- Challenges.

## Assessment

Project 2 will be assessed in line with the [standard project guidelines](https://git.generalassemb.ly/GA-Cognizant/s2-projects/blob/master/project-assessment.md).
