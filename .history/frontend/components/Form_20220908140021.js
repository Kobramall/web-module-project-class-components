import React from 'react'

export default class Form extends React.Component {

constructor(){
  super();
  this.state = {
    item: ""
  }
}
handleChanges = e => {
  e.preventDefault()
  this.setState({
    ...this.state, item: e.target.value
  })
}

  render() {
    return (
      <div>
        <form>
         <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
         <button>submit</button>
        </form> 
        <button>Clear</button>
      </div>
    )
  }
}
