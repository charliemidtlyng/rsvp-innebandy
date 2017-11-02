import { combineReducers } from 'redux'

import {
    REQUEST_TOURNAMENTS,
    RECEIVE_TOURNAMENTS,
    REFRESH_TOURNAMENTS,
    SELECT_TOURNAMENT,
    RECEIVE_SELECTED_TOURNAMENT, REFRESH_SELECTED_TOURNAMENT,
} from './actions'

const initialState = {
	items: [],
	selected: {},
	selectedId: '',
	loading: false,
	successful: false,
	messages: [],
	errors: [],
};

function fetchTournamentList(state = initialState, action) {
	switch (action.type) {
        case REFRESH_TOURNAMENTS:
		case REQUEST_TOURNAMENTS:
			return {...state, loading: true, items: [] };
		case RECEIVE_TOURNAMENTS:
			return {...state, loading: false, items: action.events, lastUpdated: action.receivedAt };
		default:
			return state;
	}
}

function selectTournament(state = initialState, action) {
	switch (action.type) {
		case REFRESH_SELECTED_TOURNAMENT:
			return {...state, loading: true};
		case SELECT_TOURNAMENT:
			var selectedTournament = state.items.find(t => t.id == action.tournamentId);
			return {...state, loading: false, selected: selectedTournament, selectedId: action.tournamentId}
		case RECEIVE_SELECTED_TOURNAMENT:
			return {...state, loading: false, selected: action.selected };
		default:
			return state;
	}
}


function tournaments(state = { }, action) {
  switch (action.type) {
    case REQUEST_TOURNAMENTS:
    case RECEIVE_TOURNAMENTS:
    case REFRESH_TOURNAMENTS:
    	var newState = fetchTournamentList(state, action);
      	return { ...state, ...newState };
	case SELECT_TOURNAMENT:
    case RECEIVE_SELECTED_TOURNAMENT:
		var newState = selectTournament(state, action);
        return { ...state, ...newState };
      default:
      	return state
  }
}

const rootReducer = combineReducers({
  tournamentInfo: tournaments
});

export default rootReducer
