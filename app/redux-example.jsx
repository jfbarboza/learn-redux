var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Anonymus'}, action)=>{
  //state = state || {name: 'Anonymus'}

  console.log('New action ', action);

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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jorge'
});

console.log('Name should be Jorge: ', store.getState());
