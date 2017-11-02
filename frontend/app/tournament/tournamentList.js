import TournamentList from './list'
import { refreshTournaments, selectTournament } from './actions'
import { connect } from 'react-redux';
// maps redux store state to components
const mapStateToTournamentListProps = (state) => {
	return {...state.tournaments.tournamentInfo };
};

// // maps redux store dispatch to list of components
const mapFunctionsToProps = (dispatch) => {
	return {
	  fetchTournaments: () => {
            dispatch(refreshTournaments());
        },
        selectTournament: (id) => {
         	dispatch(selectTournament(id));
        }
	};
};

const VisibleTournamentList = connect(
	mapStateToTournamentListProps,
	mapFunctionsToProps
)(TournamentList);

export default VisibleTournamentList;