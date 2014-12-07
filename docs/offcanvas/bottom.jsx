var React = require('react');
var Offcanvas = require('../../lib/offcanvas');
var Open = require('../../lib/open');
var Close = require('../../lib/close');

var Bottom = React.createClass({
  render: function () {
    return (
      <div>
        <Open openId='bottom-offcanvas'>
          <a className='button'>Open Bottom Off-canvas</a>
        </Open>
        <Offcanvas id='bottom-offcanvas' position ='bottom'>
          <Close closeId='bottom-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Bottom offcanvas menu</p>
        </Offcanvas>
      </div>
    );
  }
});

module.exports = Bottom;