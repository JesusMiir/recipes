import { useReducer } from "react";

//                   ⬇ this is the state before it changes
//                   ⬇        ⬇ This is the value passed to dispatch
const nReducer = (currentN, action) => {
    switch (action.type) {
        case "decrease":
            return currentN - 1
        case "increase":
            return currentN + 1
    }
}

function UseReducerExample() {
    const [n, dispatch] = useReducer(nReducer, 0)

    return (
        <>
            <h1>{n} times two is {n*2}</h1>
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
        </>
    )
}

export default UseReducerExample;