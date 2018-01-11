var React = require('react');
var connect   = require('react-redux').connect;

class StudentList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Liste</h2>
                <span>Compteur : {this.props.student}</span>
            </div>
        );
    }
}

var StudentListX = connect(
    mapStateToProps,
    null
)(StudentList);

module.exports = StudentListX;

//State
function mapStateToProps(state) {
    return {student: state.student}
}