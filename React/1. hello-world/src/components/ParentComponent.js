import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


// This file deals on how to pass methods as props.

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
  
    // Note that we have defined our button in child component & when user clicks on that button we want to execute method defined in the parent component.
    // we will achieve this using props. We pass the method itself as a prop to the child component.
  render() {
    return (
      <div>

          {/* We are passing the reference to the greetParent method as a prop called greetHandler */}
          <ChildComponent greetHandler = {this.greetParent} >  </ChildComponent>

      </div>
    )
  }
}

export default ParentComponent