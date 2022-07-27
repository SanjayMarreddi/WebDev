import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
           x:0, 
           y:0
        }
    }

    logMousePos = e => {
        this.setState({x:e.clientX, y: e.clientY})
    }

    // We setup the event listener only once. That is in componentDidMount
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePos)
    }

    // This is very good practise to do. Otherwise when we unmount the component, but didnt clean it up using below code,
    // It might lead to warnings & memory leak..
    componentWillUnmount(){
      window.removeEventListener('mousemove', this.logMousePos)
    }

  render() {
    return (
      <div>
          Class: X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse