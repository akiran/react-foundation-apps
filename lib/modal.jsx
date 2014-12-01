var React = require('react');
var PubSub = require('pubsub-js');
var cx = require('react/lib/cx');
var LayerMixin = require('react-layer-mixin');

var Modal = React.createClass({
  mixins: [LayerMixin],
  getInitialState: function () {
    return { open: false };
  },
  getDefaultProps: function () {
    return { overlay: false };
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
    var overlayClasses = {
      'modal-overlay': this.props.overlay,
      'is-active': this.state.open
    };
    var modalClasses = {
      'grid-block': true,
      'vertical': true,
      'modal': true,
      'is-active': this.state.open
    };
    return (
      <div className={cx(overlayClasses)}>
        <div className={cx(modalClasses)}>
          {this.props.children}
        </div>
      </div>
    );
  },
  render: function () {
    return null;
  }
});

module.exports = Modal;