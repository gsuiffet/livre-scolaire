var React = require('react');
var ReactDOM = require('react-dom');
var AppX= require('./app.js');

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;
var student = require('./reducer.js');

var combineReducers = require('redux').combineReducers;
var reducers = combineReducers({student});
//const store = createStore(reducers, ({student : 0}));
const store = createStore(reducers, ({
    student : [
        {
            name: "Martin",
            lastname: "Paul",
            password: "8856",
            level: "2",
        },
        {
            name: "Pierre",
            lastname: "Jean",
            password: "6436",
            level: "1",
        },
        {
            name: "Sophie",
            lastname: "Gala",
            password: "0921",
            level: "2",
        },
        {
            name: "Abdel",
            lastname: "Bela",
            password: "0921",
            level: "2",
        },
        {
            name: "Marina",
            lastname: "Rolland",
            password: "6754",
            level: "2",
        }
    ]
}));


ReactDOM.render(
    <Provider store={store}>
        <AppX/>
    </Provider>,
    document.getElementById('container')
);