var React = require('react');
var Loader = require('../utils/Loader');

var TournamentDetails = React.createClass({
    componentDidMount: function () {
        if(!this.props.selected) {
            this.props.fetchTournament(this.props.params.id);
        }
    },
    mapTabell: (tabell) => {
        if (!tabell) {
            return;
        }
        const tabellrader = tabell.tournamentRows.map((rad) => {
            return <tr key={rad.name}>
                <td>{rad.name}</td>
                <td>{rad.gamesPlayed}</td>
                <td>{rad.won}</td>
                <td>{rad.even}</td>
                <td>{rad.lost}</td>
                <td>{rad.goals}</td>
                <td>{rad.points}</td>
                <td>{rad.walkOver}</td>
            </tr>;
        });
        return <tbody>{tabellrader}</tbody>;
    },
    render: function () {
        if (!this.props.selected) {
            return <div><Loader isLoading={true} /></div>;
        }
        return (
                <div>
                    <Loader isLoading={this.props.loading}>
                        <div className="clearfix margin-bottom-30 margin-top-50 event event-with-padding">
                            <h2>{this.props.selected.season}</h2>
                            <table className="table table-striped  font-16">
                                <thead>
                                <tr>
                                    <th>Lag</th>
                                    <th>S</th>
                                    <th>V</th>
                                    <th>U</th>
                                    <th>T</th>
                                    <th>Mål</th>
                                    <th>P</th>
                                    <th>W/O</th>
                                </tr>
                                </thead>
                                {this.mapTabell(this.props.selected)}
                            </table>
                        </div>
                    </Loader>
                </div>
        );
    }
});
module.exports = TournamentDetails;
