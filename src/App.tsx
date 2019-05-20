import React from 'react';
import { Route } from 'react-router-dom';
import Explore from './components/Explore';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

export interface UserRouteParams {
  login: string;
}

export interface RepoRouteParams {
  owner: string;
  name: string;
}

const App = () => (
  <div>
    <Route path="/" component={Explore} />
    <hr />
    <Route exact={true} path="/:login" component={UserPage} />
    <Route path="/:owner/:name" component={RepoPage} />
  </div>
);
export default App;