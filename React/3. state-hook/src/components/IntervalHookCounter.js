import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
   const[count, setCount] = useState(0)
   
//    const tick = () => {
//         setCount(count+1)
//    }

//    // This wont work as expected.
//    // If you think dependency array is a way to specify when u want to re-run the effect you are going to run into problem.
//    // Instead, dependency array should be thought of as a way to let REACT know about everything that the effect must watch for changes.
//    // So, we want to mimic componentDidMount. But we kept [], It means we told the react to ignore watching for changes in the count variable.
//    // It is a common beginner's mistake to leave out the dependency array. So instead of [], [count] should be the 2nd argument of useEffect.   

//    useEffect( () => {
//        const interval = setInterval(tick, 1000)

//        return () => {
//            clearInterval(interval)
//        }
//    }, [count] )

 
    // Other way without using dependency array   
    const tick = () => {
       setCount(prevCount => prevCount+1)
    }

    useEffect( () => {
        
        // Side Tip: When you have to call some function inside useEffect, It is advised to define the function
        // inside the UseEffect, so that u dont forget to see if any prop is to be kept in the dependency array of useEffect. If below code is there,
        // dependency array is [someProp]
        // function doSomething(){
        //     console.log(someProp)
        // }
        // doSomething()

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [] )
 
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter