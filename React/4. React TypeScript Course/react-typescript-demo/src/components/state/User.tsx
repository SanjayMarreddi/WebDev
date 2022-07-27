import { useState } from "react"
   
type AuthUser = {
    name : string
    email: string
}

// In this example, let's see  how to type "useState" hook when the initial value is known only in the future time.
export const User = () => {

    // Since the TS can infer wrong type when using setUser if we keep null as initial, We are expliclty telling inside <> to the TS that the
    // type of state `user` can be AuthUser OR null.
    const [user, setUser] =  useState< AuthUser | null >(null)

    const handleLogin = () => {
      setUser({
          name : "Sanjay",
          email: "sanjay.mareddi@gmail.com"
      })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
            <div>User name is {user?.name} </div>   
             {/* Here ? is must. since user object can be null. We check if the object is not null before accessing the properties. */}
            <div>User email Id is {user?.email}</div>
        </div>
    )
}



// Now, assume there is no logout option. Lets see how to write the code without using ? in the JSX.
export const User1 = () => {

    const [user, setUser] =  useState< AuthUser>( {} as AuthUser )   // This is called as useState Type Assertion.
    // If we are confident that the user value is definitely of the type "AuthUser", we can use type assertion like this.

    const handleLogin = () => {
      setUser({
          name : "Sanjay",
          email: "sanjay.mareddi@gmail.com"
      })
    }

    return (
        <div>
            <button onClick={handleLogin}> Login </button>
            <div>User name is {user.name} </div>   
            <div>User email Id is {user.email}</div>
        </div>
    )
}