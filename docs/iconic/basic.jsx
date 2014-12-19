var React = require('react');
var Iconic = require('../../lib/iconic');

var BasicIconic = React.createClass({
  render: function () {
    return (
      <Iconic>
        <img data-src="/img/iconic/thumb.svg" className="iconic-md" />
      </Iconic>
    );
  }
});

module.exports = BasicIconic;