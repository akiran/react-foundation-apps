var hljs = require('highlight.js');
var React = require('react');

var Highlight = React.createClass({
  componentDidMount: function () {
    hljs.configure({
      languages: ['js', 'html']
    });
    var domNode = this.getDOMNode();
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i=i+1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  },
  htmlDecode: function (input){
    var e = document.createElement('div');
    e.innerHTML = input;
    console.log(e.childNodes[0])
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  },
  render: function () {
    // return <pre><code ref='code' dangerouslySetInnerHTML={{__html: this.props.code}}></code></pre>;
    return <div dangerouslySetInnerHTML={{__html: this.props.code}}></div>;
  }
});

module.exports = Highlight;