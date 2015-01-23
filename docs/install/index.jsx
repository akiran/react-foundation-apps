var React = require('react');
var Highlight = require('react-highlight/optimized');

var InstallationDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h4 className='subheader'>
          React Foundation Apps is a react port of Foundation Apps
        </h4>
        <Highlight innerHTML={true} languages={['xml', 'javascript', 'bash']}>
          {require('./install.md')}
        </Highlight>
      </div>
    );
  }
});

module.exports = InstallationDocs;