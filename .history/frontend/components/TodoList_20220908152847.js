import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  


    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.id} list={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
