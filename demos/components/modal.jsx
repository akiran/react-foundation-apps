var React = require('react');
var Modal = require('../../lib/modal');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var Toggle = require('../../lib/toggle');

var Modals = React.createClass({
  render: function () {
    return (
      <div>
        <Open data-id="modal"><button>Modal</button></Open>
        <Modal id="modal" overlay={true}>
            <div className='grid-block align-right'>
              <Close data-id="modal"><a href="">&times;</a></Close>
            </div>
            <div className='grid-block align-center'>Modal content</div>
        </Modal>
      </div>
    );
  }
});

module.exports = Modals;