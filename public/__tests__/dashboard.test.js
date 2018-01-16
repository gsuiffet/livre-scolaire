import React from 'react';
import renderer from 'react-test-renderer';

import {DashboardX} from '../components/dashboard.js'

describe('components', function() {
    describe('<DashboardX/>', function() {
        it('renders correctly', function() {
            var component = renderer.create(DashboardX);
            const json = component.toJSON();
            expect(json).toMatchSnapshot();
        });
    });
});