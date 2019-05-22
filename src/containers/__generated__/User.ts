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
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  isTrueKing: boolean | null;
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
