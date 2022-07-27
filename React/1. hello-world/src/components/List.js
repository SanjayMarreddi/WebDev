import React from 'react'
import Person from './Person'

function List() {

//   const names = ['Sanjay', 'Marreddi', 'Swetha']
//   const nameList =   names.map( (name) => <h1>{name}</h1> )
//   return (
//     <div>
//         {  // This pair of braces is to evaluate the JS code in this JSX. Usually we use {} for executing JS code inside JSX.
//           nameList
//         }
//     </div>
//   )

  const persons = [
      {id: 1, name: "sanjay", age: 12}, 
      {id: 2, name: "marreddi", age: 33}, 
      {id: 3, name: "swetha", age: 14}, 
  ]

  // key should be unique within the list. This key prop is not accessible from the child components. It is just used to render the list efficiently by react.
  // keys help react identify which items in the list are changed, added, removed & plays a crucial role in updating UI efficiently.
  const personsList = persons.map( person => (
        <Person key = {person.id} person = {person} > </Person>
    ) 
  )

    // Index as Key Anti-Pattern
    const names = ['Sanjay', 'Marreddi', 'Swetha', 'Sanjay']

    // In map, every item receives index also. So using it as key prop.
    const nameList =   names.map( (name, index) => <h1 key={index}>{index} {name}</h1> )
    return <div>{nameList}</div>
    // Possible problems while using index as key is explained in YT video-19.
  }

export default List