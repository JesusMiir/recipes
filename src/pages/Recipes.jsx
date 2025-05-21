import { useEffect, useState, useContext } from "react";
import { RecipeContext } from "../context/RecipiesContext";
import { Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { fetchRecipes } from "../util/util";


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

    How to handle proimses

    1. Async/await

        async function myAsyncFn() {
            let result = await thePromise
        }

    2. then/catch

        thePromise
            .then(result => {

            })
*/

function Recipes({ favorites, setFavorites }) {
    const {
        recipes,
        skip,
        fetchStatus,
        turnPage
    } = useContext(RecipeContext)


    const handlePreviousButton = () => {
        turnPage(-1)
    }

    const handleNextButton = () => {
        turnPage(1)
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
                            <br/>
                            { recipe.name }
                            <br/>
                            <img src={ recipe.image } width="120px"/>
                            <br/>
                        </Link>
                        <FavoriteButton recipeId={recipe.id} favorites={favorites} setFavorites={setFavorites} />
                    </div>
                )
            })}
        </>
    );
}

export default Recipes;