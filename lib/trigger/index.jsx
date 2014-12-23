var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var foundationApi = require('../utils/foundation-api');
var Tether = require('tether/tether');

var Trigger = React.createClass({
  getInitialState: function () {
    return {popupActive: false};
  },
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
  componentDidMount: function () {
    if (this.props.popupToggle) {
      this.tetherElement(this.props.popupToggle);
    }
  },
  componentDidUpdate: function () {
    if (this.props.popupToggle) {
      this.tetherElement(this.props.popupToggle);
    }
  },
  tetherElement: function(target) {
    var targetElement = document.getElementById(target);
    var attachment = 'top center';
    console.log(this.props.popupToggle, this.getDOMNode(), targetElement);
    this.tether = new Tether({
      element: this.getDOMNode(),
      target: targetElement,
      attachment: attachment,
      enable: false
    });

  },
  popupToggleHandler: function () {
    var popupActive = !this.state.popupActive;
    if(popupActive) {
      this.tether.enable();
    } else  {
      this.tether.disable();
    }
    this.setState({popupActive: popupActive});
  },
  clickHandler: function (e) {
    e.preventDefault();
    if (this.props.open) {
      foundationApi.publish(this.props.open, 'open');
    } else if (this.props.close) {
      foundationApi.publish(this.props.close, 'close');
    } else if (this.props.toggle) {
      foundationApi.publish(this.props.toggle, 'toggle');
    } else if (this.props.hardToggle) {
      foundationApi.closeActiveElements({exclude: this.props.hardToggle});
      foundationApi.publish(this.props.hardToggle, 'toggle');
    } else if (this.props.popupToggle) {
      foundationApi.publish(this.props.popupToggle, 'popup-toggle');
      
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
    var child = React.Children.only(this.props.children);
    return cloneWithProps(child, {
      onClick: this.clickHandler
    });
  }
});

module.exports = Trigger;