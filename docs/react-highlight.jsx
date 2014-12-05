var hljs = require('highlight.js');
var React = require('react');

var Highlight = React.createClass({
  componentDidMount: function () {
    hljs.highlightBlock(this.refs.code.getDOMNode());
  },
  htmlDecode: function (input){
    var e = document.createElement('div');
    e.innerHTML = input;
    console.log(e.childNodes[0])
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  },
  render: function () {
    return <pre><code ref='code' dangerouslySetInnerHTML={{__html: this.props.code}}></code></pre>;
  }
});

module.exports = Highlight;