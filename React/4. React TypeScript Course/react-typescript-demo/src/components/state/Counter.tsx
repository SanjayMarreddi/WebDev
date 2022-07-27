// If we have complex state logic where the next state depends on previous state, useReducer hook is preferable.
// Lets see how to type useReducer hook.

import { useReducer } from "react";

type CounterState = {
    count: number
}

type CounterAction = {
    type: string,
    payload: number
}

const initialState = {count: 0}

// Responsible for updating the state.
function reducer(state : CounterState, action : CounterAction){
    switch(action.type){
        case 'increment':
            return { count : state.count + action.payload }
        case 'decrement':
            return { count : state.count - action.payload }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload:10})}> Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', payload:10})}> Decrement 10</button>
        </>
    )
}