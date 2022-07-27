// We need to import {useState} 
import React, {useState} from 'react'

// For making counter using Hooks, We use functional component.
function HookCounter() {
  
  // useState is a method that takes in the input as the initial state value & return { current state value, method that is 
  // capable of updating the state }
  
  //   Array destructing
  const [count, setCount] = useState(0)    // Called as hook becoz we are using this feature/method to use other features of react

  return (
    <div>
        <button onClick={ () => setCount(count+1) } > Counter using hook {count}</button>
    </div>
  )
}

export default HookCounter