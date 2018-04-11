var redux = require('redux');

console.log('Starting Redux Example');

var stateDefault = {
  name: 'Anonymus',
  hobbies: [],
  movies:[]
};


var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action)=>{
  //state = state || {name: 'Anonymus'}

  // console.log('New action ', action);

  switch(action.type){
    case 'CHANGE_NAME':
    return{
      ...state,
      name: action.name
    };
    case 'ADD_HOBBY':
    return{
      ...state,
      hobbies: [
        ...state.hobbies,
        {
          hobbyId: nextHobbyId++,
          hobby: action.hobby
        }
      ]
    };
    case 'REMOVE_HOBBY':
    return{
      ...state,
      hobbies: state.hobbies.filter( (hobby)=>{
        console.log(hobby);

        return hobby.hobbyId !== action.id;
      } )
    };
    case 'ADD_MOVIE':
    return{
      ...state,
      movies: [
        ...state.movies,
        {
          movieId: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    };
    case 'REMOVE_MOVIE':
    return{
      ...state,
      movies: state.movies.filter( (movie)=>{
        return movie.movieId !== action.id;
      } )
    };
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
  console.log('New state ', state);
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

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: "The pan's laberinth",
  genre: 'Fantasy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: "Daddy's Home",
  genre: 'Comedy'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
