Foundation Apps is a new framework for building web apps. It has awesome new features like 
flexbox based grid, motion-ui, and several core components for building web apps.
But, javascript components of foundation-apps are built with angular.

Try React Foundation Apps, if you want to use react.

React Foundation Apps lets you avail the benefits of both React and Foundation Apps. 

### Installation

```bash
  npm install react-foundation-apps
```
Don't forget to install foundation-apps for css components
```bash
  bower install foundation-apps
```

### Usage

Currently, built tools like browserify or webpack are required for using react-foundation-apps.

All the components are in react-foundation-apps/lib.
You can import the required components like so

```javascript
var Accordion = require('react-foundation-apps/lib/accordion');
```

### Example

```javascript
var React = require('react');
var Accordion = require('react-foundation-apps/lib/accordion');

var SampleAccordion = React.createClass({
  render: function () {
    return (
      <Accordion>
        <Accordion.Item title='First item title'>
           First item content
        </Accordion.Item>
        <Accordion.Item title='Second item title'>
          Second item content
        </Accordion.Item>
        <Accordion.Item title='Third item title'>
          Third item content
        </Accordion.Item>
      </Accordion>
    );
  }
});

module.exports = SampleAccordion;
```