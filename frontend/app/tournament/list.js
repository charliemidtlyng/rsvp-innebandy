var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Loader = require('../utils/Loader');
var classNames = require('classnames');

var TournamentList = React.createClass({
    mapTournaments: function(tournaments) {
        return tournaments.map(function (tournament) {
            var classes = classNames({
                'event': true,
                'col-xs-12': true,
                'col-md-9': true,
                'clearfix': true
            });
            return <Link to={`/matches/${tournament.id}`} className={classes} key={tournament.id} onClick={() => {this.props.selectTournament(tournament.id)}}>
                <div >
                    <h2 className='margin-top-10'><span>{tournament.season}</span></h2>
                </div>
            </Link>;
        }.bind(this));
    },
    componentDidMount: function () {
        this.props.fetchTournaments();
    },
    render: function () {
        var tournaments = this.mapTournaments(this.props.items || []);
        return (
                <Loader isLoading={this.props.loading}>
                    <div className="eventList row margin-top-50 ">
                        {tournaments}
                    </div>
                </Loader>
        );
    }
});

module.exports = TournamentList;