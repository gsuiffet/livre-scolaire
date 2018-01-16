import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import UpdateStudentXForm from '../components/updatestudent.js'

const spy = jest.fn();
const initialStateValues = {};

const Decorated = reduxForm({
    form: 'testForm', onSubmit: { spy }
})(UpdateStudentXForm);

it('addStudentXForm renders correctly', () => {
    const store = createStore((state) => state, initialStateValues);
    const tree = renderer.create(
        <Provider store={store}>
            <Decorated/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
});