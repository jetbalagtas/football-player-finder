import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initPlayersSaga } from './footballPlayerFinder';

export function* watchFootballPlayerFinder() {
  yield takeEvery(actionTypes.INIT_PLAYERS, initPlayersSaga);
}
