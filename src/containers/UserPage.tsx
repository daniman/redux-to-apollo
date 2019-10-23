import React from 'react';
import gql from 'graphql-tag';
import User from '../components/User';
import { PageTypes } from '../App';
import { useQuery } from '@apollo/client';

const USER_QUERY = gql`
  query User($login: String!) {
    user(login: $login) {
      login
      name
    }
  }
`;

const UserPage = ({ login }: PageTypes) => {
  return (
    <User
      name="Demo Doge"
      login="demodog"
      avatarUrl="https://i.imgflip.com/3e31zq.jpg"
    />
  )
};


export default UserPage;
