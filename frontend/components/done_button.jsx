var React = require('react'),
    TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  render: function() {
    var buttonText = this.props.todo.done === false ? "Done" : "Undo";
    return(
      <button onClick={this.handleDone}>{buttonText}</button>
    );
  },

  handleDone: function() {

    TodoStore.toggleDone(this.props.todo.id);
  }

});

module.exports = DoneButton;
