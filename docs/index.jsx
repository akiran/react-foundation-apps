var React = require('react');
var render = require('react-dom').render;
var routes = require('./routes');
var canUseDOM = require('can-use-dom');

if (canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    render(routes, document.body);
  });
}
