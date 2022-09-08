import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  
  
  render() {
    return (
      <div>
        console.log({this.props.list})
        {this.props.list.map(item => (
        <ToDo key={item.id} item={this.props.item}/>
        ))}
      
      </div>
    )
  }
}
