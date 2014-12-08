var React = require('react');
var ActionSheet  = require('../../lib/action-sheet');
var ActionSheetButton  = require('../../lib/action-sheet-button');
var ActionSheetContent  = require('../../lib/action-sheet-content');


var BasicActionSheet = React.createClass({
  render: function () {
    return (
      <ActionSheet>
        <ActionSheetButton title='Action Sheet'></ActionSheetButton>
        <ActionSheetContent>
          <p>Tap to share</p>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Mail</a></li>
          </ul>
        </ActionSheetContent>
      </ActionSheet>
    );
  }
});

module.exports = BasicActionSheet;