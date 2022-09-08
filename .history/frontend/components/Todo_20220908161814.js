import React from 'react'

 const Todo = props => {
  return (
      <div className={`item${props.item.done ? 'done' : ''}`}
      onClick={()=>props.toggle}>
        <p>{props.item[0].name}</p>
      </div>
    )
  }

export default Todo