## GraphQL + React + TypeScript with Apollo

Simple app built on the GitHub GraphQL API with React, Apollo, and TypeScript. Project bootstrapped with `create-react-app`.

### Configure your app

#### 1. GitHub personal access token

Get a [personal access token from your GitHub account](https://github.com/settings/tokens), create a file called `src/key.js`, and put your token in it like so:

```
module.exports = {
  github: 'aaBBccDDeeee_YOUR_GITHUB_TOKEN_eeeeZZ'
};
```

We will use this to authenticate our queries against the GitHub API.

It's important to note that **your GitHub access token is extremely valuable and something you should keep a secret**. The way we're using it here for local development is OK, but you should _NOT_ host this app anywhere publicly. If you do, your personal GitHub token will be leaked. If you want to host this app publicly, you will need to integrate your app with GitHub OAuth so that your personal access token does not end up in your JavaScript bundle.

#### 2. Set up your apollo.config.js

To get the full value of schema intellisense from the Apollo VS Code extension, we will need to make our editor aware of the GitHub API's schema. To do this, we'll add an `apollo.config.js` to the root of our project:

```
const keys = require('./src/keys');

module.exports = {
  client: {
    service: {
      name: 'github',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: `bearer ${keys.github}`
      },
      skipSSLValidation: true
    }
  }
};
```

### Running the app

To run the app:

```
npm install && npm start
```

If you're making changes to your queries and want TypeScript types to be generated for you, start this process (it'll watch your files and keep running and generating new types for you as long as it's running):

```
npm run apollo:codegen
```
