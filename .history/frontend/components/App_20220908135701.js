import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
     list:[]
    };
  }
  
  addItem = (e, item) =>{
    e.preventDefault();
     const newItem = {
        name: item,
        id: Date.now(),
        done: false
     }
    this.setState({...this.state, list: [...this.state.list, newItem]})
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
        <ToDoList list={this.state.list}/>
        <Form onChange = {this.handleChanges} item={this.state}/>
        <button onClick={(e) => this.addItem(e, 'Trash')}>Test</button>
      </div>
    )
  }
}
