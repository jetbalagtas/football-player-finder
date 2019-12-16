import { takeEvery } from 'redux-saga/effects';
import axios from '../../axios-players';

import * as actions from '../actions';

export function* initPlayersSaga(action) {
  console.log('ACTION: ', action);
  
  try {
    const response = yield axios.get('players.json');
    yield takeEvery(actions.getAllPlayers(response.data));
  } catch (error) {
    yield takeEvery(actions.fetchPlayersFailed());
  }
}
