import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Todos: ""
    }
  }
  
  
  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}
