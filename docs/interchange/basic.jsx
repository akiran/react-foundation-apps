var React = require('react');
var Interchange = require('../../lib/interchange');

var BasicInterchange = React.createClass({
  render: function () {
    return (
      <div>
        <Interchange>
          <img media="small" src="/img/small.jpg" />
          <img media="medium" src="/img/medium.jpg" />
          <img media="large" src="/img/large.jpg" />
        </Interchange>
      </div>
    );
  }
});

module.exports = BasicInterchange;