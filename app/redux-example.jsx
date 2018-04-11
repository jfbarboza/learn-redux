var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Anonymus'}, action)=>{
  //state = state || {name: 'Anonymus'}

  // console.log('New action ', action);

  switch(action.type){
    case 'CHANGE_NAME':
    return{
      ...state,
      name: action.name
    }
    default:
    return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log(document.getElementById('app'));
});


var currentState = store.getState();

console.log('currentState ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jorge'
});

// unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ora'
});
