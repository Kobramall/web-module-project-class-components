import React from 'react'
import ToDoList from './TodoList'

export default class Form extends React.Component {

constructor(){
  super();
  this.state = {
    item: ""
  }
}

  render() {
    return (
      <div>
        <ToDoList />
        <form>
         <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
         <button>submit</button>
        </form> 
      </div>
    )
  }
}
