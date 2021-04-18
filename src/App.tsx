import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import Explore from "./components/Explore";
import UserPage from "./containers/UserPage";
import RepoPage from "./containers/RepoPage";

export interface UserRouteParams {
  login: string;
}

export interface PageTypes {
  userLogin: string;
}

const App = () => (
  <div style={{ padding: 20, maxWidth: 350 }}>
    <Route
      exact={true}
      path="/:login"
      component={({
        match: {
          params: { login },
        },
      }: RouteComponentProps<UserRouteParams>) => (
        <UserPage userLogin={login} />
      )}
    />
    <Route path="/:owner/:name" component={RepoPage} />
  </div>
);
export default App;
