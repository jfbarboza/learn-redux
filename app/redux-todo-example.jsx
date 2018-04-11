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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Search text is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
  console.log(document.getElementById('app'));
});

var currentState = store.getState();

console.log('currentState Todo', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
}

store.dispatch(action);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cat'
}

store.dispatch(action);

unsubscribe();

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Rabbit'
}

store.dispatch(action);
