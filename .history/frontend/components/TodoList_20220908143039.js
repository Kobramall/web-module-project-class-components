import React from 'react'
import ToDo from './Todo'

const TodoList = props =>  {
  
  

    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.id} item={this.props.item}/>
        ))}
      
      </div>
    )
  };

  export default TodoList
