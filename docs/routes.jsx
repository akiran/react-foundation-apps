var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Install = require('./install');
var Accordion = require('./accordion');
var Interchange = require('./interchange');
var Offcanvas = require('./offcanvas');
var Notification = require('./notification');
var Modal = require('./modal');
var ActionSheet = require('./action-sheet');
var Tabs = require('./tabs');
var Playground = require('./playground');
var Docs = require('./docs');

var routes = (
  <Route handler={Docs}>
    <Route name='install' handler={Install} />
    <Route name='accordion' handler={Accordion} />
    <Route name='interchange' handler={Interchange} />
    <Route name='modal' handler={Modal} />
    <Route name='offcanvas' handler={Offcanvas} />
    <Route name='notification' handler={Notification} />
    <Route name='action-sheet' handler={ActionSheet} />
    <Route name='tabs' handler={Tabs} />
    <Route name='playground' handler={Playground} />
    <DefaultRoute handler={Install} />
  </Route>
);

module.exports = routes;