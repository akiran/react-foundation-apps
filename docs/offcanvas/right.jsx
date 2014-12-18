var React = require('react');
var Offcanvas = require('../../lib/offcanvas');
var Open = require('../../lib/triggers/open');
var Close = require('../../lib/triggers/close');

var Right = React.createClass({
  render: function () {
    return (
      <div>
        <Open trigger='right-offcanvas'>
          <a className='button'>Open Right Off-canvas</a>
        </Open>
        <Offcanvas id='right-offcanvas' position ='right'>
          <Close trigger='right-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Right offcanvas menu</p>
        </Offcanvas>
      </div>
    );
  }
});

module.exports = Right;