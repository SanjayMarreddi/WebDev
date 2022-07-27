import React from 'react'

function Person({person}) {  // Note the {} around person. We are desctructuring props directly in the argument here.
  return (
    <div>
        <h2>
        I am {person.name} with id as {person.id}. I am {person.age} years old.
        </h2>
    </div>
  )
}

export default Person