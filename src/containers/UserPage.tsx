import React from 'react';
import gql from 'graphql-tag';
import User from '../components/User';
import { PageTypes } from '../App';
import { useQuery } from '@apollo/client';
import * as Types from '../types';

const USER_QUERY = gql`
  query UserDetails($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      costume @client
    }
  }
`;

const UserPage: React.FC<PageTypes> = ({ login }) => {
  const { data, loading, error } = useQuery<Types.UserDetails>(USER_QUERY, { variables: { login } });

  if (loading) return <text>Loading...</text>;
  if (error) return <text style={{ color: 'red' }}>{error.message}</text>;
  if (!data || !data.user) return <text>Not found :(</text>;

  return (
    <User
      name={data.user.name}
      login={data.user.login}
      avatarUrl={data.user.avatarUrl}
      costume={data.user.costume}
    />
  )
};

export default UserPage;
