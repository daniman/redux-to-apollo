import React from "react";
import { Link } from "react-router-dom";

interface Repositories {
  edges: Repository[];
}

interface Repository {
  node: RepositoryNode;
}

interface RepositoryNode {
  name: String;
  issues: IssuesConnection;
}

interface IssuesConnection {
  totalCount: number;
}

interface User {
  login: string;
  avatarUrl: string;
  name: string | null;
  costume?: string;
  repositories?: Repositories;
}

const User = ({ login, avatarUrl, name, repositories }: User) => (
  <div style={{ margin: 20 }}>
    <img
      src={avatarUrl}
      alt={login}
      width="140"
      height="140"
      style={{ borderRadius: 130 }}
    />
    <div style={{ fontSize: 26, fontWeight: 600, marginTop: 10 }}>{name}</div>
    <div
      style={{
        fontSize: 20,
        fontWeight: 400,
        color: "rgba(88,96,105)",
        marginBottom: 10,
      }}
    >
      {login}
    </div>
    {repositories && (
      <div style={{ fontWeight: 600, marginBottom: 2, marginTop: 8 }}>
        {repositories.edges.length} repositories
      </div>
    )}
    {repositories &&
      repositories.edges.map(({ node }) => (
        <div>
          <a
            href={`https://github.com/daniman/${node.name}`}
            style={{ fontSize: 14, textDecoration: "none" }}
          >
            <span
              style={{
                color: "rgb(3,102,214)",
              }}
            >
              {node.name}
            </span>
            <span
              style={{ marginLeft: 8, fontSize: 10, color: "rgba(88,96,105)" }}
            >
              {node.issues.totalCount} issue
              {node.issues.totalCount === 1 ? "" : "s"}
            </span>
          </a>
        </div>
      ))}
  </div>
);

export default User;
