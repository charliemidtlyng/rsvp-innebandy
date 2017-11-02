import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from './actions'
import regeneratorRuntime from "regenerator-runtime";
window.regeneratorRuntime = regeneratorRuntime;


var API_ALL = '/api/tournament';

export function fetchPostsApi(apiUrl) {
    return fetch(apiUrl)
            .then(response => response.json() )
            .then(json => json )
}
export function* fetchTournaments() {
  yield put( actions.requestTournaments() );
  const posts = yield call(fetchPostsApi, API_ALL);
  yield put( actions.receiveTournaments(posts) );
}

export function* fetchSelected(action) {
  const posts = yield call(fetchPostsApi, API_ALL);
  yield put( actions.receiveSelectedTournament(posts.find(t => t.id == action.id)) );
}

export default function* root() {
  yield takeEvery(actions.REFRESH_TOURNAMENTS, fetchTournaments);
  yield takeEvery(actions.REFRESH_SELECTED_TOURNAMENT, fetchSelected);
}
