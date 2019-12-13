import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import FootballPlayerFinder from './containers/FootballPlayerFinder/FootballPlayerFinder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <FootballPlayerFinder />
        </Layout>
      </div>
    );
  }
}

export default App;
