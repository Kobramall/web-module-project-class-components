import React from 'react'

 const Todo = props => {

    return (
      <div>
        <p>{props.item.list.name}</p>
      </div>
    )
  }

export default Todo