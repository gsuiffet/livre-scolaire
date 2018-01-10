var React = require('react');
var connect   = require('react-redux').connect;

class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <span>Compteur : {this.props.student}</span>
            </div>
        );
    }
}

var DashboardX = connect(
    mapStateToProps,
    null
)(Dashboard);

module.exports = DashboardX;

//State
function mapStateToProps(state) {
    return {student: state.student}
}