import { useEffect, useState, useContext } from "react";
import { RecipeContext } from "../context/RecipiesContext";
import { populateFavorites } from "../util/util";

/*
  Ideas for RecipeContext

    toggleRecipeFavorite
    
    put your localStorage functions and any async functions in the context?

    US            UK
    favorite      favourite
    color         colour
    defense       defence

    useState
    useEffect
    useContext
    useRef
    useMemo
    useReducer

*/

function FavoriteRecipe() {
    
    const { favoriteRecipes, toggleFavorite } = useContext(RecipeContext)
    const [recipes, setRecipes] = useState([]);
    

    async function loadRecipes() {
      const recipes = await populateFavorites(favoriteRecipes)
      setRecipes(recipes)
    
    }
  
    useEffect(() => {
      loadRecipes()
    }, []) // empty array means call on mount
    
    return (
        <>
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