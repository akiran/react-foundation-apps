var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var ExecutionEnvironment = require('react/src/ExecutionEnvironment');

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.body);
    });
  });
} 