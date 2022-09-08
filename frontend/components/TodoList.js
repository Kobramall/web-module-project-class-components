import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {



    return (
      <div>
        {props.list.map(item => (
          <ToDo toggle={props.toggleItem} key={item.id} item={item}/>
        ))}
        
      
      </div>
    )
  };

  export default TodoList
