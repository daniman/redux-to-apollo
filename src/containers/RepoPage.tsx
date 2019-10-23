import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import User from '../components/User';
import Repo from '../components/Repo';

import * as Types from '../types';
const REPO_QUERY = gql`
  query Repository($name: String!, $owner: String!) {
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

interface RepoRouteParams {
  owner: string;
  name: string;
}

const RepoPage = ({
  match: {
    params: { name, owner }
  }
}: RouteComponentProps<RepoRouteParams>) => {
  const { loading, data, error } = useQuery<Types.Repository>(
    REPO_QUERY,
    {
      variables: { name, owner }
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data || !data.repository)
    return (
      <h1>
        <i>Nothing here!</i>
      </h1>
    );

  const nodes = data.repository.stargazers.nodes;
  return (
    <div>
      <Repo {...data.repository} />
      <hr />
      {nodes &&
        nodes.map(props => props && <User key={props.login} {...props} />)}
    </div>
  );
};

export default RepoPage;
