---
title: React Router
type: lesson
duration: “1:55”
creator:
    name: Joseph Thomas
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Router

### Learning Objectives

*After this lesson, students will be able to:*

- Explain the difference between server-side and client-side routing.
- Set up basic routing with React Router's `BrowserRouter`, `Route`, `Link`, `Switch`, and `Redirect` components.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening              | Lesson Objectives |
| 25 min | Exercise             | What Is Routing?    |
| 20 min | Discussion           | React Router      |
| 35 min | Demo                 | Using React Router |
| 20 min | Demo                 | Route Parameters and Dynamic URLs    |
| 10 min | Conclusion           | Review/Recap |

## Opening (5 min)

In this lesson, we'll explore the basics of routing (aka, how we get around on the internet) and how we can use React Router to make that process seamless for applications that use React.

---

## What Is Routing? (25 min)

A simple way to describe **routing** would be:

> The logic or process that returns certain data given a URL path.

In even more simple terms, it's the process that occurs behind the scenes to get the right stuff to show up when you visit a URL online.

This "stuff" might be HTML, a JSON response in an API, an RSS feed... anything that can be accessed via a URL. Traditionally, all of this routing happened on the server; when navigating from page to page on a website, your browser requested a new URL with each page change and in turn received a new HTML document. But, as the needs and interactivity of websites and web apps have grown, it's become increasingly common to handle routing on the "client-side," or within the user's browser.

### Server-Side Routing

Let's look at an example of how content is routed by URLs by looking at the General Assembly home page. Go to [General Assembly's website](https://generalassemb.ly) and check out the nav at the top of the screen.

You should see options for things such as "On Campus," "Locations," and "About." If you hover over them, you'll get a dropdown menu with many more options. Click on the different links to pages and notice the URLs where you end up (alternatively, just hover over the links to see their URL to save yourself from actually navigating off the page). Specifically, look at their *paths*.

What's a path? The **path** of a URL is everything after the domain name. In this case, the path is everything that appears after the `.ly` in the URL. Compare the paths in the URLs and get a sense for how URLs are routed to content:

| **URL Route**                       | **Content**                                              |
|-------------------------------------|----------------------------------------------------------|
| /                                                 | Home page.                                     |
| /education                                        | Shows all local upcoming courses.             |
| /education/software-engineering-immersive         | SEI course details.                           |
| /education/software-engineering-immersive/atlanta | SEI course details coming up in Atlanta.      |
| /locations                                        | Shows all global GA locations.                |
| /locations/london                                 | Shows London-specific location information.   |

You can visualize a file structure for GA's website like this:

```
├── education
│   ├── software engineering immersive
│       ├── atlanta
│		├── new york city  
├── locations
│   ├── london
│   ├── singapore
├── about
```

This is a pretty good example of how websites have traditionally handled routing on the server side. Each of these URLs represents a new HTTP request for that page.

Traditionally, websites:

- Spread their content across multiple pages.
- Use URLs to route users to different pages.
- Can use URLs with hashtags to take the user to different content on the same page.

### Client-Side Routing

When routing is handled in the browser, all of this happens a little differently. When we navigate from page to page, our browser does not send new HTTP requests for that URL. Instead, it updates the URL in our browser and renders new content depending on what that URL is.

When we visit a website, we still make an initial HTTP request to the server. But, instead of looking around for various HTML files, it will (in a simple web app) always return the same `index.html` file. That file will then load up your app, and your app will look at the current URL to determine what to render. Websites that serve up only one page and change the content of the page dynamically without reloading it are called **single-page applications**.

Open your browser and navigate to [Gmail](https://gmail.com) (or whichever email site you use).

- When you load Gmail, you see your inbox.
- You can start instant messaging a friend in the sidebar.
- You can start to compose a new email to your manager to request time off.
- You can search for an email with flight information.
- You can browse through more emails to make sure you've talked to your manager about getting time off and aren't just disappearing for a week.

All of this happens on one page! And this page never refreshes. With that, Gmail fits the definition of a single-page application:
- Gmail loads one page just once.
- That page replaces content dynamically to show the user many different things.
- That single page changes its content dynamically without reloading or sending you to another page.

<details>
	<summary>Knowledge Check: Why is this good for us and our users?</summary>

- Our app's state is maintained, because we aren't refreshing or loading a new page.
	- In the case of Gmail, you can have a chat window open in one corner and keep talking to a friend as the rest of Gmail switches between showing you your inbox, an email, or email search results.
- Our users get very fast page transitions and a much smoother experience.

</details>

<details>
	<summary>Knowledge Check: On the flip side, what new things do we have to think about when building single-page apps?</summary>

- Determining what UI to display (depending on the URL).
- Loading any necessary data for that UI.
- Handling 404/"page not found" issues.

</details>

-----

## React Router (20 min)

Fortunately, we don't need to write all of this new handling from scratch. Other people have already done this for us and released their work as open source. [React Router](https://reacttraining.com/react-router/) has become the most popular solution for handling routing in React.

React Router is a package that allows us to change the URL, making it look like the user is visiting different pages when they are actually still on the same page. Oh wait, does this sound familiar? That's how modern single-page applications such as Gmail function!

React Router takes care of two tasks that are traditionally accomplished by going to different pages:

- It keeps track of what's supposed to happen and which components should be rendered when you visit specific URLs.
- It updates the browser's history with those URLs.

The second part occurs automatically; the first part is what you have to set up.

### React Router Docs

Take a few minutes with a small group to explore the code in [this repo](https://codesandbox.io/s/awesome-blackburn-xh1rk). Try to make some educated guesses about how it works. As you explore, refer to the [React Router docs](https://reacttraining.com/react-router/web/guides/quick-start). Stop reading before the "Nested Routes" section for now.

Discuss answers to the following questions:

- Is React Router built into React?
- What components (in the React sense) are involved in React Router?
- What is "dynamic" routing? How is it different from "static" routing?
- Can you find a `<BrowserRouter>` anywhere in this app? What is it doing?

We'll debrief as a class when you're done.

----

## Demo: React Router (35 min)

Let's dive back into our [example](https://codesandbox.io/s/awesome-blackburn-xh1rk).

This example covers three of the five components we'll be learning about today:

- `BrowserRouter`
- `Link`
- `Route`

### `BrowserRouter`

In the demo code, you'll see a `BrowserRouter` at the top of the component tree:

```js
return (
	<BrowserRouter>
		<div>{/* ...etc  */}</div>
	</BrowserRouter>
)
```

This component is a "Provider," which supplies information and functionality to the other components. This all happens in the background, so the only thing to know for right now is that you need to put a router at the top of your application's component tree so it can communicate with all of the other RR components.

We'll be using `BrowserRouter`; it handles URLs in the most straightforward way. `StaticRouter` is another common component that's mostly used for server-side rendering. We won't be covering SSR, but you can read more about it [here](https://reacttraining.com/react-router/web/api/StaticRouter).

### `Link`

To navigate around our app, we need to provide our users with links. In normal HTML, we would do this with an anchor tag:

```js
<a href="/about">About</a>
```

If we do that in React, the browser will handle these links the standard way: Making a new HTTP request to the server for `/about`. Check out the example code. How are we rendering it in React Router?

<details>
	<summary>Answer:</summary>

	We can render our links with RR's `Link` component, using the `to` prop instead of `href`.

```js
<Link to="/about">About</Link>
```

This will update the browser's URL to `/about`, and then your routes will handle rendering the content.

</details>

### `Route` with `component`

Straight from the [React Router docs](https://reacttraining.com/react-router/web/api/Route):

> The `Route` component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route’s path.

Well then! In use, it looks like this:

```js
<Route path="/about/" component={About} />
```

A `Route`'s logic could be summarized as:

> Does the current URL match my `path` prop? If so, I'll render the component that was given to me with the `component` prop.

The example above would render the `About` component whenever the URL matches `/about/`. But _matches_ could also be thought of as "starts with." So, if the URL is `/about/contact`, the `About` component would still render. This means that the `About` component would be responsible for rendering an `About` page as well as a `Contact` page. If we wanted to break this up into individual routes, we can use the `exact` prop to tell the route that we only want to render our component when the URL matches _exactly_:

```js
<Route path="/about/" exact component={About} />
<Route path="/about/contact" component={Contact} />
```

> **Note**: A `Route` with no `path` prop will _always_ render. We'll discuss this more in a later step.

### `Route` with `render`

The example above is the simplest: On `/about/`, render the `About` component. But what do we do when we need to pass props to `<About>`? The simpler `component` API doesn't allow for that. Instead, we can use `Route`'s `render` property.

The `render` property accepts a function that returns JSX and looks like this:

```js
<Route
	path="/dashboard"
	render={() => {
		return <Dashboard currentViewer={this.state.currentViewer} />
	}}
/>
```

In this example, our `Route` is being rendered by a `Class` component that keeps the `currentViewer` in its state. Using the `render` property, we can pass in the current viewer. We can even include some logic in this function. For instance, we can use RR's `Redirect` component to redirect users to log in if there is no `currentViewer`:

```js
<Route
	path="/dashboard"
	render={() => {
		if (!this.state.currentViewer) return <Redirect to="/login" />
		return <Dashboard currentViewer={this.state.currentViewer} />
	}}
/>
```

### The `Switch` Component

The examples we've covered will handle some basic routing. However, sometimes the routing doesn't do what we would expect. Consider this code:

```js
<Route path="/" component={Homepage} />
<Route path="/about/" component={About} />
<Route path="/about/contact" component={Contact} />
<Route component={NotFound} />
```

It looks straightforward at first, but there are some problems. Who can take a guess?

<details>
	<summary>Answer:</summary>

Because we didn't include `exact` props on these routes, a visit to `/about/contact` would render _all_ of these components. If we add `exact` to the first three routes, that helps. But the `NotFound` component will still render, no matter what the location.

</details>
<br/>

To solve this problem, we can use React Router's `Switch` component.

[From the docs](https://reacttraining.com/react-router/web/api/Switch):

> Renders the first child \<Route\> or \<Redirect\> that matches the location.
>
> How is this different than just using a bunch of \<Route\>s?
>
> \<Switch\> is unique in that it renders a route exclusively.

In other words, a `Switch` will only ever render _one_ `<Route>` or `<Redirect>` component, and it will always be the first one it finds. Now, with `Switch` and the `exact` prop, we can get the routing we want with this code:

```js
<Switch>
	<Route path="/" exact component={Homepage} />
	<Route path="/about/" exact component={About} />
	<Route path="/about/contact" component={Contact} />
	<Route component={NotFound} />
</Switch>
```

We could even rearrange the components if we don't want to use `exact`. This will do the same thing:

```js
<Switch>
	<Route path="/about/contact" component={Contact} />
	<Route path="/about/" component={About} />
	<Route path="/" component={Homepage} />
	<Route component={NotFound} />
</Switch>
```

### The `Redirect` Component

This one is pretty simple! Any time a `<Redirect>` component renders, the user is immediately redirected to the new location. Instead of displaying a "Not Found" page, we can redirect users to the home page whenever they visit a location that doesn't have a route:

```js
<Switch>
	<Route path="/about/contact" component={Contact} />
	<Route path="/about/" component={About} />
	<Route path="/" component={Homepage} />
	<Redirect to="/" />
</Switch>
```

----

## Route Parameters and Dynamic URLs (20 min)

So far, we've been defining _static_ routes: Ones that are hardcoded and accept only the specific paths. But we'll often need these routes to be _dynamic_, allowing them to accept different variations of a path.

Let's consider a very simple blog website with the following URLs:

| request URL                         | path            |
| ----------------------------------- | --------------- |
| `www.example-blog.com`              | `/`             |
| `www.example-blog.com/about`        | `/about`        |
| `www.example-blog.com/posts`        | `/posts`        |
| `www.example-blog.com/posts/post-1` | `/posts/post-1` |
| `www.example-blog.com/posts/post-2` | `/posts/post-2` |
| `www.example-blog.com/posts/post-3` | `/posts/post-3` |

We can handle the first three routes statically. But what about the last three? Our blog might grow to hundreds of posts, but we know that each post is going to be rendered using the same component. Instead of hardcoding these routes one by one, we can use **route parameters**. Route parameters are wildcard placeholders that will accept _any_ path for that segment of the URL.

Setting up a dynamic route with parameters looks a lot like a static route but with one small difference (actually, one _character_ difference).

### Let's See It in Action

Check out this [example code](https://codesandbox.io/s/affectionate-curie-esw56). Can you spot what's new?

<details>
	<summary>Answer:</summary>

We can set up a route that will go to any of our posts, like this:

```js
<Route path="/posts/:postSlug" component={BlogPost} />
```

</details>
<br/>

The difference here is the `:` character at the beginning of the second segment. What this says to React Router is: _Match any URL that is `/posts/something`, and give me the value of that something in a variable_.

> **Slug** is a term that's often used for a URL-safe string that identifies a particular page.

React Router provides all of its child components with some props: `history`, `location`, and `match`.

`match` is an object that contains information about that route and how it was matched with the current location. When we're using a route with parameters, it supplies those values in its `params` property. If we visit `/posts/my-first-post`, the `match` prop provided to `BlogPost` will look like this:

```js
{
  path: "/posts/:postSlug",
  url: "/posts/my-second-post",
  isExact: true,
  params: {
    postSlug: 'my-second-post'
  }
}
```

While this doesn't give our component all of the data for the blog post, it does provide a starting point. From there, we can use that information to query an API, search through a collection of data, or whatever else necessary to get the info we need.

If you need to use the Route's `render` API, the function you provide it will receive these props, and you can pass them down to the component. For example:

```js
<Route
	path="/posts/:postSlug"
	render={routeProps => {
		const { match } = routeProps
		return <BlogPost match={match} />
	}}
/>
```

---

## Conclusion (5 min)

We'll practice all of this soon enough, but before we do so, let's review what we learned about React Router.

With a partner, take a moment to talk through how each of these components is used:

- `BrowserRouter`
- `Link`
- `Route` with `component` and `Route` with `render`
- `Switch`
- `Redirect`
