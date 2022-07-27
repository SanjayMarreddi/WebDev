import React,{Component} from "react";

// This is a class component file.

// For a class named "Welcome" to become a class component of react, It should extend the class "Component" & also
// implement a method called render. 
class Welcome1 extends Component{
    render(){
        return ( 
            <div>
                  <h1>Welcome {this.props.name} a.k.a {this.props.heroname} </h1>
                  {this.props.children}
            </div>
        )
    }
}

// Destructuring props inside render method.
class Welcome extends Component{
    render(){

        // We can even dest. only req. properties.
        const {name, heroname, children } = this.props
        
        // Syntax for dest. states is as follows:
        // const { state1, state2, state3, ..} = this.state

        return ( 
            <div>
                  <h1>Welcome {name} a.k.a {heroname} </h1>
                  {children}
            </div>
        )
    }
}

export default Welcome
