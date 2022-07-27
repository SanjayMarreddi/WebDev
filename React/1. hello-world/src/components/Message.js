import React,{Component} from "react";

// Example demonstrating state in react. A state is an object that is privately maintained in a component.
// A state can influence what is rendered in the browser. State can be changed within the component.
class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : "Welcome Visitor"
        }
    }
    
    changeMessage(){
        this.setState({ message: 'Thank you for subscribing'})
    }

    render(){
        return ( 
            <div>
                  <h1> {this.state.message} </h1>
                  <button onClick={ () => this.changeMessage() }> Subscribe </button>
            </div>
        )
    }

}

export default Message
