import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <p>{this.props}</p>
      </div>
    )
  }
}
