import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => (
        <ToDo key={item.id} item={item}/>
        ))}
      
      </div>
    )
  }
}
