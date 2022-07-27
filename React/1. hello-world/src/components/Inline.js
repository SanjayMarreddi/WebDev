// Inline styling
import React from 'react'

const heading = {
    fontSize : '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        
        {/* Here error style is being applied to child component (Inline) also since it is not a module. Just CSS. 
            Infact it applies to every child component.
        */}
        <h1 className='error'>Error</h1>

        {/* The immediate below line doesnot work since it is a module
        <h1 className= {styles.success}>Success</h1> */}

        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline