var React = require('react');
var ReactDOM = require('react-dom');
var foundationApi = require('../utils/foundation-api');
var PopupToggle = require('../popup/toggle');

var Trigger = React.createClass({
  getDefaultProps: function () {
    return {
      open: null,
      close: null,
      toggle: null,
      hardToggle: null,
      popupToggle: null,
      notify: null
    };
  },
  getCloseId: function () {
    if (this.props.close) {
      return this.props.close;
    } else {
      var parentElement= false;
      var tempElement = ReactDOM.findDOMNode(this).parentNode;
      while(parentElement === false) {
        if(tempElement.nodeName == 'BODY') {
          parentElement = '';
        }
        if(typeof tempElement.getAttribute('data-closable') !== 'undefined' && tempElement.getAttribute('data-closable') !== false) {
          parentElement = tempElement;
        }

        tempElement = tempElement.parentNode;
      }
      return parentElement.getAttribute('id');
    }
  },
  clickHandler: function (e) {
    e.preventDefault();
    if (this.props.open) {
      foundationApi.publish(this.props.open, 'open');
    } else if (this.props.close !== null) {
      foundationApi.publish(this.getCloseId(), 'close');
    } else if (this.props.toggle) {
      foundationApi.publish(this.props.toggle, 'toggle');
    } else if (this.props.hardToggle) {
      foundationApi.closeActiveElements({exclude: this.props.hardToggle});
      foundationApi.publish(this.props.hardToggle, 'toggle');
    } else if (this.props.notify) {
      foundationApi.publish(this.props.notify, {
        title: this.props.title,
        content: this.props.content,
        position: this.props.position,
        color: this.props.color,
        image: this.props.image
      });
    }
  },
  render: function () {
    if (this.props.popupToggle) {
      return <PopupToggle {...this.props} />;
    } else {
      var child = React.Children.only(this.props.children);
      return React.cloneElement(child, {
        onClick: this.clickHandler
      });
    }
  }
});

module.exports = Trigger;