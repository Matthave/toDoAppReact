import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList'
import './App.css';

class App extends Component {
  counter = 0;

  state = {
    tasks: []
  }

  deleteTask = (id) => {
    //Robimy 'kopie' tablicy ze state
    const tasks = [...this.state.tasks]
    //Wyszukujemy index elementu, zgodnego z naszym klikanym id 
    const index = tasks.findIndex(task =>
      task.id === id
    )
    //Usuwamy element z tym indexem
    tasks.splice(index, 1)
    return (
      //Zwracamy nową tablice bez tego indexu
      this.setState({
        tasks
      })
    )
  }

  changeTasksStatus = (id) => {
    //Robimy 'kopie' tablicy ze state
    let tasks = Array.from(this.state.tasks)
    //Wyszukujemy index elementu, zgodnego z naszym klikanym id 

    //
    tasks.forEach((task) => {
      if (id === task.id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    return this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    this.counter++
    return true
  }

  render() {
    return (
      <div className="App" >
        <h1>ToDoApp</h1>
        <AddTask addTasks={this.addTask} />
        <TasksList tasks={this.state.tasks} change={this.changeTasksStatus} delete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
