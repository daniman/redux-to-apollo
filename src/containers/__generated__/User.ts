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
