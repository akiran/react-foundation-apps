var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var PubSub = require('pubsub-js');
var LayerMixin = require('react-layer-mixin');
var Tether = require('tether/tether');

var PopupToggle = React.createClass({
  mixins: [LayerMixin],
  getInitialState: function () {
    return {active: false};
  },
  toggle:  function () {
    this.setState({active: !this.state.active});
    console.log(this.state.active);
  },
  renderLayer: function () {
    return cloneWithProps(this.props.popup, {
      active: this.state.active
    });
  },
  render: function () {
    var child = cloneWithProps(this.props.children, {
      onClick: this.toggle
    });
    return child;
  }
});

module.exports = PopupToggle;