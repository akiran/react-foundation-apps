var React = require('react');
var Modal = require('../../lib/modal');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var Toggle = require('../../lib/toggle');

var Modals = React.createClass({
  render: function () {
    return (
      <div>
        <Open data-id="first-modal2"><button>Modal</button></Open>
        <Modal id="first-modal2">
            <div className='grid-block align-right'>
              <Close data-id="first-modal2"><a href="">&times;</a></Close>
            </div>
            <div className='grid-block align-center'>Modal content</div>
        </Modal>
      </div>
    );
  }
});

module.exports = Modals;