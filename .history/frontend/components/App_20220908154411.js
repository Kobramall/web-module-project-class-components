import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
     list:[{name:"trash", id:0, done:false}]
    };
  }
  
  addItem = (e, item) =>{
    e.preventDefault();
     const newItem = {
        name: item,
        id: (this.state.list.length),
        done: false
     }
    this.setState({...this.state, list: [...this.state.list, newItem]})
  }
  
 
  
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoList list={this.state.list} />
        <Form addItem={this.addItem} item={this.state}/>
      </div>
    )
  }
}
