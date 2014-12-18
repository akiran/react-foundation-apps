var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Offcanvas = require('../lib/offcanvas');
var Close = require('../lib/triggers/close');
var Panel = require('../lib/panel');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='wrapper'>
        <Offcanvas id='top-offcanvas' position ='top'>
          <Close trigger='top-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Top offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='right-offcanvas' position ='right'>
          <Close trigger='right-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Right offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='bottom-offcanvas' position ='bottom'>
          <Close trigger='bottom-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Bottom offcanvas menu</p>
        </Offcanvas>
        <Offcanvas id='left-offcanvas'>
          <Close trigger='left-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Left offcanvas menu</p>
        </Offcanvas>
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
                      <li><Link to='triggers'>Triggers</Link></li>
                      <li><Link to='modal'>Modal</Link></li>
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
            <div className='small-10 grid-block'>
              <div className='grid-content'>
                <div className='grid-container main-docs-section'>
                  <RouteHandler />
                </div>
              </div>
            </div>
            <Panel id='example-top-panel' position='top'>
              <Close trigger='example-top-panel'>
                <a className='close-button'>&times;</a>
              </Close>
              Top Panel content
            </Panel> 
            <Panel id='example-right-panel' position='right'>
              <Close trigger='example-right-panel'>
                <a className='close-button'>&times;</a>
              </Close>
              Right Panel content
            </Panel> 
            <Panel id='example-bottom-panel' position='bottom'>
              <Close trigger='example-bottom-panel'>
                <a className='close-button'>&times;</a>
              </Close>
              Bottom Panel content
            </Panel> 
            <Panel id='example-left-panel'>
              <Close trigger='example-left-panel'>
                <a className='close-button'>&times;</a>
              </Close>
              Basic Left Panel content
            </Panel> 
          </div>
        </div>
      </div>
    );
  }
});





module.exports = Docs;