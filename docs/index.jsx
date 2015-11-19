var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var canUseDOM = require('can-use-dom');
 
if (canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    React.render(<Router routes={routes}/>, document.body);
  });
} 
