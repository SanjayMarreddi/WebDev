import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sanjay",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifeCycleA getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(){
    console.log("LifeCycleA componentDidUpdate")
  }
  
  changeState = () => {
    this.setState({
      name : 'Sanjay Marreddi'
    })
  }

  render() {
    console.log("LifeCycleA render");

    return ( <div> 
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB></LifeCycleB>
            </div> 
    )
  }
}

export default LifeCycleA;
