An example app with Apollo and TypeScript built using `create-react-app`. To run, you'll need a GitHub personal access token and an Apollo API key.

First, get a [GitHub personal access token](https://github.com/settings/tokens) and create a file called `src/key.js` with the following content:

```
export default {
  github: 'aaBBccDDeeee_YOUR_GITHUB_TOKEN_eeeeZZ'
};
```

Then, visit [this graph in Engine](https://engine.apollographql.com/service/github/settings) and create a `.env` file at the root of your project with one if its API keys:

```
ENGINE_API_KEY=<ENGINE_API_KEY>
```

Then:

```
npm install
```

Lastly, and this is a HUGE HACK. You'll need to "cmd-click" the `useQuery` hook from `RepoPage.tsx` file to hop to the `useQuery.d.ts` file in your `node_modules`. Then, just change the contents of that file to this:

```
import { QueryResult } from '@apollo/react-common';
import { DocumentNode } from 'graphql';
export declare function useQuery<TData = any, TVariables = any>(
  query: DocumentNode,
  props?: any
): QueryResult<TData, TVariables>;
```

This adds TypeScript support to our Apollo `useQuery` hook. We'll find a better way to do this in the future.

Then:

```
https://github.com/daniman/redux-to-apollo
```

With any luck, you'll be up and running :)
