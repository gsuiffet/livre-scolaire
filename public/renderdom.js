var React = require('react');
var ReactDOM = require('react-dom');
var AppX= require('./app.js');

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;
var student = require('./reducer.js');

var combineReducers = require('redux').combineReducers;
var reducers = combineReducers({student});
const store = createStore(reducers, ({student : 0}));

ReactDOM.render(
    <Provider store={store}>
        <AppX/>
    </Provider>,
    document.getElementById('container')
);