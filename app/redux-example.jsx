var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Anonymus'}, action)=>{
  //state = state || {name: 'Anonymus'}
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState ', currentState);
