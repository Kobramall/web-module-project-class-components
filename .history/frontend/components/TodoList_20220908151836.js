import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  console.log(props.list[0].id)


    return (
      <div>
        {props.list.map(key, item => (
        <ToDo key={key} item={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
