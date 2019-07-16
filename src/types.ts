/* tslint:disable */
/* eslint-disable */
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
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
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

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
