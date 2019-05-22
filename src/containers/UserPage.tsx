import React from 'react';
import gql from 'graphql-tag';
import User from '../components/User';
import { PageTypes } from '../App';
import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import * as ApolloTypes from './__generated__/User';

const USER_QUERY = gql`
  query User($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      isTrueKing @client
    }
  }
`;

const UserPage = ({ login }: PageTypes) => {
  const { loading, data }: QueryResult<ApolloTypes.User> = useQuery(USER_QUERY, { variables: { login } });

  if (loading) return <div>Loading...</div>;
  if (!data || !data.user) return <div>Not found :(</div>;

  return (
    <User
      isTrueKing={data.user.isTrueKing}
      name={data.user.name}
      login={data.user.login}
      avatarUrl={data.user.avatarUrl}
    />
  )
};


export default UserPage;
