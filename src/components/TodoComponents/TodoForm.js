import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

handleChanges = e => {
  this.setState({ [e.target.name]: e.target.value });
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
        value={this.state.todo}
        name="todo"
        onChange={this.handleChanges}
        placeholder="...todo"
      />
      <button>Add Todo</button>
    </form>
    );
  }
}
export default TodoForm;
