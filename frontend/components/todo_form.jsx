var React = require('react'),
    TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {title: "", body: ""};
  },

  updateTitle: function(e) {
    this.setState({ title: e.target.value });
  },

  updateBody: function(e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function(e){
    e.preventDefault();

    var newTodo = {
      title: this.state.title,
      body: this.state.body
    };

    TodoStore.create(newTodo);

    this.setState({title: "", body: ""});

  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input
          onChange={this.updateTitle}
          type="text"
          value={this.state.title}/>
        </label>

        <br/><br/>

        <label>Body
          <textarea
            onChange={this.updateBody}
            value={this.state.body}>
          </textarea>
        </label>

        <br/><br/>

        <input type="submit" value="New Todo"/>
      </form>

    )
  }

});

module.exports = TodoForm;
