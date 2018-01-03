var React = require('react');
var ActionSheet  = require('../../src/action-sheet');


class BasicActionSheet extends React.Component {
  render() {
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
}

module.exports = BasicActionSheet;