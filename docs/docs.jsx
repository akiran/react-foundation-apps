var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Offcanvas = require('../lib/offcanvas');
var Trigger = require('../lib/trigger');
var Panel = require('../lib/panel');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='wrapper'>
        <Offcanvas id='top-offcanvas' position ='top'>
          <Trigger close='top-offcanvas'>
            <a className='close-button'>&times;</a>
          </Trigger>
          <br />
          <p>This is Top offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='right-offcanvas' position ='right'>
          <Trigger close='right-offcanvas'>
            <a className='close-button'>&times;</a>
          </Trigger>
          <br />
          <p>This is Right offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='bottom-offcanvas' position ='bottom'>
          <Trigger close='bottom-offcanvas'>
            <a className='close-button'>&times;</a>
          </Trigger>
          <br />
          <p>This is Bottom offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='left-offcanvas'>
          <Trigger close='left-offcanvas'>
            <a className='close-button'>&times;</a>
          </Trigger>
          <br />
          <p>This is Left offcanvas menu</p>
        </Offcanvas>
        <div className='vertical grid-frame'>
          <div className='title-bar primary'>
            <span className='title'>React Foundation Apps</span>
          </div>
          <div className='grid-block'>
            <Panel id='sidebar' className='medium-3 large-2 medium-grid-block sidebar vertical'>
              <div className='grid-content collapse'>
                <Trigger close='sidebar'>
                  <a className='close-button hide-for-medium'>&times;</a>
                </Trigger>
                <section>
                  <ul className='menu-bar vertical'>
                    <li><Link to='install'>Installation &amp; Usage</Link></li>
                    <li><Link to='trigger'>Trigger</Link></li>
                    <li><Link to='modal'>Modal</Link></li>
                    <li><Link to='panel'>Panel</Link></li>
                    <li><Link to='offcanvas'>Off-canvas Menu</Link></li>
                    <li><Link to='notification'>Notification</Link></li>
                    <li><Link to='action-sheet'>Action Sheet</Link></li>
                    <li><Link to='tabs'>Tabs</Link></li>
                    <li><Link to='iconic'>Iconic</Link></li>
                    <li><Link to='accordion'>Accordion</Link></li>
                    <li><Link to='interchange'>Interchange</Link></li>
                    <li><Link to='popup'>Popup</Link></li>
                  </ul>
                </section>
              </div>
            </Panel>
            <div className='medium-9 large-10 grid-content'>
              <div className='grid-container main-docs-section'>
                <Trigger toggle='sidebar'>
                  <a className="small secondary expand button hide-for-medium">Show Components</a>
                </Trigger>
                <RouteHandler />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});





module.exports = Docs;