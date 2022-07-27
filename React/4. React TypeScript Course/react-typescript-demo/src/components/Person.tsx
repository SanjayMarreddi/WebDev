// type Personprops = {
//     name : {
//         first : String,
//         last : string    // Capital/Small S can be used.
//     } 
// }   ==> We can even move types to separate file & export there & import here. This is helpful in larger components/

import { Personprops } from "./Person_types"

export const Person = (props: Personprops) => {
    return <div>{props.name.first}  {props.name.last}</div>
}