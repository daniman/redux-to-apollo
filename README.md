An example app with Apollo and TypeScript built using `create-react-app`. To run, you'll need a GitHub personal access token and an Apollo API key.

First, get a [GitHub personal access token](https://github.com/settings/tokens) and create a file called `src/key.js` with the following content:

```
export default {
  github: 'aaBBccDDeeee_YOUR_GITHUB_TOKEN_eeeeZZ'
};
```

Then visit [this graph in Engine](https://engine.apollographql.com/service/github/settings) and create a `.env` file at the root of your project with one if its API keys:

```
ENGINE_API_KEY=<ENGINE_API_KEY>
```

Then:

```
npm install
npm start
```
