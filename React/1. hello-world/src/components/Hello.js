// Simple functional component


import React from "react";


// This is the JSX version of Hello Component.
const Hello1 = () => {
    return (
        <div id = "hello" className="dummyClass">
            <h1> Hello Sanjay Marreddi </h1>
        </div>
    )
}


// Doing the samething, without using JSX.
const Hello = () => {
    // 2nd argument is additional properties. It is an object of key value pairs that will be applied to elements.
    // Ex: To have an attribute in div tag, React.createElement( 'div', { id: 'hello' }, __ )
    // Now if we inspect the broswer, we can see <div id = "hello" > in the generated HTML.

    return React.createElement('div',  {id: 'hello', className : 'dummyClass' } , React.createElement('h1', null, 'Hello Sanjay Marreddi.. :)', ))
}

// Each JSX element is a syntactic sugar for each React.createElement. So even when writing just JSX version,
// we need to import React since the JSX translates into React.createElement sort of code again.

export default Hello