import React from "react";
import { PageTypes } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { gql, useQuery } from "@apollo/client";
import * as Types from '../types';

const UserPage: React.FC<PageTypes> = ({ userLogin }) => {
  const data: Types.DemoQuery = {
    user: {
      __typename: "User",
      name: "Hello World",
      login: "Hello World",
      avatarUrl: "https://i.imgur.com/n2c44i5.jpg",
      repositories: {
        __typename: "RepositoryConnection",
        edges: [
          { __typename: "RepositoryEdge", node: { __typename: "Repository", primaryLanguage: { __typename: "Language", color: "#ccc", name: "Hello World" }, name: "Hello World", description: "Hello World", issues: { __typename: "IssueConnection", totalCount: 34 }, stargazers: { __typename: "StargazerConnection", totalCount: 7 } } },
          { __typename: "RepositoryEdge", node: { __typename: "Repository", primaryLanguage: { __typename: "Language", color: "#ccc", name: "Hello World" }, name: "Hello World", description: "Hello World", issues: { __typename: "IssueConnection", totalCount: 34 }, stargazers: { __typename: "StargazerConnection", totalCount: 7 } } },
          { __typename: "RepositoryEdge", node: { __typename: "Repository", primaryLanguage: { __typename: "Language", color: "#ccc", name: "Hello World" }, name: "Hello World", description: "Hello World", issues: { __typename: "IssueConnection", totalCount: 34 }, stargazers: { __typename: "StargazerConnection", totalCount: 7 } } },
          { __typename: "RepositoryEdge", node: { __typename: "Repository", primaryLanguage: { __typename: "Language", color: "#ccc", name: "Hello World" }, name: "Hello World", description: "Hello World", issues: { __typename: "IssueConnection", totalCount: 34 }, stargazers: { __typename: "StargazerConnection", totalCount: 7 } } },
          { __typename: "RepositoryEdge", node: { __typename: "Repository", primaryLanguage: { __typename: "Language", color: "#ccc", name: "Hello World" }, name: "Hello World", description: "Hello World", issues: { __typename: "IssueConnection", totalCount: 34 }, stargazers: { __typename: "StargazerConnection", totalCount: 7 } } },
        ]
      }
    }
  }

  if (!data || !data.user) return <div>User not found</div>;

  return (
    <div className="page">
      <img
        src={data.user.avatarUrl}
        className="avatar"
      />
      <div className="name">{data.user.name}</div>
      <div className="login">{data.user.login}</div>
      {data.user.repositories.edges && data.user.repositories.edges.map((edge) => (
        <Repository node={edge && edge.node} />
      ))}
    </div>
  );
};




































const Repository: React.FC<{ node?: Types.DemoQuery_user_repositories_edges_node | null }> = ({ node }) => {
  if (!node) return null;
  return (
    <div
      style={{
        border: "1px solid #e1e4e8",
        borderRadius: 6,
        marginBottom: 20,
        padding: 16,
        width: "100%",
      }}
    >
      <div>
        <a
          href={`https://github.com/daniman/${node.name}`}
          style={{ fontSize: 14, textDecoration: "none" }}
        >
          <span
            style={{
              color: "rgb(3,102,214)",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {node.name}
          </span>
        </a>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgb(88,96,105)",
          marginTop: 8,
          marginBottom: 16,
        }}
      >
        {node.description}
      </div>
      <div style={{ display: "flex" }}>
        <div className="metadata">
          <div
            className="color-patch"
            style={{
              backgroundColor: node.primaryLanguage && node.primaryLanguage.color || "#fff",
            }}
          />
          <span className="value">{node.primaryLanguage && node.primaryLanguage.name}</span>
        </div>
        <div className="metadata">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span className="value">{node.issues.totalCount}</span>
        </div>

        <div className="metadata">
          <FontAwesomeIcon icon={faStar} />
          <span className="value">{node.stargazers.totalCount}</span>
        </div>
      </div>
    </div>
  )
};

export default UserPage;
