 var React = require('react');
var Highlight = require('react-highlight/optimized');

var TriggersDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Trigger</h2>
        <h4 className='subheader'>Trigger component publish actions such as open, close to the target components. Unique id of target component should be passed to the corresponding action attribute</h4>
        <hr />
        <h3>Open</h3>
        <p>Open the target component</p>
        <Highlight innerHTML={true} languages={['xml']}>
          {require('./open.md')}
        </Highlight>
        <hr />
        <h3>Close</h3>
        <p>Close the target component</p> 
        <Highlight innerHTML={true} languages={['xml']}>
          {require('./close.md')}
        </Highlight>
        <hr />
        <h3>Toggle</h3>
        <p>Toggle the target component</p>
        <Highlight innerHTML={true} languages={['xml']}>
          {require('./toggle.md')}
        </Highlight>
        <hr />
        <h3>Hard Toggle</h3>
        <p>Close all the opened components except target component and then toggle the target component</p>
        <Highlight innerHTML={true} languages={['xml']}>
          {require('./hard-toggle.md')}
        </Highlight>
        <hr />
        <h3>Notify</h3>
        <p>Send a notification</p>
        <Highlight innerHTML={true} languages={['xml']}>
          {require('./notify.md')}
        </Highlight>
      </div>
    );
  }
});


module.exports = TriggersDocs;