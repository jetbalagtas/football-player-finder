import  React, { Component } from "react";

import Aux from '../../hoc/Aux';
import FootballPlayers from '../../components/FootballPlayers/FootballPlayers';

class FootballPlayerFinder extends Component {
  render () {
    return (
      <Aux>
        <div>Filter/Search Controls</div>
        <FootballPlayers />
      </Aux>
    );
  }
}

export default FootballPlayerFinder;
