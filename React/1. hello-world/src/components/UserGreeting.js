import React, { Component } from 'react'

// Conditional Rendering

class UserGreeting extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn : true
     }
   }


    render() {
     
    // Method1:  
    // If else statements dont work inside the JSX directly. JSX is just syntactic sugar for function calls & object construction.
    //  if (this.state.isLoggedIn){
    //      return <div> Welcome Sanjay </div>
    //  }
    //  else{
    //     return <div> Welcome Guest </div>
    //  }
     
    // Method2: Element Variables
    //  let message
    //  if (this.state.isLoggedIn){
    //      message = <div>Welcome Sanjay</div>
    //  }
    //  else{
    //      message = <div>Welcome Guest</div>
    //  }
    // return <div>{message}</div>

    // Method3: Ternary
    // return (
    //     this.state.isLoggedIn ? 
    //     <div> Welcome Sanjay</div> :
    //     <div> Welcome Guest</div>
    // )

    // Method4: Short Circuit Operator approach.  => Render something/nothing.
    return this.state.isLoggedIn && <div>Welcome Sanjay</div>


    // return (
    // <div>
    //     <div> Welcome Sanjay </div>
    //     <div> Welcome Guest </div>
    // </div> 
    // )

  }
}

export default UserGreeting