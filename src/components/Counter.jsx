import { useState } from "react";

function Counter({max, min, step, defaultValue}) {
    const [number, setNumber] = useState(defaultValue);

    function increase(event) {
        // If the user is holding down the shift key, increase by step * 2
        let nextNumber = number + (step * (event.shiftKey ? 2 : 1))
        if (nextNumber >= max) {
            nextNumber = max
        };
        setNumber(nextNumber);
    }

    function decrease() {
        if (number > min) setNumber( number - step); 
    } 

    return (
        <>
            <button onClick={decrease}>-</button>
            { number }
            <button onClick={increase}>+</button>
        </>
    )
}

export default Counter;