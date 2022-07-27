import React, { Component } from 'react'
import './App.css';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'

class App1 extends Component {
  render() {
    return (
      <div className='App'>App
     
      {/* Step2. This value can be accessed by ComponentC & any component nested inside component C. */}
      <UserProvider value = "Sanjay">

      <ComponentC></ComponentC>  
      {/* Since we have added default context value now, If we comment UserProvider above & below, we get the default value in the output */}

      </UserProvider>
      
      </div>
    )
  }
}

export default App1