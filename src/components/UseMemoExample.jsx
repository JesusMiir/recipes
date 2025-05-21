import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipiesContext";

const calculated = {}

function doubleVerySlowly(n) {
    // This is called memoization (not memorization)
    if (calculated[n] !== undefined) return calculated[n];

    for (let i = 0; i < 1_000_000_000; i++) {}
    calculated[n] = n*2
    return n*2
}

console.log(doubleVerySlowly(5))

function UseMemoExample() {

    // const { recipes } = useContext(RecipeContext)
    // const [sort, setSort] = useState('name')

    // const sortedRecipes = useMemo(() => {
    //     return recipes.sort((a, b) => {
    //         if (sort === 'name') {
    //             return a.name.localeCompare(b.name)
    //         } else if (sort === 'rating') {
    //             return b.rating - a.rating
    //         }
    //     })
    // }, [sort])
    //   ^ useMemo will look at this value. If it is a value that has already been used, it will store the previously calculated value, so it doens't have to calculate it again.

    // return (
    //     <>
    //         <button onClick={() => setSort('name')}>Sort by name</button>
    //         <button onClick={() => setSort('rating')}>Sort by rating</button>
    //        {sortedRecipes.map(r => {
    //         return (
    //             <div key={r.id}>
    //                 <h3>{r.name}</h3>
    //                 <p>{r.rating} / 5</p>
    //             </div>
    //         )
    //        })} 
    //     </>
    // )

    const [n, setN] = useState(0)
    // const doubled = doubleVerySlowly(n)
    const doubled = doubleVerySlowly(n)

    return (
        <>
            <h1>{n} times two is {doubled}</h1>
            <button onClick={() => setN(n-1)}>-</button>
            <button onClick={() => setN(n+1)}>+</button>
        </>
    )
}

export default UseMemoExample;