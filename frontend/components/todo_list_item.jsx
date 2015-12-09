var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require('./done_button');

var TodoListItem = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function() {
    return (
      <div>
        <br/>
        <DoneButton todo={this.props.todo}></DoneButton>
        <br/>
        <div>Title: {this.props.todo.title}</div>
        <div>Body:  {this.props.todo.body}</div>
        <button onClick={this.handleDestroy}>delete</button>
        <hr/>
      </div>
    );
  }
});

module.exports = TodoListItem;
