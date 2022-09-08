import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  console.log(props)


    return (
      <div>
        {props.list.map(item => (
        <ToDo  item={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
