var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Docs = React.createClass({
  render: function () {
    return (
      <div className='vertical grid-frame'>
        <div className='title-bar'>
          <span className='title primary'>React Foundation Apps</span>
        </div>
        <div className='grid-block'>
          <div className='small-2 grid-block sidebar'>
              <div className='vertical grid-block'>
                <section>
                  <ul className='menu-bar vertical'>
                    <li><Link to='install'>Installation &amp; Usage</Link></li>
                    <li><Link to='accordion'>Accordion</Link></li>
                    <li><Link to='modal'>Modal</Link></li>
                  </ul>
                </section>
              </div>
          </div>
          <div className='small-10 grid-block'>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Docs;