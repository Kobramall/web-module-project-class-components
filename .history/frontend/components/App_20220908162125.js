import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
     list:[{name:"trash", id:1, done:false}]
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
  
  toggleItem = itemId => {
       this.setState({...this.state, list: this.state.list.map(item =>{
         if(itemId === itemId){
          return {...item, done: !item.done}
         }
        return item;
       }) })
  }
  
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoList toggleItem={this.toggleItem} addItem={this.addItem} list={this.state.list} />
        <Form addItem={this.addItem} item={this.state}/>
      </div>
    )
  }
}
