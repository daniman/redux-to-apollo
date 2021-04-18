import React from "react";
import User from "../components/User";
import { PageTypes } from "../App";
import { gql, useQuery } from "@apollo/client";

const UserPage: React.FC<PageTypes> = ({ userLogin }) => {
  const { data, loading } = useQuery(
    gql`
      query UserQuery($userLogin: String!) {
        user(login: $userLogin) {
          avatarUrl
          login
          name
          repositories(last: 100) {
            edges {
              node {
                name
                issues {
                  totalCount
                }
              }
            }
          }
        }
      }
    `,
    { variables: { userLogin } }
  );

  if (loading) return <div className="loading">Loading…</div>;

  return <User {...data.user} />;
};

export default UserPage;
