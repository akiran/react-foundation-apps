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
var Panel = require('./panel');
var ActionSheet = require('./action-sheet');
var Tabs = require('./tabs');
var Triggers = require('./triggers');
var Popup = require('./popup');
var Docs = require('./docs');

var routes = (
  <Route handler={Docs}>
    <Route name='install' handler={Install} />
    <Route name='triggers' handler={Triggers} />
    <Route name='modal' handler={Modal} />
    <Route name='panel' handler={Panel} />
    <Route name='offcanvas' handler={Offcanvas} />
    <Route name='notification' handler={Notification} />
    <Route name='action-sheet' handler={ActionSheet} />
    <Route name='tabs' handler={Tabs} />
    <Route name='accordion' handler={Accordion} />
    <Route name='interchange' handler={Interchange} />
    <Route name='popup' handler={Popup} />
    <DefaultRoute handler={Install} />
  </Route>
);

module.exports = routes;