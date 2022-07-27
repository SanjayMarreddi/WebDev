import React from 'react'

function ChildComponent(props) {
  return (
    // <div><button onClick = { props.greetHandler} > Greet parent</button></div>

    // Arrow function syntax is the simplest one to pass parameters to parent component from the child component.
    // Now we can pass any number of arguments to the below greetHandler.
    <div><button onClick = { () => props.greetHandler('child') } > Greet parent</button></div>

  )
}

export default ChildComponent