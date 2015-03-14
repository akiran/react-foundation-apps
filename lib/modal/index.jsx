var React = require('react');
var cx = require('react/lib/cx');
var Animation = require('../utils/animation');
var foundationApi = require('../utils/foundation-api');

var Modal = React.createClass({
  getInitialState: function () {
    return { open: false };
  },
  getDefaultProps: function () {
    return { overlay: true, overlayClose: true };
  },
  componentDidMount: function () {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({open: true});
      } else if (msg === 'close') {
        this.setState({open: false});
      } else if (msg === 'toggle') {
        this.setState({open: !this.state.open});
      }
    }.bind(this));
  },
  componentWillUnmount: function () {
    foundationApi.unsubscribe(this.props.id);
  },
  hideOverlay: function (e) {
    e.preventDefault();
    if (this.props.overlayClose) {
      this.setState({open: false});   
    }
  },
  stopClickPropagation: function (e) {
    e.preventDefault();
    e.stopProppagation();
  },
  render: function() {
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
        <div className={cx(overlayClasses)} style={overlayStyle} onClick={this.hideOverlay} >
          <Animation active={this.state.open} animationIn="fadeIn" animationOut="fadeOut">
            <div id={this.props.id} data-closable={true} className={cx(modalClasses)} onClick={this.stopClickPropagation}>
              {this.props.children}
            </div>
          </Animation>
        </div>
      </Animation>
    );
  },
});

module.exports = Modal;