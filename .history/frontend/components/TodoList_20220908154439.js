import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
   console.log(props.list)


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.name} item={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
