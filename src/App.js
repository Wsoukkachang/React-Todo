import React from 'react';
import ReactDOM from "react-dom";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css";

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    }
  }

  //toggles todo
  toggleTodo = todoId => {
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log("cleared");
    this.setState({
      tasks: this.state.tasks.filter(todo => !todo.completed)
    });
  };


  render() {

    return (

      <div className="App">
      <div className="header">
        <h1>Todo list: MVP</h1>
        <TodoList
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
        />
      </div>

      <div className= "form-container">
        <TodoForm addTodo={this.addTodo} />
        <button className="clear-btn" onClick={this.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
    );
  };
};

export default App;
