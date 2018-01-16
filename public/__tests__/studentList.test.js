import React from 'react';
import renderer from 'react-test-renderer';

import {StudentListX} from '../components/studentlist.js'

describe('components', function() {
    describe('<StudentListX/>', function() {
        it('renders correctly', function() {
            var component = renderer.create(StudentListX);
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});