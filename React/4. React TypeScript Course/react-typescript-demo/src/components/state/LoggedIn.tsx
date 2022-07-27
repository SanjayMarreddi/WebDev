import { useState } from "react"

// Typescript does the type inferencing based on the initial value passed on to the useState function.
export const LoggedIn = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
            <div> User is { isLoggedIn ? 'logged in' : 'logged out' } </div>
        </div>
    )
}