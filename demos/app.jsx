var devServer = require('webpack/hot/only-dev-server');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Header = require('./header');
require('./scss/app.scss');

var Modal = require('./components/modal');
var Panel = require('./components/panel');
var Offcanvas = require('./components/offcanvas');
var Accordion = require('./components/accordion');
var Tabs = require('./components/tabs');

var Demos = React.createClass({
  render: function () {
    return (
      <div className='grid-frame vertical'>
        <Header />
        <div className='grid-block'>
          <div className='small-2 grid-block sidebar'>
            <div className='vertical grid-block'>
              <section>
                <ul className='menu-bar vertical'>
                  <li><Link to='modal'>Modal</Link></li>
                  <li><Link to='panel'>Panel</Link></li>
                  <li><Link to='offcanvas'>Offcanvas</Link></li>
                  <li><Link to='accordion'>Accordion</Link></li>
                  <li><Link to='tabs'>Tabs</Link></li>
                </ul>
              </section>
            </div>
          </div>
          <div className='grid-content'>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={Demos}>
    <Route name='modal' handler={Modal} />
    <Route name='panel' handler={Panel} />
    <Route name='offcanvas' handler={Offcanvas} />
    <Route name='accordion' handler={Accordion} />
    <Route name='tabs' handler={Tabs} />
    <DefaultRoute handler={Modal} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
