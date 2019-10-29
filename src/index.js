import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import keys from './keys';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import gql from 'graphql-tag';

gql`
  extend type User {
    costume: String!
  }
`;

const resolvers = {
  User: {
    costume: () => (Math.random() > 0.5 ? 'dragon' : 'unicorn')
  }
};

const client = new ApolloClient({
  resolvers,
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${keys.github}`
  },
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
