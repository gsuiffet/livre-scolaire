var React = require('react');
var connect = require('react-redux').connect;

var StudentListX = require('./components/studentlist.js');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <header className="mui-appbar mui--z1">
                    <div className="mui-container">
                        <table>
                            <tbody className="mui--appbar-height">
                                <tr>
                                    <td className="mui--text-title" id="logo">Le Livre Scolaire</td>
                                    <td className="mui--text-right">
                                        <ul className="mui-list--inline mui--text-body2">
                                            <li><a href="#">Exercices</a></li>
                                            <li><a href="#">Elèves</a></li>
                                            <li><a href="#">Classes</a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </header>
                <div id="content-wrapper">
                    <div class="mui-container-fluid">
                        <div class="mui-row">
                            <div class="mui-col-md-6 mui-col-md-offset-3">
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