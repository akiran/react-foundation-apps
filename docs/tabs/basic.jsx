var React = require('react');
var Tabs = require('../../lib/tabs');

var BasicTabs = React.createClass({
  render: function () {
    return (
      <Tabs>
        <Tabs.Tab title='Tab 1'>Tab 1 content</Tabs.Tab>
        <Tabs.Tab title='Tab 2'>Tab 2 content</Tabs.Tab>
        <Tabs.Tab title='Tab 3'>Tab 3 content</Tabs.Tab>
      </Tabs>
    );
  }
});

module.exports = BasicTabs;