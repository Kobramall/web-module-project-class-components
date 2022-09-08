import React from 'react'
import Form from './Form'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Todos: ""
    };
  }
  
  handleChanges = e => {
    e.preventDefault()
    this.setState({
      ...this.state, Todos: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <Form handleChanges={this.handleChanges}/>
      </div>
    )
  }
}
