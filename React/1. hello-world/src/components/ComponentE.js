import React, { Component } from 'react'
import ComponentF from './ComponentF'
import Usercontext, { UserConsumer } from './userContext'

class ComponentE extends Component {
  static contextType = Usercontext
  render() {
    return (
      <div>
        Component E Hello {this.context}
        <ComponentF></ComponentF>
      </div>
    )
  }
}

// ComponentE.contextType  = Usercontext    This is an alternate for line 6.

export default ComponentE