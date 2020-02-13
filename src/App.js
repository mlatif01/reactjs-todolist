import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }

    ]
  }

  // Toggle complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = todo.completed ?  false : true;
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.is !== id)]});
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
        delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
