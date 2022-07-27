import React from 'react'

// Step1
const Usercontext = React.createContext('Marreddi') // default value for the context can be passed here.

const UserProvider = Usercontext.Provider
const UserConsumer = Usercontext.Consumer

// exporting the provider & consumer components. We used this for componentF.
export {UserProvider, UserConsumer}

// This is for doing the same task using type prop of context. We will see how to do this to pass on value to component E this time.
// The limitations of usingg this contextType method is that:
// 1. It works only with Class components.
// 2. We can subscribe only to a single context using contextType.
export default Usercontext