var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Docs = React.createClass({
  render: function () {
    return (
      <div className='vertical grid-frame'>
        <div className='title-bar'>
          <span className='title'>React Foundation Apps</span>
        </div>
        <div className='grid-block'>
          <div className='small-2 grid-block sidebar'>
              <div className='vertical grid-block'>
                <section>
                  <ul className='menu-bar vertical'>
                    <li><Link to='install'>Installation &amp; Usage</Link></li>
                    <li><Link to='modal'>Modal</Link></li>
                    <li><Link to='triggers'>Triggers</Link></li>
                    <li><Link to='panel'>Panel</Link></li>
                    <li><Link to='offcanvas'>Off-canvas Menu</Link></li>
                    <li><Link to='notification'>Notification</Link></li>
                    <li><Link to='action-sheet'>Action Sheet</Link></li>
                    <li><Link to='tabs'>Tabs</Link></li>
                    <li><Link to='accordion'>Accordion</Link></li>
                    <li><Link to='interchange'>Interchange</Link></li>
                    <li><Link to='popup'>Popup</Link></li>
                  </ul>
                </section>
              </div>
          </div>
          <div className='small-10 grid-content'>
            <div className='grid-container main-docs-section'>
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
});





module.exports = Docs;