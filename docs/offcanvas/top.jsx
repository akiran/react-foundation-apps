var React = require('react');
var Offcanvas = require('../../lib/offcanvas');
var Open = require('../../lib/open');
var Close = require('../../lib/close');

var Top = React.createClass({
  render: function () {
    return (
      <div>
        <Open openId='top-offcanvas'>
          <a className='button'>Open Top Off-canvas</a>
        </Open>
        <Offcanvas id='top-offcanvas' position ='top'>
          <Close closeId='top-offcanvas'>
            <a className='close-button'>&times;</a>
          </Close>
          <br />
          <p>This is Top offcanvas menu</p>
        </Offcanvas>
      </div>
    );
  }
});

module.exports = Top;