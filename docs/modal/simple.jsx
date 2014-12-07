var React = require('react');
var Modal = require('../../lib/modal');
var Open = require('../../lib/open');
var Close = require('../../lib/close');

var SimpleModal = React.createClass({
  render: function () {
    return (
      <div>
        <Open openId="first-modal"><button>Modal</button></Open>
        <Modal id="first-modal" overlay={true}>
            <div className='grid-block align-right'>
              <Close data-id="first-modal"><a href="">&times;</a></Close>
            </div>
            <div className='grid-block align-center'>Modal content</div>
        </Modal>
      </div>
    );
  }
});

module.exports = Modals;