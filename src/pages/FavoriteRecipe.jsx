import { useEffect, useState, useContext } from "react";
import { ExampleContext } from "../context/ExampleContext";
import { populateFavorites } from "../util/util";

/*
  Ideas for RecipeContext

    toggleRecipeFavorite
    
    put your localStorage functions and any async functions in the context?
*/

function FavoriteRecipe({ favorites, setFavorites }) {
    const [recipes, setRecipes] = useState([]);
    
    const { n, increaseN } = useContext(ExampleContext)

    async function loadRecipes() {
      const recipes = await populateFavorites(favorites)
      setRecipes(recipes)
    
    }
  
    useEffect(() => {
      loadRecipes()
    }, []) // empty array means call on mount
    
    return (
        <>
          <button onClick={increaseN}>
            {n}
          </button>
          <h2>Favorites</h2>  
          { recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                { recipe.name }
                <br />
              </div>
            )
          })}
        </>
    )
}

export default FavoriteRecipe;