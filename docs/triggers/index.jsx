 var React = require('react');
var Highlight = require('react-highlight');

var TriggersDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Triggers</h2>
        <h4 className='subheader'>These are these of components that trigger state change of components like modal, panel. Unique id of target components should be passed trigger attribute of these components</h4>
        <hr />
        <h3>Open</h3>
        <p>Open the target component</p>
        <Highlight innerHTML={true}>
          {require('./open.md')}
        </Highlight>
        <hr />
        <h3>Close</h3>
        <p>Close the target component</p> 
        <Highlight innerHTML={true}>
          {require('./close.md')}
        </Highlight>
        <hr />
        <h3>Toggle</h3>
        <p>Toggle the target component</p>
        <Highlight innerHTML={true}>
          {require('./toggle.md')}
        </Highlight>
        <hr />
        <h3>Hard Toggle</h3>
        <p>Close all the opened components except target component and then toggle the target component</p>
        <Highlight innerHTML={true}>
          {require('./hard-toggle.md')}
        </Highlight>
      </div>
    );
  }
});


module.exports = TriggersDocs;