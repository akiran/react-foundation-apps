var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var canUseDOM = require('can-use-dom');
 
if (canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Router routes={routes}/>, container);
  });
} 
