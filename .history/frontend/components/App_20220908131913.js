import React from 'react'
import Form from './Form'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Todos: ""
    };
  }
  
  
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <Form />
      </div>
    )
  }
}
