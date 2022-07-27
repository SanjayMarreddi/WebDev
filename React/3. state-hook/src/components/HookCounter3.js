import React, {useState} from 'react'

function HookCounter3() {

 // State variable can be int, string, any type, array or even an object ( as shown here. )    
 // useState hook's setter function (like setName unlike class component's setState ) will NOT automatically merge & update the states/objects.
 // We have to manually merge ourselves. We are using "..." operator in below code.
 const [name, setName] = useState({firstName: '', lastName: ' '})

  return (
    <div>
        <form>
{/*         
            ... is a spread operator.    
            This `...name, firstName : e.target.value` means: 
            Spread the name i.e. It means copy everything from the "name" object and then change only the value of firstName with e.target.value */}

            <input type="text" value = {name.firstName} onChange = { e => setName( { ... name, firstName : e.target.value} ) }></input>
            <input type="text" value = {name.lastName} onChange = { e => setName( { ... name, lastName : e.target.value} ) }></input>

            <h2>Your first name is - {name.firstName} </h2>
            <h2>Your last name is - {name.lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HookCounter3