import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import User from '../components/User';
import Repo from '../components/Repo';
import { UserRouteParams } from '../App';

import * as Types from '../../__generated__/User';
const USER_QUERY = gql`
  query User($login: String!) {
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

const UserPage = ({
  match: {
    params: { login }
  }
}: RouteComponentProps<UserRouteParams>) => {
  const { loading, data, error } = useQuery<Types.User>(USER_QUERY, {
    variables: { login }
  });

  if (loading) return <div>Loading...</div>;
  if (error || !data || !data.user)
    return (
      <h1>
        <i>Nothing here!</i>
      </h1>
    );

  const nodes = data.user.starredRepositories.nodes;
  return (
    <div>
      <User {...data.user} />
      <hr />
      {nodes &&
        nodes.map(
          repo =>
            repo && (
              <Repo
                key={`${repo.owner}/${repo.name}`}
                name={repo.name}
                description={repo.description}
                owner={repo.owner}
              />
            )
        )}
    </div>
  );
};

export default UserPage;
