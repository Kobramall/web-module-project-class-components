import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {

console.log(props.toggle)

    return (
      <div>
        {props.list.map(item => (
          <ToDo toggle={props.toggle} key={item.id} item={item}/>
        ))}
        
      
      </div>
    )
  };

  export default TodoList
