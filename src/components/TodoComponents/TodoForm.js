import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.task]: e.target.value });
  };

  submitTodo = e => {
    this.setState({ todo: "" });
    this.props.addTodo(e, this.state.todo);
    // data from props
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.task}
          name="todo"
          onChange={this.handleChanges}
          placeholder="...todo"
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
