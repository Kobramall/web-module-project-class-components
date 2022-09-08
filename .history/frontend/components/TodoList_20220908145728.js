import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  console.log(props)
  


    return (
      <div>
        {props.item.map(item => (
        <ToDo key={item.id} item={props.item}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
