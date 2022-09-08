import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  
  
  render() {
    return (
      <div>
        <p>{this.props.list}</p>
        {this.props.list.map(item => (
        <ToDo key={item.id} item={this.props.item}/>
        ))}
      
      </div>
    )
  }
}
