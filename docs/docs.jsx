var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Docs = React.createClass({
  render: function () {
    return (
      <div className='grid-frame'>
        <div className='small-2 grid-block sidebar'>
            <div className='vertical grid-block'>
              <section>
                <ul className='menu-bar vertical'>
                  <li><Link to='accordion'>Accordion</Link></li>
                </ul>
              </section>
            </div>
        </div>
        <div className='small-10 grid-block'>
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = Docs;