import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USER = gql`
  query {
    user(login: "daniman") {
      login
    }
  }
`;

function App() {
  return (
    <Query query={GET_USER}>
      {({ data, loading }) => {
        console.log(loading, data);
        return (
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      }}
    </Query>
  );
}

export default App;
