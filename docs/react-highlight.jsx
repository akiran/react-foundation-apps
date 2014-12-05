var hljs = require('highlight.js');
var React = require('react');

var Highlight = React.createClass({
  componentDidMount: function () {
    hljs.highlightBlock(this.refs.code.getDOMNode());
  },
  render: function () {
    return <pre><code ref='code'>{this.props.code}</code></pre>;
  }
});

module.exports = Highlight;