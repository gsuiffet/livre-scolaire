var React = require('react');
var reset = require('redux-form').reset;
var reduxForm = require('redux-form').reduxForm;
var Field = require('redux-form').Field;

class AddStudent extends React.Component {
    constructor() {
        super();
    }
    render() {
            return (
            <div id="addStudentForm">
                <form onSubmit={this.props.handleSubmit} className="mui-form--inline">
                    <label>
                        <div className="mui-col-xs-12 mui-col-md-12" id="addStudent">
                            <div className="mui-col-xs-4 mui-col-md-4">
                                <div className="mui-col-xs-12 mui-col-md-6">
                                    <div className="mui-textfield">
                                        <Field type="text" name="name" id="inputName" placeholder="Prenom" component="input"/>
                                    </div>
                                </div>
                                <div className="mui-col-xs-12 mui-col-md-6">
                                    <div className="mui-textfield">
                                        <Field type="text" name="lastname" id="inputLastname" placeholder="Nom" component="input"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mui-col-xs-4 mui-col-md-4">
                                <div className="mui-col-xs-12 mui-col-md-6">
                                    <div className="mui-textfield">
                                        <Field type="number" name="password" id="inputPassword" placeholder="Code" component="input"/>
                                    </div>
                                </div>
                                <div className="mui-col-xs-12 mui-col-md-6">
                                    <div className="mui-select">
                                        <Field type="text" name="level"  id="inputLevel" placeholder="Niveau" component="select">
                                            <option>Rang</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="mui-col-xs-4 mui-col-md-4">
                                <button type="submit" value="Save" id="inputSubmit" className="mui-btn">Ajouter</button>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
        );
    }
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('addStudent'));

var AddStudentXForm = reduxForm({
    form: 'addStudent',
    onSubmitSuccess: afterSubmit,
})(AddStudent);

module.exports = AddStudentXForm;