var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>BoilerPlate 3</p>,
  document.getElementById('app')
);

require('./redux-example.jsx');
