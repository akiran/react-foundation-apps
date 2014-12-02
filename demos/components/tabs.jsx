var React = require('react');
var Tabs = require('../../lib/tabs');
var Tab = require('../../lib/tab');
var Open = require('../../lib/open');

var TabsDemo = React.createClass({
  render: function () {
    return (
      <div>
        Tabs
        <Open data-id='automatic-tab-3'><a>open tab 3</a></Open>
        <Tabs>
          <Tab title='Tab 1'>
            Tab1 content
          </Tab>
          <Tab title='Tab 2'>
            Tab2 content
          </Tab>
          <Tab title='Tab 3' id='automatic-tab-3'>
            Tab3 content
          </Tab>
        </Tabs>
      </div>
    );
  }
});

module.exports = TabsDemo;