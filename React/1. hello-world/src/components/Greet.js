import React from 'react'

// This file is a functional component.
function Greet1(){
    return <h1> Hello Sanjay</h1>
}

// Better to use ES6 arrow function syntax.
// Note that we can return only 1 wrapper tag from the function. So when we have multiple lines of code/elements,
// We wrap in div & then return.

const Greet11 = (props) => { 
    console.log(props)
    return ( 
     <div>
             <h1> Hello {props.name}!!! a.k.a {props.heroname} </h1>
             {props.children}
     </div>
    )
}

// Desctructuring props in the arguments itself.
const Greet111 = ({name, heroname, children}) => { 
    return ( 
     <div>
             <h1> Hello {name}!!! a.k.a {heroname} </h1>
             {children}
     </div>
    )
}

// Destructuring props in the function.
const Greet = (props) => { 
    const {name, heroname, children} = props
    return ( 
        <div>
                <h1> Hello {name}!!! a.k.a {heroname} </h1>
                {children}
        </div>
    )
}

// This below type of import allows us to import with any name.  import anyName from './components/Greet'
export default Greet

// But using below thing instead makes it comp. to use same name. This is termed as named export.
// export const Greet = () => <h1> Hello Sanjay!</h1>
// import {Greet} from './components/Greet'