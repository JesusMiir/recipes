import { createContext, useState } from "react";

export const ExampleContext = createContext()

export function ExampleContextProvider({children}) {
    const [n, setN] = useState(0)

    const increaseN = () => {
        let newN = n + 5
        if (newN > 25) newN = 25
        setN(newN)
    }

    const decreaseN = () => {
        setN(n-5)
    }

    return (
        <ExampleContext.Provider value={{
            a: 1,
            b: 2,
            c: 3,
            n,
            increaseN,
            decreaseN
        }}>
            {children}
        </ExampleContext.Provider>
    )
}