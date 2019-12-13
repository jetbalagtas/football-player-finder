import  React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import FootballPlayers from '../../components/FootballPlayers/FootballPlayers';

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
        <div>Filter/Search Controls</div>
        <FootballPlayers players={players}/>
      </Aux>
    );
  }
}

export default FootballPlayerFinder;
