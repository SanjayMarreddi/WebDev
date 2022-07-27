import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


// export const Input = ( {value, handleChange }: InputProps) => {   ==> We can destructure props.

export const Input = (props: InputProps) => {

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event) 
    // }   
    //     return <input type="text" value={props.value} onChange={handleInputChange}/>
    // So, Its fine even if you define the event within the component OR pass it as a Prop.

    return <input type="text" value={props.value} onChange={props.handleChange}/>
}