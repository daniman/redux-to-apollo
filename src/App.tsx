import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import Explore from './components/Explore';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

export interface UserRouteParams {
  login: string;
}

export interface PageTypes {
  login: string;
}

const App = () => (
  <div>
    <Route path="/" component={Explore} />
    <hr />
    <Route
      exact={true}
      path="/:login"
      component={({
        match: {
          params: { login }
        }
      }: RouteComponentProps<UserRouteParams>) => <UserPage login={login} />}
    />
    <Route path="/:owner/:name" component={RepoPage} />
  </div>
);
export default App;
