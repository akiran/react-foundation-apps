var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Install = require('./install');
var Accordion = require('./accordion');
var Interchange = require('./interchange');
var Offcanvas = require('./offcanvas');
var Notification = require('./notification');
var Modal = require('./modal');
var Panel = require('./panel');
var ActionSheet = require('./action-sheet');
var Tabs = require('./tabs');
var Trigger = require('./trigger');
var Popup = require('./popup');
var Iconic = require('./iconic');
var Docs = require('./docs');

var path = (process.env.NODE_ENV==='dev_docs') ? '/': '/opensource/react-foundation-apps';
var routes = (
  <Route name='app' path={path} component={Docs}>
    <Route path='install' component={Install} />
    <Route path='trigger' component={Trigger} />
    <Route path='modal' component={Modal} />
    <Route path='panel' component={Panel} />
    <Route path='offcanvas' component={Offcanvas} />
    <Route path='notification' component={Notification} />
    <Route path='action-sheet' component={ActionSheet} />
    <Route path='tabs' component={Tabs} />
    <Route path='iconic' component={Iconic} />
    <Route path='accordion' component={Accordion} />
    <Route path='interchange' component={Interchange} />
    <Route path='popup' component={Popup} />
    <IndexRoute component={Install} />
  </Route>
);

    

module.exports = routes;
