var React = require('react');
import Modal, { closeStyle } from "simple-react-modal";

var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

class UpdateStudent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    show() {
        this.setState({ show: true });
        this.props.initialize({
            name : this.props.student.name,
            lastname : this.props.student.lastname,
            password : this.props.student.password,
            level : this.props.student.level,
            id : this.props.student.id
        });
    };
    close() {
        this.setState({ show: false });
    };

    render() {
        return (
            <div id="update">
                <span><i onClick={this.show.bind(this)} className="fa fa-pencil-square" aria-hidden="true"></i></span>
                <Modal containerClassName="updateStudent" closeOnOuterClick={true} show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={1}>
                    <h4>Modifier un élève</h4>
                    <a key="close" style={closeStyle} onClick={this.close.bind(this)}>
                        X
                    </a>
                    <form onSubmit={this.props.handleSubmit} className="mui-form--inline">
                        <label>
                                <div className="mui-col-md-6">
                                    <div className="mui-textfield">
                                        <Field type="text" name="name" placeholder="Prenom" component="input"/>
                                    </div>
                                    <div className="mui-textfield">
                                        <Field type="text" name="lastname" placeholder="Nom" component="input"/>
                                    </div>
                                </div>
                                <div className="mui-col-md-6">
                                    <div className="mui-textfield">
                                        <Field type="text" name="password" placeholder="Mdp" component="input"/>
                                    </div>
                                    <div className="mui-textfield">
                                        <Field type="text" name="level" placeholder="Niveau" component="input"/>
                                        <Field type="hidden" name="id" component="input"/>
                                    </div>
                                </div>
                                <div className="mui-col-md-12">
                                    <div className="mui-row">
                                        <div className="mui-col-md-6 mui-col-md-offset-3">
                                            <button type="submit" value="Save" id="inputSubmitModal" className="mui-btn" onClick={this.close.bind(this)}>Modifier</button>
                                        </div>
                                    </div>
                                </div>
                        </label>
                    </form>
                </Modal>
            </div>
        );
    }
}

var UpdateStudentXForm = reduxForm({
    form: 'updateStudent',
})(UpdateStudent);

module.exports = UpdateStudentXForm;