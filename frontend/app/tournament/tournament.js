import TournamentDetails from './details'
//	import { refreshTournaments, selectTournament } from './actions'
import { connect } from 'react-redux';
import {refreshSelectedTournament} from "./actions";
// maps redux store state to components
const mapStateToEventListProps = (state) => {
	return {...state.tournaments.tournamentInfo };
};

const mapFunctionsToProps = (dispatch) => {
    return {
        fetchTournament: (id) => {
            var x = dispatch(refreshSelectedTournament(id));
            console.log(x);
        }
    };
};


const VisibleTournament = connect(
	mapStateToEventListProps,
	mapFunctionsToProps
)(TournamentDetails);

export default VisibleTournament;