import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        placeholder="...todo"
        onChange={props.changeHandler}
        name="todo"
      />

      <button onClick={props.addTodo}>Add Todo</button>
      
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
