var React = require('react');
var cx = require('react/lib/cx');
var LayerMixin = require('./mixins/layer');
var PubSub = require('pubsub-js');

var Panel = React.createClass({
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
    if (this.state.open) {
      var classes = {
        panel: true,
        'is-active': true,
      };
      classes['panel-' + this.props.position] = true;
      return (
        <div className={cx(classes)}>
            {this.props.children}
        </div>
      );
    } else {
      return <div />;
    }
  },
  render: function () {
    return null;
  }
});

module.exports = Panel;