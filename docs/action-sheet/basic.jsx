var React = require('react');
var ActionSheet  = require('../../lib/action-sheet');


var BasicActionSheet = React.createClass({
  render: function () {
    return (
      <ActionSheet>
        <ActionSheet.Button title='Action Sheet'></ActionSheet.Button>
        <ActionSheet.Content>
          <p>Tap to share</p>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Mail</a></li>
          </ul>
        </ActionSheet.Content>
      </ActionSheet>
    );
  }
});

module.exports = BasicActionSheet;