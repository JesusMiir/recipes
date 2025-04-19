import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/*
        useEffect(callback, dependencyArray)

        1. On mount
            useEffect(()=>{
            
            }, [])
                empty array means the callback will only be called on mount

        2. On update of state
            useEffect(()=>{
            
            }, [state1, state2])
                called on mount and any time the listed state changes

        3. On destroy
            useEffect(()=>{
                return () => {
                
                }
            })

        npm i react-router-dom
*/

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [skip, setSkip] = useState(0);
    const [fetchStatus, setFetchStatus] = useState("loading")

    const fetchRecipes = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes?limit=8&skip=${skip}`);
    
            if (!res.ok) {
                setFetchStatus("error");
                return
            }
    
            const data = await res.json();
            console.log(data)
            setRecipes(data.recipes);
            setFetchStatus('success')
        } catch (error) {
            console.log(error)
            setFetchStatus("error")
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, [skip]);

    const handlePreviousButton = () => {
        if (skip > 0) {
            setSkip( skip - 8 );
        }
    }

    const handleNextButton = () => {
        if (skip < 48) {
            setSkip( skip + 8 );
        }
    }

    if (fetchStatus === 'loading') return (
        <>
            Loading...
        </>
    )

    if (fetchStatus === 'error') return (
        <>
            Something went wrong.
        </>
    )

    else if (fetchStatus === 'success') return (
        <>
            <div className="pagination">
                { skip > 0 && <button onClick={handlePreviousButton}>Previous</button>}
                <p>Page { skip / 8 + 1 } of 7</p>
                { skip < 48 && <button onClick={handleNextButton}>Next</button>}
            </div>
            {recipes.map((recipe) => {
                return (
                    <div key={ recipe.id }>
                        <Link to={`/recipe/${recipe.id}`}>
                            { recipe.name }
                            <br/>
                            <img src={ recipe.image } width="120px"/>
                        </Link>
                    </div>
                )
            })}
        </>
    );
}

export default Recipes;