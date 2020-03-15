# Blog example with React and Redux

This is an example application to demonstrate how Redux and some other popular libraries can be used in a React application. Please see below for features and tech stack of the application.  

## Features of application

- **Blog**
  - Read and ~~Write~~ blog posts (*Writing is In Progress*)
  - Read and Write comments to blog posts

- **Token based authentication:**
  - Login to protect routes from unauthorized users.
  - Singup to create new users

- **REST Api:**
  - Fully mocked api, no dependency to a backend application.
  - Examples of `GET`, `POST`, `PUSH` and `DELETE` requests

- **Notifications:**
  - Success and Error messages to notify user about api call results.

## Tech Stack

- **[React](https://reactjs.org/)**
  - Hooks
  - Bootstrapped via [Create React App](https://create-react-app.dev/)

- **[Redux](https://redux.js.org/)**
  - [Redux-Saga](https://redux-saga.js.org/) is used for side effects
  - [reselect](https://github.com/reduxjs/reselect) is used to get data from store to components.

- **[TypeScript](https://www.typescriptlang.org/)**
  - `yarn tsc` command can be used in development or at CI pipeline to check type and other TypeScript related errors.

- **[Material-UI](https://material-ui.com/)**
  - Material components and icons are used.

- **[json-server](https://github.com/typicode/json-server)**
  - Fully mocked API
  - Custom routes added to enable token based authentication via [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken). Passwords are ignored at mock api.

- **[Husky](https://github.com/typicode/husky)**
  - pre-commit hook to style files with [Prettier](https://prettier.io/) before each commit to be created.
  - [lint-staged](https://github.com/okonet/lint-staged) is used to change style of only staged files.

## Available Scripts

In the project directory, you can run (after installing dependencies via `yarn install`):

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`3000` and `3001` ports are needed to start the application.

### ~~`yarn test`~~

Not available at the moment. Tests should be added.

### `yarn build`

Builds the app for production to the `build` folder.<br />

### `yarn lint`

Checks linting errors

### `yarn tsc`

Checks Typescript errors

### `yarn prettier`

Styles all files by re-writing according to defined style rules.

## Next Steps

- Write, delete, update a blog post
- Unit testing
- Storybook
