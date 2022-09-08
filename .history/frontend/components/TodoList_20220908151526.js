import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  console.log(props.list[0].id)


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item[0].id} item={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
