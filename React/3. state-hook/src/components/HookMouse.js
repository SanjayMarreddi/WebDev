import React, {useState, useEffect} from 'react'

// We will see how to run an effect only once using Hooks.
// Or in terms of class components terminology, We will see how to mimic componentDidMount() method using "useEffect" & functional components.

function HookMouse() {

  // Creating two state variables x,y.
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const logMousePos = e => {    // e stands for event.
      console.log("Mouse event")
      setX(e.clientX)
      setY(e.clientY)
  }

  // If we use the below code, when we move the mouse around, we can see that the useEffect is called every time the component re-renders.
  // As we know unless we specify the dependency array, the effect is called everytime, the component is rendered.
  // For our use case, we just want our effect to be called only once. And we dont want effect to depend on anything. We want to call it once in the initial render only.
  //   useEffect(() => {
  //     console.log("UseEffect called")
  //     return window.addEventListener('mousemove', logMousePos)
  //  })

  // So we specify [] as 2nd argument. So we are telling react that this effect doesn't depend on any props/states. So there is no need of calling
  // this effect on re-renders.
  useEffect(() => { 
    console.log("UseEffect called") 
    window.addEventListener('mousemove', logMousePos) 
    
    // To mimic componentWillUnmount, we can return a fnc from the function being passed as 1st argument to useEffect.
    // This will be executed when the component will unmount. That is the function being returned will be our cleanUp fnc.
    // We can use the same logic for other purposes like: cancelling subscriptions, timers, etc.
    return () => {
      console.log('Component unmouting code')
      window.removeEventListener('mousemove', logMousePos)
    }

  }, [] )
  

  // useEffect with CLEANUP --> Mimic ComponentWillUnmount() functionality using useEffect hooks.

  return (
    <div>
        Hooks: X - {x} Y - {y}
    </div>
  )
}

export default HookMouse