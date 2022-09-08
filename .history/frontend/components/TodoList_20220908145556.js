import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={list.id} item={props.item}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
