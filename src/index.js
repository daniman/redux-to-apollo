import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import './index.css';
import App from './App';
import keys from './keys';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${keys.github}`
  }
});
const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
