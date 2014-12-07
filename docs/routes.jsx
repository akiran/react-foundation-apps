var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Install = require('./install');
var Accordion = require('./accordion');
var Interchange = require('./interchange');
var Modal = require('./modal');
var Docs = require('./docs');

var routes = (
  <Route handler={Docs}>
    <Route name='install' handler={Install} />
    <Route name='accordion' handler={Accordion} />
    <Route name='interchange' handler={Interchange} />
    <Route name='modal' handler={Modal} />
    <DefaultRoute handler={Accordion} />
  </Route>
);

module.exports = routes;