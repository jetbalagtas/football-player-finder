import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';
import axios from 'axios';

const intitialState = {
  players: []
};

const getAllPlayers = () => {
  const allPlayers = axios.get('https://football-players-b31f2.firebaseio.com/players.json')
    .then(response => {
      console.log('RESPONSE: ', response);
      return response.data;
    });
    return allPlayers;
}

// const getAllPlayers = (state, action) => {
//   console.log('state: ', state);
//   console.log('action: ', action)
//   const allPlayers = {[action.players]: state.players[action.players]};
//   const updatedPlayers = updateObject(state.players, allPlayers);
//   const updatedState = {
//     players: updatedPlayers,
//   };
//   return updateObject(state, updatedState);
// }

const findPlayer = (state, action) => {
  const foundPlayers = {[action.player]: state.players[action.player]};
  const updatedPlayers = updateObject(state.players, foundPlayers);
  const updatedState = {
    players: updatedPlayers,
  };
  return updateObject(state, updatedState);
};

// const filterPosition = (state, action) => {
//   const filteredPlayers = {[action.players]: state.players[action.players]};
//   const updatedPlayers = updateObject(state.players, filteredPlayers);
//   const updatedState = {
//     players: updatedPlayers
//   }
//   return updateObject(state, updatedState);
// };

// const findByJersey = (state, action) => {
//   const foundJerseys = {[action.players]: state.players[action.players]};
//   const updatedPlayers = updateObject(state.players, foundJerseys);
//   const updatedState = {
//     players: updatedPlayers
//   }
//   return updateObject(state, updatedState);
// };

const fetchPlayersFailed = (state, action) => {
  return updateObject(state, {error: true});
};

const footballPlayerFinderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PLAYERS: return getAllPlayers();
    case actionTypes.FIND_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.player]: state.players[action.player]
        }
      };
    // case actionTypes.FILTER_POSITION: return filterPosition(state, action);
    // case actionTypes.FIND_BY_JERSEY: return findByJersey(state, action);
    // case actionTypes.FETCH_PLAYERS_FAILED: return fetchPlayersFailed(state, action);
    default: return state;
  }
};

export default footballPlayerFinderReducer;
