## GraphQL + React + TypeScript with Apollo

Simple app built on the GitHub GraphQL API with React, Apollo, and TypeScript. Project bootstrapped with `create-react-app`.

### Configure your app

Before you can run the app, you'll need to:

- Get a **GitHub personal access token**
- Get an **Apollo API key**

#### GitHub personal access token

Get a (personal access token from your GitHub account)[https://github.com/settings/tokens], create a file called `src/key.js`, and put your token in it like so:

```
export default {
  github: 'aaBBccDDeeee_YOUR_GITHUB_TOKEN_eeeeZZ'
};
```

#### Apollo API key

To get the full value of schema intellisense from the Apollo VS Code extension, you'll want to set up a graph in Apollo's graph manager and point your VS Code editor to that graph by creating an `apollo.config.js` file in your repository. We will follow the steps for that here using the GitHub GraphQL API.

**Create a graph in Graph Manager to get an Apollo API key.**

First, [log in to Apollo Graph Manager](https://engine.apollographql.com) and follow the steps through the creation of your account. Then click "Create your first graph".

The first step of creating a graph in Graph Manager is to push your schema. Since we're using the GitHub API, you can run the following command (substituting in your new graph's API key and your GitHub access token):

```
npx apollo service:push \
--endpoint=https://api.github.com/graphql \
--key="service:aaaaaa:bbCCdd_APOLLO_API_KEY_eeFFgg" \
--header="Authorization: bearer aaBBccDDeeee_YOUR_GITHUB_TOKEN_eeeeZZ"
```

**Configure the Apollo extension for your VS Code editor**

Once your graph is set up on Graph Manager, we can configure your VS Code editor's to look at the schema you've just pushed and become "GraphQL intelligent".

To do so, create a `.env` file in the root of your project and put your graph's API key in it:

```
ENGINE_API_KEY=<ENGINE_API_KEY>
```

Then you'll be ready to run the app!

> It's important to rememeber that your GitHub access token is extremely valuable and something you should keep a secret. While it's OK to use it in local development in the way I've described, you should _NOT_ host this app anywhere publicly. If you do, your personal GitHub token will be leaked. If you want to host this app publicly, you will need to integrate your app with GitHub OAuth so that your personal access token does not end up in your JavaScript bundle.

### Running the app

To run the app:

```
npm install && npm start
```
