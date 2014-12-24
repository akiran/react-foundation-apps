var React = require('react');
var Modal = require('../../lib/modal');
var Trigger = require('../../lib/trigger');

var SimpleModal = React.createClass({
  render: function () {
    return (
      <div>
        <Trigger open="basicModal"><a className='button'>Open Modal</a></Trigger>
        <Modal id="basicModal" overlay={true}>
          <Trigger close=""><a href="#" className='close-button'>&times;</a></Trigger>
          <section className='grid-content'>
            <p> This is modal content </p>
          </section>
        </Modal>
      </div>
    );
  }
});

module.exports = SimpleModal;