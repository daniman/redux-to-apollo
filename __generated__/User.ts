/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_starredRepositories_nodes_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface User_user_starredRepositories_nodes {
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
  owner: User_user_starredRepositories_nodes_owner;
}

export interface User_user_starredRepositories {
  __typename: "StarredRepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (User_user_starredRepositories_nodes | null)[] | null;
}

export interface User_user {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * Repositories the user has starred.
   */
  starredRepositories: User_user_starredRepositories;
}

export interface User {
  /**
   * Lookup a user by login.
   */
  user: User_user | null;
}

export interface UserVariables {
  login: string;
}
