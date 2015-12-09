var React = require('react'),
    TodoStore = require('../stores/todo_store.js'),
    TodoForm = require('./todo_form.jsx'),
    TodoListItem = require('./todo_list_item.jsx');

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoStore.all()
    }
  },


  todosChanged: function() {
    this.setState({todos: TodoStore.all()});
  },

  componentDidMount: function() {
    TodoStore.addChangeHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeHandler(this.todosChanged);
  },

  render: function () {
    return (
      <div>
        <TodoForm/>
        {
          this.state.todos.map(function(todo, idx) {
            return (
              <TodoListItem todo={todo} key={todo.id}></TodoListItem>
            )
          }.bind(this))
        }
      </div>
    )
  }
});

module.exports = TodoList;
