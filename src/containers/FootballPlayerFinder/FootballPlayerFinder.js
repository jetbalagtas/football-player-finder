import  React, { useState, useEffect, Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import FootballPlayers from '../../components/FootballPlayers/FootballPlayers';
import FilterSearchControls from '../../components/FilterSearchControls/FilterSearchControls';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-players';
import * as actions from '../../store/actions/index';

// const FootballPlayerFinder = (props) => {
//   console.log('PROPS: ', props);
  
//   const [players, setPlayers] = useState(props.playas);

//   useEffect(() => {
//     setPlayers(props.onGetAllPlayers());
//   }, [props]);

//   let footballPlayers = props.error ? <p>Players can't be loaded. Please try refreshing the page.</p> : <Spinner />;
//   if (props.playas) {
//     footballPlayers = (
//       <Aux>
//         <FilterSearchControls playerFind={props.onFindPlayer} />
//         <FootballPlayers players={props.playas}/>
//       </Aux>
//     );
//   }

//   return (
//     <Aux>
//       {footballPlayers}
//     </Aux>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     playas: state.footballPlayerFinder.players
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onGetAllPlayers: () => dispatch(actions.getAllPlayers()),
//     onFindPlayer: (player) => dispatch(actions.findPlayer(player))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FootballPlayerFinder, axios));


class FootballPlayerFinder extends Component {
  state = {
    players: []
  }

  componentDidMount () {
    axios.get('https://football-players-b31f2.firebaseio.com/players.json')
      .then(response => {
        this.setState({players: response.data});
        console.log(response);
      });
  }

  render () {
    const players = this.state.players;
    
    return (
      <Aux>
        <FilterSearchControls />
        <FootballPlayers players={players}/>
      </Aux>
    );
  }
}

export default FootballPlayerFinder;
