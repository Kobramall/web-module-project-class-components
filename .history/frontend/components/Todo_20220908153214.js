import React from 'react'

 const Todo = props => {
  console.log(props.item[0].name)  
  return (
      <div>
        <p>{props.item.name}</p>
      </div>
    )
  }

export default Todo