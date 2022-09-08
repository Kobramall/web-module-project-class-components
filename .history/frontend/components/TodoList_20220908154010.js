import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
   console.log(props.list.id)


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.id} item={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
