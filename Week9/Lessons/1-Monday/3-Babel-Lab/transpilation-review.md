---
title: Transpilation Review
type: Supplement
duration: "h:mm"
creator:
    name: Alex Wasson
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Transpilation Review

## Introduction to Transpilation

Although JavaScript/EcmaScript has standards and specifications defined by Ecma, unlike many other programming languages, it does not have a single compiler/runtime. Instead, each browser handles JavaScript in its own way, and each browser has its own interpretation of the EcmaScript standard. For this reason, it can be difficult to be sure that a JavaScript program will work exactly the same for every user in every environment, even if it is written with very established features of the language, and it can take years for new features to filter out to enough browsers to make a feature safe to use.

To deal with the complexity of managing the differences between browsers and to enable the use of cutting edge JavaScript features, developers can ***transpile*** their code. ***Transpilation*** is the process of modifying source code in one format into another format. In the JavaScript community, transpilation typically refers to converting JavaScript written with features from ES6 and newer specifications (often called ES6+) to JavaScript that only makes use of very established features.

This lesson will focus on transpilation with [Babel](https://babeljs.io/), the most popular JavaScript transpilation tool. Babel is a command line tool, and so it will also be necessary to provide an introduction to JavaScript in the command line.

## Introduction to Command Line JavaScript and node.js

JavaScript was created as a language to run exclusively in browsers, and most JavaScript code is still targeted at browsers, but JavaScript's utility and the ability of JavaScript developers to write complex, reliable code exploded with the introduction of [node.js](https://nodejs.org/en/about/), a command line tool for running JavaScript and giving it access to computer file systems. Although node.js (or just node) wasn't the first project for running JavaScript outside of browsers, it is by far the most popular. node runs JavaScript using an adapted version of Google Chrome's JavaScript engine, provides input/output functionality to JavaScript, and comes bundled with `npm`, a package manager, and `npx`, a package runner.

node can be downloaded through [many package managers](https://nodejs.org/en/download/package-manager/) or with an [installer for GUIs](https://nodejs.org/en/download/). Once it is downloaded and installed, it should give access to three command-line tools:
- `node`: this is the basic command for running JavaScript files and scripts. For node beginners, this is most useful for running without any arguments, which will open a node [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) similar to the console in most browsers.
- `npm`: the node package manager is used for downloading, updating, configuring, and generally managing JavaScript libraries, and will likely be the most commonly used node tool for most developers.
- `npx`: this is a package runner, and is used to retrieve and immediately execute node packages. Certain node packages are designed as command line tools themselves, and npx is a way to execute them. For an example, try `npx cowsay moo`.

### `npm init`

node, like git, is installed in the root folder of a project and the tooling it provides can be accessed in any folders nested within that root folder. ***The command for associating node with a project is `npm init`***. The `npm init` command will start a brief wizard that will ask a series of questions about the project being created &mdash; the answers to these questions will not affect node's operation and can be changed later. All `npm init` really does is create a configuration file named `package.json` and fill out a few basic configuration options in it. node could be established in a project by writing an `package.json` file by hand, but that is not recommended.

The default `package.json` file, as of `npm` version 6.10.2, is below:

```js
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Having a `package.json` file, and, therefore, running `npm init`, is a prerequisite for installing `npm` packages.

### `npm install`

To install a package, run `npm install` followed by the name of the package. `npm` will create a folder named `node_modules` and install the package's source code there. `npm` will also document the new dependency in `package.json`.

By default `npm` will document the new dependency in an object labeled "dependencies", but, if the package was installed with the `--save-dev` flag, it will instead put the dependency in another object, "devDependencies". Build systems, which can take various separate JavaScript file and combine them into one, browser-friendly package, can take advantage of this distinction to only package in certain libraries, like test tools and linters, for development builds, shrinking the number of dependencies in the final product and, subsequently, shrinking its size. Using the `--dev-dependency` flag for certain packages isn't essential, but understanding it and using it will create better code in the long run.

In most projects of any size, the `node_modules` folder will rapidly balloon into a fairly large directory, and that increased size can make transferring the project much more difficult. To address this, `node_modules` is often listed in the project's `.gitignore` file, and the entire set of dependencies is installed fresh based on the `package.json` documentation every time the package's source code is downloaded. Running `npm install`, without any arguments, will check that all depencies listed in `package.json` are installed correctly and install any missing packages.

Aside from the `--save-dev` flag, `npm install` can also take a `-g` flag, which will initialize a `node_modules` folder in your home directory and save the relevant file there. Although the documentation for some tools recommends this, it is rarely the best option, as packages installed both globally and locally often have different versions and can create confusion for the developer, and because when a project relies on a global dependency, it's relying on a dependency that isn't documented in `package.json`, which makes that package less portable.

A reminder: `npm init` and `npm install` will handle all updates to `package.json` automatically. There are reasons to manually edit `package.json`, but creation and package installation are automated.

## Babel

### Installation

As mentioned earlier, Babel is a suite of transpilation tools. The key part is `@babel/core`, and the command line tool to control is is `@babel/cli`. Because Babel is a build tool and is not directly invoked in the finished project, it is safe to list it as a dev-dependency. Putting all of that together, a sample installation would be `npm install --save-dev @babel/core @babel/cli`.

### Configuration

#### `npm` scripts

`@babel/cli` provides a command, `babel`, which takes, as an argument, the name of the directory it will read recursively for JavaScript files to transpile. If the `babel` command receives the `-d` flag, it will accept, as a second argument, the name of the directory into which it should put transpiled files. `babel`, however, is a node tool, not a traditional command line tool, and so calling `babel` from the command line will not succeed. Instead, any `babel` commands a developer expects to use (or, indeed, any node tool commands) should be entered into the scripts object in `package.json`, with the command itself as a value and the command's nickname as a key. Here's a sample scripts object:

```js
"scripts": {
  "transpile": "babel SOURCE_DIRECTORY -d TARGET_DIRECTORY",
},
```

To use any of the scripts written in the scripts object, simply run `npm run` followed by the script's nickname.

> A note on running Babel: directly running Babel with `@babel/cli`, as documented here, is actually a relative rarity in real world development. For the most part, developers will configure and interact with higher level build tools that configure and run things like Babel by themselves. Babel is, however, a good tool for practicing `npm`'s installation and configuration process.

#### Configuring Input

Currently, if it works at all, Babel is just taking files from one place and putting them in another, or is doing some default transpilation that shouldn't really be relied on. It needs to be configured further, both with what features it should expect in its input and with what browsers it should target in its output.

To configure its input expectations, Babel uses two related types of modules: plugins and presets. An individual Babel plugin allows Babel to transpile an individual JavaScript feature, such as template literals. Because it would be frustrating to keep track of plugins for every feature that, for instance, Internet Explorer does not support, Babel (and other developers) also combines groups of plugins into presets, like [`preset-env`](https://babeljs.io/docs/en/babel-preset-env), which provides support for most stable JavaScript features, and [`preset-react`](https://babeljs.io/docs/en/babel-preset-react), which provides the core functionality needed to tranpile React programs.

Because plugins do not ship with `babel-core`, they must be installed separately. As an example, to install `preset-env`, run `npm --save-dev @babel/preset-env`.

Even if plugins are installed, Babel still must be configured to use them. This can be done in [several ways](https://babeljs.io/docs/en/config-files/), but, as a node program, the most idiomatic is to configure it in `package.json`. To configure it there, just add an object labeled "babel" to the root level of the `package.json` object. Remember that `package.json` is a JSON object rather than a JavaScript object, so object keys should be enclosed in double quotes. This `"babel"` object accepts an entry, `"presets"`, that should be an array of the names of each preset that Babel should use:

```js
{
  // various other configuration options, like "name", might go up here

  "babel": {
    "presets": ["@babel/preset-env"]
  },

  // as an object, key order doesn't matter, so configuration options can appear anywhere relative to each other,
  // so long as they're in the same object

  // P.S.: Don't put comments in JSON!
}
```

Sometimes developers might want to use upcoming JavaScript features that aren't fully stable, which is to say that the features may not have passed completely through the Ecma approval process. Rather than bundling these features into presets, Babel has recently begun recommending that they each be installed as their own individual plugin. Installing them is the same as installing a preset, and configureing them is nearly the same: rather than going in the `"presets"` array, they go in a separate `"plugins"` array.

If, for instance, a developer wanted to write code using the [Stage 3 Proposal](https://tc39.es/process-document/) [Instance Fields](https://developer.mozilla.org/en-US/docs/Class_Elements#Public_instance_fields), which adds new ways to add fields to classes in JavaScript and so can remove a lot of boilerplate in React, the developer would first run `npm install --save-dev @babel/plugin-proposal-class-properties`, and would then update the `"babel"` object in their `package.json` file to include `"@babel/plugin-proposal-class-properties"` in a `"plugins"` array:

```js
{
  // other stuff 
  "babel": {
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
  },
  //other stuff
}
```

In the future, if a plugin feature is adopted as an official part of JavaScript, then its plugin will be bundled into `preset-env`.

#### Configuring Output

If input was configured correctly, Babel now knows how to transpile the features it will encounter. It does not, however, know what features will be natively supported in the browsers the final application is being targeted at. To specify this, use [browserslist](https://github.com/browserslist/browserslist), which is a config format used by a variety of node tools targeting front end development that specifies which browsers are to be supported. browserslist will be an array of strings in the `package.json` object, labelled `"browserslist"`. Each string will be a directive, in a precisely defined format, meant to define which browsers are supported. Some of the most frequently used directive types are
- percent selection: a string specifying what percentage of market share a browser is required to have to be supported. browserslist recommends supporting browsers with greater than .2%, which would be specified with the string `"> .2%"`
- last x versions: a string specifying how currently updated a browser should be for support. To support the last 3 versions, the string would be `"last 3 versions"`. This is only useful in specific circumstances, and in conjunction with other rules, since, for instance, a Chrome installation that is 10 versions out of date is likely still much more up to date than the most updated version of Internet Explorer
- `"not dead"`: this removes support for any browsers that have not received updates for at least two years
- browser name and version: a browser can be named directly, which will override all other rules and provide support for that browser. To be safe, check browserslist's documentation for browserslist's version of a browser's name. For instance, to ensure support for Internet Explorer 11, use `"ie 11"`

So, a `package.json` for a project that supports browsers with greater than .2 percent of the market, that aren't dead, and includes Internet Explorer 10, would look like

```js
{
  // other stuff

  "browserslist": [
    '> .2%',
    'not dead',
    'ie 10'
  ]

  // other stuff
}
```

Although browserslist is an independent configuration format, it is included with Babel and does not require installation. Simply add the configuration to `package.json` and Babel will take care of the rest.

## Polyfills

Sometimes transpilation is not the best way to provide support for a feature. Rather than transpiling JavaScript features to work using older features, it might be necessary to implement the new feature in a browser. This is called a polyfill or a shim. Babel previously provided a polyfilling tool, but, because it was just a wrapper around another library, `core-js`, Babel is deprecating their polyfilling feature in favor of recommending using `core-js` directly. To use `core-js`, simply `npm install core-js`, and then, at the top of the JavaScript file that needs support, add `import 'core-js';`. A few notes:
- the `import` syntax is not supported in browsers, but support for it will be covered in future lessons
- importing the entire core-js library rather than only polyfilling the features needed for the project is inefficient and will make the final product larger than necessary. core-js can be configured to only import necessary modules, but, at the time of this writing, it is in the process of transition from version 2 to version 3, and its documentation is somewhat messy. Optimizing final package size is certainly something to consider in a project, but should not be a priority for someone first learning the toolset.
- there are certain features, like [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), that cannot be transpiled ***or*** polyfilled. Be aware of this and check on it before implementing a new feature in a project.
