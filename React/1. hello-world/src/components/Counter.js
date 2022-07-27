// File to demonstrate the usage of setState.

// Note : 
// 1. `rce` can be used to get react class component template becoz of the extension. remove export keyword before class.
// 2. `rconst` to populate the constructor.

import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {   // state is an object.
       count : 0     // state's property is count.
    }
  }

  increment(){

        // Note1: This increments value & prints to console but wont update the UI. So never update state directly outside constructor. Always use setState method.
        // this.state.count = this.state.count + 1     
        // console.log(this.state.count)

        // this.setState( { count: this.state.count + 1 })  
        // console.log(this.state.count)   // On console it will be 1 less than the thing displayed on UI. 
        // This is becoz, calls to setState are asynchronous. So, console.log is being called before the state is being set.
        // But what if we want to print only after setting the state.
        // For that we use 2nd argument of setState method called "CallBackfunction"

        // this.setState( { count : this.state.count + 1},  () => {console.log('Call back value', this.state.count)} )
        // Note2: When ever we need to execute some code after the state has been changed, Dont write the code after the setState method.
        // Instead pass it as an second argument ( call back function ) to setState method itself.

        //   Note3: When ever we wanted to update the state based on the previous state, we need to pass a function instead of object for the 1st argument of
        //   setState method.
        this.setState(  (prevState, props) => ({count: prevState.count+1} ) ,   () => {console.log('Call back value', this.state.count)} )    
  }

  incrementFive(){
    this.increment() 
    this.increment() 
    this.increment() 
    this.increment() 
    this.increment() 
  }
  
  render() {
    return (
      
      <div>
            <h1>Count - {this.state.count} </h1>
            <button onClick = { () => this.increment() } >Increment</button>  <br/>

            <button onClick = { () => this.incrementFive() } >Increment5</button> 

        {/*             
            If we click this, UI updates just by 1 and console log prints value of previous state + 1  five times.
            Actually, react might group multiple setState calls into single call for better performances. So here updated value of count didnt carry
            over the consecutive calls. 

            Note3: When ever we wanted to update the state based on the previous state, we need to pass a function instead of object for the 1st argument of
            setState method.
        
        */}


      </div>
    )
  }
}

export default Counter