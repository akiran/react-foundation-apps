var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Accordion = require('./accordion');
var Docs = require('./docs');

var routes = (
  <Route handler={Docs}>
    <Route name='accordion' handler={Accordion} />
    <DefaultRoute handler={Accordion} />
  </Route>
);

module.exports = routes;