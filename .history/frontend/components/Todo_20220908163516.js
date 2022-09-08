import React from 'react'

 const Todo = props => {
  console.log(props.item.done)
  return (
      <div className={`item${props.item.done ? 'done' : ''}`}
      onClick={() => props.toggle(props.item.id)}>
        <p>{props.item.name}</p>
      </div>
    )
  }

export default Todo