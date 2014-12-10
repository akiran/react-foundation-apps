var React = require('react');
var PubSub = require('pubsub-js');
var cx = require('react/lib/cx');
var LayerMixin = require('react-layer-mixin');
// var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Animation = require('react-animation');

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
    var overlay = this.props.overlay === true || this.props.overlayClose === true ? true : false;
    var overlayClasses = {
      'modal-overlay': true,
      'is-active': this.state.open
    };
    var modalClasses = {
      'modal': true,
      'is-active': this.state.open
    };
    var animationClass = this.state.open ? "fadeIn": "fadeOut";
    modalClasses[animationClass] = true;
    var overlayStyle = {};
    if (!overlay) {
      overlayStyle.background = 'transparent';
    }
    
    // var modal = null;
    // if (this.state.open) {
      modal = (
        <div className={cx(modalClasses)}>
          {this.props.children}
        </div>
      );
    // } 

    modalAnimationClasses = {
      enter: 'fadeIn ng-enter',
      enterActive: 'ng-enter-active',
      leave: 'fadeOut ng-leave',
      leaveActive: 'ng-leave-active'
    };

    return (
      <div className={cx(overlayClasses)} style={overlayStyle} onClick={this.hideOverlay}>
        <Animation transitionName={modalAnimationClasses}>
          { modal }
        </Animation>
      </div>
    );
  },
  render: function () {
    return null;
  }
});

module.exports = Modal;