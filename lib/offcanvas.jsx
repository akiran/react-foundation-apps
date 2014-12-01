var React = require('react');
var cx = require('react/lib/cx');
var LayerMixin = require('react-layer-mixin');
var PubSub = require('pubsub-js');

var Offcanvas = React.createClass({
  mixins: [LayerMixin],
  getInitialState: function () {
    return {open: false};
  },
  getDefaultProps: function () {
    return {
      position: 'left'
    };
  },
  componentDidMount: function () {
    PubSub.subscribe(this.props.id, function (msg, data) {
      if (data === 'open') {
        this.setState({open: true});
      } else if (data === 'close') {
        this.setState({open: false});
      } else if (data === 'toggle') {
        this.setState({open: !this.state.open});
      }
    }.bind(this));
  },
  renderLayer: function() {
    var classes = {
      'off-canvas': true,
      'is-active': this.state.open,
    };
    classes[this.props.position] = true;
    return (
      <div className={cx(classes)}>
          {this.props.children}
      </div>
    );
  },
  render: function () {
    return null;
  }
});

module.exports = Offcanvas;