import React from 'react'
import ToDoList from './TodoList'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        <form>
         <input type="text" value="" />
         <button>submit</button>
        </form> 
      </div>
    )
  }
}
