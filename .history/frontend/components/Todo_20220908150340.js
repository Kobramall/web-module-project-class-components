import React from 'react'

 const Todo = props => {
console.log(props)
    return (
      <div>
        <p>{props.item[0].name}</p>
      </div>
    )
  }

export default Todo