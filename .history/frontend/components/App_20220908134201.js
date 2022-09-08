import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      item: ""
    };
  }
  
  handleChanges = e => {
    e.preventDefault()
    this.setState({
      ...this.state, item: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoList />
        <Form onChange = {this.handleChanges} item={this.state}/>
      </div>
    )
  }
}
