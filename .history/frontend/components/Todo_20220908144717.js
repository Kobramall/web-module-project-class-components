import React from 'react'

 const Todo = props => {
console.log(props.item.list.name)
    return (
      <div>
        <p>{props.item.list.name}</p>
      </div>
    )
  }

export default Todo