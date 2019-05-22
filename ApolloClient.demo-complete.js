// import gql from 'graphql-tag';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloClient } from 'apollo-client';
// import keys from './keys';


// const clientSchema = gql`
//   extend type User {
//     isTrueKing: Boolean
//   }
// `;

// const resolvers = {
//   User: {
//     isTrueKing: () => Math.random() > 0.5
//   }
// };

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'https://api.github.com/graphql',
//     headers: {
//       Authorization: `bearer ${keys.github}`
//     }
//   })
// });

// client.addResolvers(resolvers);

// export default client;
