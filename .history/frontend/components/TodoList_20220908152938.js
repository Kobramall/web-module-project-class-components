import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  


    return (
      <div>
        {props.list.map(list => (
        <ToDo key={list.id} list={props.list}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
