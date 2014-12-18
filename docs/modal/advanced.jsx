var React = require('react');
var Modal = require('../../lib/modal');
var Open = require('../../lib/triggers/open');
var Close = require('../../lib/triggers/close');

var AdvancedModal = React.createClass({
  render: function () {
    return (
      <div>
        <Open trigger='advancedModal'>
          <a className="button">Open Modal</a>
        </Open>  
        <Modal id='advancedModal' overlay={true} overlayClose={true}>
          <div className="grid-block vertical">
            <div className="shrink grid-content">
              <img src="http://fc07.deviantart.net/fs70/i/2012/014/b/e/snowy_peak_by_cassiopeiaart-d4mb6aq.jpg" />
            </div>
            <div className="grid-content button-group">
              <Close trigger='advancedModal'>
                <a className="button">Ok</a>
              </Close>
              <Close trigger='advancedModal'>
                <a className="button">Cancel</a>
              </Close>
            </div>
          </div>  
        </Modal>
      </div>
    );
  }
});

module.exports = AdvancedModal;