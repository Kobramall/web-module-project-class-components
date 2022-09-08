import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
console.log()

    return (
      <div>
        {props.list.map(item => (
        <ToDo key={props.list.length} item={props.list}/>
        ))}
        
      
      </div>
    )
  };

  export default TodoList
