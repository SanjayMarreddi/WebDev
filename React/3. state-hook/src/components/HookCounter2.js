import React, {useState} from 'react'

function HookCounter2() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  
  const increment5 = () => {
      for(let i = 0; i <5; i++){
          
        // setCount(count+1)   // This wont work as expected. Moreover using this kind of updates is unsafe.
        // It is advisable to use setCount by passing a function when we want to update the state value from a previous state value.

        setCount( prevCount => prevCount + 1)
      }
  }

  return (
    <div>
        Count : {count}
        <button onClick = { () => setCount(initialCount)}> Reset </button> 
        
        {/* <button onClick = { () => setCount(count+1)}> Increment </button> 
        <button onClick = { () => setCount(count-1)}> Decrement </button>  */}
        
        <button onClick = { () => setCount( prevCount => prevCount + 1 ) }> Increment </button> 
        <button onClick = { () => setCount( prevCount => prevCount - 1 ) }> Decrement </button> 

        <button onClick = {increment5} >Increment 5</button> 
    </div>
  )
}

export default HookCounter2