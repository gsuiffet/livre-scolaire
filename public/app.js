var React = require('react');
var connect = require('react-redux').connect;

var Header = require('./components/header.js');
var StudentListX = require('./components/studentlist.js');
var AddStudentXForm = require('./components/addstudent.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {};
    }
    submit(newstudent){
        if (newstudent.name != undefined) {
            this.props.handleChange(newstudent);
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    }
    render() {
        if (this.state.show) {
            var required = <div className="mui--text-accent mui--text-body1">*Prénom est obligatoire</div>;
        }
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
                                <AddStudentXForm onSubmit={this.submit}/>
                                {required}
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
        handleChange: function(newstudent) {
            dispatch({type: "addstudent", newstudent: newstudent});
        }
    }
}