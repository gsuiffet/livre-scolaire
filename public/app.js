var React = require('react');
import css from './src/styles.css'

var DashboardX = require('./components/dashboard.js');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <DashboardX/>
            </div>
        );
    }
}

module.exports = App;