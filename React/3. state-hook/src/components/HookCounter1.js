import React, {useState, useEffect} from 'react'

// This shows usage of "useEffect"

function HookCounter1() {
  const [count, setCount] = useState(0)  
  const [name, setName] = useState('')
  
  // We pass a fnc that gets executed after every render of the component. We are executing useEffect fnc here itself.
  useEffect(  ()  => { console.log("updating title")
                       document.title = `You clicked ${count} times` 
                       }, [count] )
  // Those states mentioned in the second argument of useEffect, Only for those state values change, the function in the 1st argument will be executed.
  // So, to conditionally run an effect, we need to specify the 2nd argument. It is the array of values that the effect depends upon..


  return (
    <div>
        <input type="text" value={name} onChange={ e => setName(e.target.value)}></input>
        <button onClick={ () => setCount(count+1)}> Click {count} times </button>
    </div>
  )
}

export default HookCounter1