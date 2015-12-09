var TodoList = require('./components/todo_list.jsx'),
    TodoListItem = require('./components/todo_list_item.jsx'),
    React = require('react'),
    ReactDOM = require('react-dom');

ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
);
