import {Name} from './Person_types'

type PersonListProps = {
    names: {
        first : string,
        last : string
    }[]

    // names: Name[]    ==> This is causing small error in line 18 key.
    
}   // This is how we define type for Array of Objects!


export const PersonList = (props:PersonListProps) => {
    return (
        <div>
           {props.names.map(name => {
               return (
                   <h2 key = {name.first}>{name.first} {name.last}</h2>
               )
           })}
        </div>
    )
}