import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }

  return (
    <div>
        {/* Make sure to not have a function call. Just put the name for the eventHandler */}
        <button onClick = { clickHandler } >Click</button>
    </div>
  )
}

export default FunctionClick