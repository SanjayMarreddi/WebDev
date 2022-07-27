import React, {useState} from 'react'

// State variable as array of objects.
function HookCounter4() {
  const [items, setItems] = useState([])
  
  const addItem = () => {

    // Appending after copying (...)
    setItems( [ ...items, { id : items.length,
                           value: Math.floor(Math.random()* 10) } ] )
  }
  
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item => <li key = {item.value}>{item.value}</li> )
            }
        </ul>
    </div>
  )
}

export default HookCounter4