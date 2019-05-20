import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import User from '../components/User';
import Repo from '../components/Repo';
import gql from 'graphql-tag';

const REPO_QUERY = gql`
  query user($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      description
      owner {
        login
      }
      stargazers(last: 20, orderBy: { field: STARRED_AT, direction: ASC }) {
        nodes {
          login
          name
          avatarUrl
        }
      }
    }
    # marketplaceListing(slug: "apollo-engine") {
    #   hasApprovalBeenRequested
    # }
  }
`;

const RepoPage = ({ match: { params } }) => {
  const { name, owner } = params;
  const { loading, data, error } = useQuery(REPO_QUERY, {
    variables: { name, owner }
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
      <Repo {...data.repository} />
      <hr />
      {data.repository.stargazers.nodes.map(props => (
        <User key={props.login} {...props} />
      ))}
    </div>
  );
};

export default RepoPage;
