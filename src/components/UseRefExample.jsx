import { useRef, useState } from 'react'

function UseRefExample() {

    const [n, setN] = useState(0)

    let myVar = 0
    let myRef = useRef(0)

    console.log(`
        The component has re-rendered!
        myVar = ${myVar}
        myRef.current = ${myRef.current}

        myVar doesn't increase even though we said "myVar++"
        because it is re-initialized as 0 every time the component renders

        myRef.current helps us keep track of the value of something
        accross multiple renders of a component

        in other words, useRef helps react "remember" variables
    `)

    // A ref will always be an object with a "current" property
    const inputRef = useRef(null)

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{
                console.log(inputRef)
                console.log("THIS is the HTML Element:", inputRef.current)
                console.log(inputRef.current.value)
            }}>
                Click here
            </button>
            <br /> <br />
            <button onClick={() => {
                myVar++
                myRef.current++
                setN(n+1)
            }}>Re-render component</button>
        </>
    )
}

export default UseRefExample;