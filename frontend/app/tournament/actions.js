export const REFRESH_TOURNAMENTS = 'REFRESH_TOURNAMENTS';
export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS';
export const RECEIVE_TOURNAMENTS = 'RECEIVE_TOURNAMENTS';
export const REFRESH_SELECTED_TOURNAMENT = 'REFRESH_SELECTED_TOURNAMENT';
export const RECEIVE_SELECTED_TOURNAMENT = 'RECEIVE_SELECTED_TOURNAMENT';

export const SELECT_TOURNAMENT = 'SELECT_TOURNAMENT';
export function refreshTournaments() {
  return {
    type: REFRESH_TOURNAMENTS
  }
}

export function requestTournaments() {
  return {
    type: REQUEST_TOURNAMENTS
  }
}

export function selectTournament(tournamentId) {
  return {
    type: SELECT_TOURNAMENT,
    tournamentId
  }
}

export function receiveTournaments(events) {
  return {
    type: RECEIVE_TOURNAMENTS,
    events,
    receivedAt: Date.now()
  }
}

export function refreshSelectedTournament(id) {
    return {
        type: REFRESH_SELECTED_TOURNAMENT,
        id: id
    }
}

export function receiveSelectedTournament(selected) {
  return {
    type: RECEIVE_SELECTED_TOURNAMENT,
    selected,
    receivedAt: Date.now()
  }
}
