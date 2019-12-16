import React, { Component, useEffect } from 'react';

import Layout from './components/Layout/Layout';
import FootballPlayerFinder from './containers/FootballPlayerFinder/FootballPlayerFinder';
import { connect } from 'react-redux';
import * as actions from './store/actions';

const App = props => {
  console.log('APP PROPS: ', props);
  
  useEffect(() => {
    props.onGetAllPlayers();
  }, [props]);

  return (
    <div>
      <Layout>
        <FootballPlayerFinder {...props} />
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllPlayers: () => dispatch(actions.getAllPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//           <FootballPlayerFinder />
//         </Layout>
//       </div>
//     );
//   }
// }

// export default App;
