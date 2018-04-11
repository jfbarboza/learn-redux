var redux = require('redux');

console.log('Starting Redux Todo Example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action)=>{
  //state = state || {name: 'Anonymus'}
  switch (action.type){
    case 'CHANGE_SEARCH_TEXT':
      return{
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState Todo', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
}

store.dispatch(action);

console.log('State after action: ', store.getState());
