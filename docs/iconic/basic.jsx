var React = require('react');
var Iconic = require('../../src/iconic');

class BasicIconic extends React.Component {
  render() {
    var baseUrl = '';
    if (process.env.NODE_ENV === 'production') {
      baseUrl = 'http://static.webrafter.com';
    }
    return (
      <Iconic>
        <img data-src={baseUrl + "/img/iconic/thumb.svg"} className="iconic-md" />
      </Iconic>
    );
  }
}

module.exports = BasicIconic;