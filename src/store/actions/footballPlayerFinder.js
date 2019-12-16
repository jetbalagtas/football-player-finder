import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAllPlayers = (players) => {
  return {
    type: actionTypes.GET_ALL_PLAYERS,
    players: players
  };
};

// export const receivePlayers = (players) => {
//   return {
//     type: actionTypes.RECEIVE_PLAYERS,
//     players,
//   }
// }

export const fetchPlayers = (players) => {
  return dispatch => {
    dispatch(getAllPlayers(players))
    return axios.get('https://football-players-b31f2.firebaseio.com/players.json')
      .then(response => response.json());
  }
}

export const findPlayer = (player) => {
  return {
    type: actionTypes.FIND_PLAYER,
    players: player
  };
};

// export const filterPosition = (position) => {
//   return {
//     type: actionTypes.FILTER_POSITION,
//     players: position
//   };
// };

// export const findByJersey = (jersey) => {
//   return {
//     type: actionTypes.FIND_BY_JERSEY,
//     players: jersey
//   };
// };

export const fetchPlayersFailed = () => {
  return {
    type: actionTypes.FETCH_PLAYERS_FAILED
  };
};

export const initPlayers = () => {
  return {
    type: actionTypes.INIT_PLAYERS
  }
};
