var React = require('react');
var ReactDOM = require('react-dom');
var App= require('./app.js');

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;
var student = require('./reducer.js');
var formReducer = require('redux-form').reducer;

var combineReducers = require('redux').combineReducers;
var reducers = combineReducers({form: formReducer, student});

var initialize = [
    {
        name: "Martin",
        lastname: "Paul",
        password: "8856",
        level: "2",
        id: 0
    },
    {
        name: "Pierre",
        lastname: "Jean",
        password: "6436",
        level: "1",
        id: 1
    },
    {
        name: "Sophie",
        lastname: "Gala",
        password: "0921",
        level: "2",
        id: 2
    },
    {
        name: "Abdel",
        lastname: "Bela",
        password: "0921",
        level: "2",
        id: 3
    },
    {
        name: "Marina",
        lastname: "Rolland",
        password: "6754",
        level: "2",
        id: 4
    }
];

const store = createStore(reducers, ({
    student : initialize
}));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);