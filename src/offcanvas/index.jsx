var React = require('react');
var classnames = require('classnames');
// var LayerMixin = require('react-layer-mixin');
var foundationApi = require('../utils/foundation-api');

var Offcanvas = React.createClass({
  // mixins: [LayerMixin],
  getInitialState: function () {
    return {open: false};
  },
  getDefaultProps: function () {
    return {
      position: 'left'
    };
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
  render: function() {
    var classes = {
      'off-canvas': true,
      'is-active': this.state.open,
    };
    classes[this.props.position] = true;
    if (this.props.className) {
      classes[this.props.className] = true;
    }
    return (
      <div id={this.props.id} data-closable={true} className={classnames(classes)}>
          {this.props.children}
      </div>
    );
  },
});

module.exports = Offcanvas;