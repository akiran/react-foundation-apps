var React = require('react');
var Animation = require('../utils/animation');
var foundationApi = require('../utils/foundation-api');

var Modal = React.createClass({
  displayName: 'Modal',

  getInitialState: function () {
    return { open: false };
  },
  getDefaultProps: function () {
    return {
      overlay: true,
      overlayClose: true,
      animationIn: 'fadeIn',
      animationOut: 'fadeOut'
    };
  },
  componentDidMount: function () {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      } else if (msg === 'toggle') {
        this.setState({ open: !this.state.open });
      }
    }.bind(this));
  },
  componentWillUnmount: function () {
    foundationApi.unsubscribe(this.props.id);
  },
  hideOverlay: function (e) {
    if (this.props.overlayClose && e.target == this._modalOverlay) {
      e.preventDefault();
      this.setState({ open: false });
    }
  },
  render: function () {
    var overlayStyle = {};
    if (!this.props.overlay) {
      overlayStyle.background = 'transparent';
    }
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        'div',
        { className: 'modal-overlay', style: overlayStyle, onClick: this.hideOverlay, ref: div => {
            this._modalOverlay = div;
          } },
        React.createElement(
          Animation,
          {
            active: this.state.open,
            animationIn: this.props.animationIn,
            animationOut: this.props.animationOut
          },
          React.createElement(
            'div',
            { id: this.props.id, 'data-closable': true, className: 'modal' },
            this.props.children
          )
        )
      )
    );
  }
});

module.exports = Modal;