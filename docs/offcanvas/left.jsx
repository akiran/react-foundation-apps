var React = require('react');
var Offcanvas = require('../../lib/offcanvas');
var Open = require('../../lib/open');
var Close = require('../../lib/close');

var Left = React.createClass({
  render: function () {
    return (
      <div>
        <Open trigger='left-offcanvas'>
          <a className='button'>Open Left Off-canvas</a>
        </Open>
        <Offcanvas id='left-offcanvas'>
          <Close trigger='left-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Left offcanvas menu</p>
        </Offcanvas>
      </div>
    );
  }
});

module.exports = Left;