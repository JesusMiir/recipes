import { createContext, useState, useEffect } from "react";
import { getFavoritesFromLocalStorage, fetchRecipes } from "../util/util";

export const RecipeContext = createContext()

export function RecipiesContextProvider({ children }) {
    const [favoriteRecipes, setFavoriteRecipes] = useState(getFavoritesFromLocalStorage)
    const [recipes, setRecipes] = useState([]);
    const [skip, setSkip] = useState(0);
    const [fetchStatus, setFetchStatus] = useState("loading")

    async function loadRecipes() {
        let result = await fetchRecipes(skip);

        if (!result) {
            setFetchStatus("error")
            return
        }
        // console.log(result);
        setRecipes(result.recipes);
        //console.log(result.recipes)
        setFetchStatus("success")
    }

    useEffect(() => {
        loadRecipes()
    }, [skip]);

    useEffect(() => {
        localStorage.setItem('likedRecipes', JSON.stringify(favoriteRecipes))
    }, [favoriteRecipes])


    const toggleFavorite = (recipeId) => {
        const i = favoriteRecipes.findIndex(r => r.id === recipeId)
        const recipe = favoriteRecipes[i]

        const newFavorites = [...favoriteRecipes]

        if (!recipe) {
            newFavorites.push({ id: recipeId, liked: true })
        } else {
            newFavorites[i].liked = !newFavorites[i].liked
        }

        setFavoriteRecipes(newFavorites)
    }

    const turnPage = (direction /* 1 or -1 */) => {
        const newSkip = skip + direction*8
        if (newSkip < 0) return
        if (newSkip > 48) return
        setSkip(newSkip)
    }

    return (
        <RecipeContext.Provider value={{
            favoriteRecipes,
            toggleFavorite,
            skip,
            fetchStatus,
            recipes,
            turnPage
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

