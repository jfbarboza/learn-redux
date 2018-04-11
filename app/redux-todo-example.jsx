var redux = require('redux');

console.log('Starting Redux Todo Example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action)=>{
  //state = state || {name: 'Anonymus'}
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState Todo', currentState);
