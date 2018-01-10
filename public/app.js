var React = require('react');
var connect = require('react-redux').connect;

var DashboardX = require('./components/dashboard.js');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Hello classe</h1>
                <p onClick={this.props.onIncreaseStudent}>Increase</p>
                <DashboardX/>
            </div>
        );
    }
}

var AppX = connect(
    null,
    mapDispatchToProps
)(App);

module.exports = AppX;

//Dispatch
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseStudent: function() {
            dispatch( {type: 'increaseStudent'} )
        }
    }
}