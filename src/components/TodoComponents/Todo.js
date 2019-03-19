import React from "react";

const Todo = props => {
    return (
        <div>
            <strong>task:</strong> {props.data.task}
            <strong>id:</strong> {props.data.id}
            <strong>completed:</strong> {props.data.completed}
        </div>
    )
}

  export default Todo;