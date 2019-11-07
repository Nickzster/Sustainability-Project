# ENVS100 SUSTAINABILITY PROJECT!

In order to develop for the sustainability project, you will need to install some stuff:

- Node.js (you can find it [here](https://nodejs.org/en/))
- NPM (comes with Node.js)
- Yarn (see below for instructions)
- Git
- VSCode (you can find it [here](https://code.visualstudio.com/))

After everything is installed, you can run

```sh
npm i -g yarn
```

to install Yarn.

When you enter VSCode, please install the recommended extensions:

- Prettier

Once prettier is installed, there are two things you need to do:

1. Make sure that quotes are set to single. (These can be configured by opening your settings (`ctrl + ,`) and typing `quotes` )
2. Make sure that your editor is set to format on save. (This can be configured by opening your settings and typing in `format on save`)

Some other extensions I like that help me read code easier, but not required:

- Bracket Pair Colorizer 1 OR Bracket Pair Colorizer 2 (faster parsing)
- Indent-Rainbow

You should be ready to go now.

## Set up your environment: Project Setup

Setting up the project on your local machine is very easy. There are three simple steps to do this:

1. Fork the repository
2. Clone your fork via `git`
3. Run `yarn` to install the dependencies.

## Knowledge Material

To help navigate your way around the codebase, it will be easier if you are familiar with the following tools:

- [Javascript](https://www.w3schools.com/js/default.asp) - Primary Development Language
- [React](https://reactjs.org/) - Primary Front End Framework
- [React Hooks](https://reactjs.org/hooks)
- Basic [HTML](https://www.w3schools.com/html/default.asp) / [CSS](https://www.w3schools.com/css/default.asp)

This list is subject to change, as the website grows.

## Making your changes

You should be ready to make some changes. To make the editing process as easy as possible, I have a workflow that I follow:

1. Open my terminal
2. `cd` into sustainability-project
3. Open Visual Studio Code [via the command line](https://code.visualstudio.com/docs/editor/command-line) : `code .`
4. `cd` into website.
5. use `yarn start` to start the development server
6. Make my changes and watch as they appear on the development server!
