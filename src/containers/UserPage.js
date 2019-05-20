import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import User from '../components/User';
import Repo from '../components/Repo';
import gql from 'graphql-tag';

const USER_QUERY = gql`
  query user($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      name
      starredRepositories(
        last: 100
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          owner {
            login
          }
        }
      }
    }
  }
`;

const UserPage = ({ match: { params } }) => {
  const { login } = params;
  const { loading, data, error } = useQuery(USER_QUERY, {
    variables: { login }
  });

  if (loading) return 'Loading...';
  if (error)
    return (
      <h1>
        <i>Nothing here!</i>
      </h1>
    );

  return (
    <div>
      <User {...data.user} />
      <hr />
      {data.user.starredRepositories.nodes.map(props => (
        <Repo key={`${props.name}/${props.owner.login}`} {...props} />
      ))}
    </div>
  );
};

export default UserPage;
