import React from 'react'

 const Todo = props => {
   console.log(props.item.length-1)
  return (
      <div>
        <p>{props.item[props.item.length-1].name}</p>
      </div>
    )
  }

export default Todo