import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  console.log(props)
  


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={props.list.id} item={props.item}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
