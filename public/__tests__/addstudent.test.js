import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddStudentXForm from '../components/addstudent.js'
import { reduxForm } from 'redux-form'

const spy = jest.fn();
const initialStateValues = {};

const Decorated = reduxForm({
    form: 'testForm', onSubmit: { spy }
})(AddStudentXForm);

it('addStudentXForm renders correctly', () => {
    const store = createStore((state) => state, initialStateValues);
    const tree = renderer.create(
        <Provider store={store}>
            <Decorated/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
});