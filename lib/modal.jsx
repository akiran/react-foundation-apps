var React = require('react');
var PubSub = require('pubsub-js');
var cx = require('react/lib/cx');
var LayerMixin = require('react-layer-mixin');
var Animation = require('./animation');

var Modal = React.createClass({
  mixins: [LayerMixin],
  getInitialState: function () {
    return { open: false };
  },
  getDefaultProps: function () {
    return { overlay: false, overlayClose: false };
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
  hideOverlay: function () {
    if (this.props.overlayClose) {
      this.setState({open: false});   
    }
  },
  renderLayer: function() {
    var overlay = (this.props.overlay === true || this.props.overlayClose === true) ? true : false;
    var overlayClasses = {
      'modal-overlay': true,
    };
    var modalClasses = {
      'modal': true,
    };
    var overlayStyle = {};
    if (!overlay) {
      overlayStyle.background = 'transparent';
    }

    return (
      <Animation active={this.state.open} animationIn="fadeIn" animationOut="fadeOut">
        <div className={cx(overlayClasses)} style={overlayStyle} onClick={this.hideOverlay}>
          <Animation active={this.state.open} animationIn="fadeIn" animationOut="fadeOut">
            <div className={cx(modalClasses)}>
              {this.props.children}
            </div>
          </Animation>
        </div>
      </Animation>
    );
  },
  render: function () {
    return null;
  }
});

module.exports = Modal;