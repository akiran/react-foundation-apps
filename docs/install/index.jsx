var React = require('react');
var Highlight = require('../react-highlight');

var InstallationDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h4 className='subheader'>
          React Foundation Apps is a react port of Foundation Apps
        </h4>
        <Highlight code={require('./install.md')} />
      </div>
    );
  }
});

module.exports = InstallationDocs;