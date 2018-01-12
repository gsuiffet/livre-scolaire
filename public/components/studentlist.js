var React = require('react');
var connect   = require('react-redux').connect;

class StudentList extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
    }
    handleClick(id) {
        this.props.handleSelectedStudent(id);
    }
    handleClickUpdate(id) {
        console.log(id);
        //this.props.handleSelectedStudent(id);
    }
    render() {
        var StudentList = [];
        for (var i=0; i<this.props.student.length; i++ ) {
            StudentList.push(
                <li key={i}>
                    <div className="mui-col-xs-12 mui-col-md-12 StudentList">
                        <div className="mui-col-xs-4 mui-col-md-4">
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="name">
                                    <span>{this.props.student[i].name} </span>
                                </div>
                            </div>
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="lastname">
                                    <span>{this.props.student[i].lastname} </span>
                                </div>
                            </div>
                        </div>
                        <div className="mui-col-xs-4 mui-col-md-4">
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="password">
                                    <span id="password">{this.props.student[i].password}</span>
                                </div>
                            </div>
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="level">
                                    <span id="level">{this.props.student[i].level}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mui-col-xs-4 mui-col-md-4">
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="update">
                                    <span><i onClick={this.handleClickUpdate.bind(this, this.props.student[i].id)} className="fa fa-pencil-square" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="mui-col-xs-6 mui-col-md-6">
                                <div id="delete">
                                    <i onClick={this.handleClick.bind(this, this.props.student[i].id)} className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            );
        }
            return (
            <div>
                <h2>{this.props.student.length} élèves</h2>
                <div className="mui-row">
                    <ul className="mui-list--unstyled">
                        {StudentList}
                    </ul>
                </div>
            </div>
        );
    }
}

var StudentListX = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList);

module.exports = StudentListX;

//State
function mapStateToProps(state) {
    return {student: state.student}
}

//Dispatch
function mapDispatchToProps(dispatch) {
    return {
        handleSelectedStudent: function(id) {
            dispatch({type: "deleteStudent", id:id});
        }
    }
}