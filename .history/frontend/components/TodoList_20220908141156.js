import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  
  
  render() {
    return (
      <div>
        {props.list.map(item => (
        <ToDo key={item.id} item={this.props.item}/>
        ))}
      
      </div>
    )
  }
}
