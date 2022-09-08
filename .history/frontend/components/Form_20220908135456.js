import React from 'react'

export default class Form extends React.Component {

constructor(){
  super();
  this.state = {
    item: ""
  }
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
