import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  console.log(props.list.name)


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.id} item={props.item}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
