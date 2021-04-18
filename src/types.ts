/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Repository
// ====================================================

export interface Repository_repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface Repository_repository_stargazers_nodes {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

export interface Repository_repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * A list of nodes.
   */
  nodes: (Repository_repository_stargazers_nodes | null)[] | null;
}

export interface Repository_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The User owner of the repository.
   */
  owner: Repository_repository_owner;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: Repository_repository_stargazers;
}

export interface Repository {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: Repository_repository | null;
}

export interface RepositoryVariables {
  name: string;
  owner: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DemoQuery
// ====================================================

export interface DemoQuery_user_repositories_edges_node_primaryLanguage {
  __typename: "Language";
  /**
   * The color defined for the current language.
   */
  color: string | null;
  /**
   * The name of the current language.
   */
  name: string;
}

export interface DemoQuery_user_repositories_edges_node_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface DemoQuery_user_repositories_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface DemoQuery_user_repositories_edges_node {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: DemoQuery_user_repositories_edges_node_primaryLanguage | null;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: DemoQuery_user_repositories_edges_node_issues;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: DemoQuery_user_repositories_edges_node_stargazers;
}

export interface DemoQuery_user_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: DemoQuery_user_repositories_edges_node | null;
}

export interface DemoQuery_user_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (DemoQuery_user_repositories_edges | null)[] | null;
}

export interface DemoQuery_user {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * A list of repositories that the user owns.
   */
  repositories: DemoQuery_user_repositories;
}

export interface DemoQuery {
  /**
   * Lookup a user by login.
   */
  user: DemoQuery_user | null;
}

export interface DemoQueryVariables {
  userLogin: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_repositories_edges_node_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UserQuery_user_repositories_edges_node {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: UserQuery_user_repositories_edges_node_issues;
}

export interface UserQuery_user_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: UserQuery_user_repositories_edges_node | null;
}

export interface UserQuery_user_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (UserQuery_user_repositories_edges | null)[] | null;
}

export interface UserQuery_user {
  __typename: "User";
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: UserQuery_user_repositories;
}

export interface UserQuery {
  /**
   * Lookup a user by login.
   */
  user: UserQuery_user | null;
}

export interface UserQueryVariables {
  userLogin: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
