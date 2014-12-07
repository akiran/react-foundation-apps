var React = require('react');
var Highlight = require('../react-highlight');
var installMD = require('./install.md');

var InstallationDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <Highlight code={installMD} />
      </div>
    );
  }
});

module.exports = InstallationDocs;