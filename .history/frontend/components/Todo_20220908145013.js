import React from 'react'

 const Todo = props => {
console.log(props.item.list[0].name)
    return (
      <div>
        <p>{props.item.list[0].name}</p>
      </div>
    )
  }

export default Todo