import React from 'react'

 const Todo = props => {
  return (
      <div>
        <p>{props.item[props.item.length-1].name}</p>
      </div>
    )
  }

export default Todo