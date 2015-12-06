var React = require('react');
var ReactDOM = require('react-dom');
var classnames = require('classnames');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var foundationApi = require('../utils/foundation-api');
var Tether = ExecutionEnvironment.canUseDOM && require('tether/tether');

var Popup = React.createClass({
  getInitialState: function () {
    return {
      active: false,
      tetherInit: false
    };
  },
  getDefaultProps: function () {
    return {
      pinTo: 'top center',
      pinAt:''
    };
  },
  componentDidMount: function () {
    this.tether = {};
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg[0] === 'toggle') {
        this.toggle(msg[1]);
      }
    }.bind(this));
  },
  toggle: function (target) {
    var active = !this.state.active;
    this.setState({active: active}, function () {
      if (active) {
        this.tetherElement(target);
      } else {
        this.tether.destroy();
      }
    }.bind(this));
  },
  tetherElement: function(target) {
    var targetElement = document.getElementById(target);
    var attachment = 'top center';
    this.tether = new Tether({
      element: ReactDOM.findDOMNode(this),
      target: targetElement,
      attachment: attachment,
    });
  },
  render: function () {
    var classes = {
      popup: true,
      'is-active': this.state.active
    };
    return (
      <div id={this.props.id} className={classnames(classes)} data-closable='popup'>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Popup;