var React = require('react');
var Interchange = require('../../src/interchange');

class BasicInterchange extends React.Component {
  render() {
    var baseUrl = '';
    if (process.env.NODE_ENV === 'production') {
      baseUrl = 'http://static.webrafter.com';
    }
    return (
      <div>
        <Interchange>
          <img media="small" src={baseUrl + "/img/small.jpg"} />
          <img media="medium" src={baseUrl + "/img/medium.jpg"} />
          <img media="large" src={baseUrl + "/img/large.jpg"} />
        </Interchange>
      </div>
    );
  }
}

module.exports = BasicInterchange;