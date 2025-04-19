import { useState, useEffect } from "react";

function UseEffectExample() {

    const [products, setProducts] = useState([])

    async function loadProducts() {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        setProducts(data.products)
        // Q: What happens to the component when state is updated?
        // A: The component re-renders
    }

    // This will cause an infinite loop. THAT's why use need a useEffect on mount.
    loadProducts()

    return (
        <>
            {products.map(p => {
                return <></>
            })}
        </>
    )
}

export default UseEffectExample;