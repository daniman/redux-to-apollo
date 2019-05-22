import React from 'react';
import gql from 'graphql-tag';
import User from '../components/User';
import { PageTypes } from '../App';

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
      name="Jon Snow"
      login="trueking"
      avatarUrl="https://bit.ly/2QclPMo"
    />
  )
};


export default UserPage;
