import React from "react";

const Todo = props => {
    return (
        <div className={`todo${props.listTodo.completed ? " completed" : ""}`}
        onClick={() => props.toggleTodo(props.listTodo.id)} //Anonymous Callback Function Clarification
        >
          <p>{props.listTodo.task}</p>
        </div>
    )
}

  export default Todo;