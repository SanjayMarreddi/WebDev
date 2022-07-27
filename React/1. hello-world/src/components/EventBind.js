import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message : "Hello"
    }

    {/* Method3 of binding. This is better since it has happens only once in constructor unlike render method. */}
    // this.clickHandler = this.clickHandler.bind(this)
  } 
  
    // "this" keyword is undefined in Event Handler, so event binding is necessary in react class components. 
    //   clickHandler(){
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    //     console.log(this)
    //   }

    // Method4 of binding by defining clickHandler using arrow fncs.
    clickHandler = () => {
        this.setState({
            message: "Goodbye!"
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>

            {/* Method1 of binding using bind :: Performance problem */}
            {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click</button>   */}

            {/* Method2 of binding using arrow functions. :: Performance problem but easy to pass arguments. */}
            {/* Note that calling function here i.e. using () is needed since we need to return. */}
            {/* <button onClick= {() => this.clickHandler() }>Event Bind Click</button>    */}

            {/* Optimal & mostly seen method is binding in the constructor. */}
            <button onClick={this.clickHandler}> Event Bind Click</button>
      </div>
    )
  }

}

export default EventBind