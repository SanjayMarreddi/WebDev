import React, { Component } from 'react'
import {UserConsumer} from './userContext'

class ComponentF extends Component {
  render() {
    return (

    //    Step3. consuming username from context & passing an arrow function as its child. The fnc receives context value as its parameter. 
    <UserConsumer>
        
        {/* Definining an arrow function */}
        {
            (username) => {
                return <div>Component F Hello {username} </div>
            }
        }

    </UserConsumer>
    )
  }
}

export default ComponentF