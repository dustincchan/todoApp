var _todos = [],
    _callbacks = [];

var TodoStore = {

  //event handlers

  addChangeHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangeHandler: function (callback) {
    var idx;

    // Array#indexOf
    for(var i = 0; i < _callbacks.length; i++) {
      if(callback === _callbacks[i]) {
        idx = i;
        break;
      }
    }

    if (!idx) {return; }

    _callbacks.splice(idx, 1);
  },

  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    })
  },

  //CRUD methods

  all: function() {
    return _todos.slice();
  },

  fetch: function() {
    $.ajax({
      url: 'api/todos',
      type: 'GET',
      success: function(todos) {
        _todos = todos;
        TodoStore.changed();
      }
    });
  },

  create: function(todo) {
    $.ajax({
      url:'api/todos',
      type: 'POST',
      data: {todo: todo},
      success: function(todo) {
        _todos.push(todo);
        TodoStore.changed();
      }
    });

  },

  find: function(id) {
    for (var i = 0; i < _todos.length; i++){
      if(_todos[i].id === id) {
        return i;
      }
    }
    return -1;
  },

  destroy: function(id) {
    var todo = _todos[TodoStore.find(id)];

    if(todo) {
      $.ajax({
        url: '/api/todos/' + id,
        type: 'DELETE',
        success: function(todo) {
          _todos.splice(TodoStore.find(todo.id), 1);
          TodoStore.changed();
        }
      });
    }
  },
  toggleDone: function(id) {
    var todo = _todos[TodoStore.find(id)];

    if(todo) {
      todo.done = !todo.done;

      $.ajax({
        url: '/api/todos/' + id,
        type: 'PATCH',
        data: { todo: todo },
        success: function(todo) {
          TodoStore.changed();
        }
      });
    }
  }
};

module.exports = TodoStore;
