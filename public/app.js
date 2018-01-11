var React = require('react');
var connect = require('react-redux').connect;

var Header = require('./components/header.js');
var StudentListX = require('./components/studentlist.js');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <header className="mui-appbar mui--z1">
                    <Header/>
                </header>
                <div id="content-wrapper">
                    <div className="mui-container-fluid">
                        <div className="mui-row">
                            <div className="mui-col-md-6 mui-col-md-offset-3">
                                <div className="mui--appbar-height"></div>
                                <h1>Ma liste d'élèves</h1>
                                <div id="addStudent">
                                    <p onClick={this.props.onIncreaseStudent}>Increase</p>
                                </div>
                                <StudentListX/>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="mui-container mui--text-center">
                    </div>
                </footer>
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