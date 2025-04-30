import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";

// This function should ALWAYS return an array
function getLikesFromLocalStorage() {

    // This could be null
    const storedRecipes = localStorage.getItem('likedRecipes')

    if (!storedRecipes) return [];

    try {
        // This could throw an error
        const recipes = JSON.parse(storedRecipes)

        // recipes might not be an array
        if (!Array.isArray(recipes)) return [];

        return recipes

    } catch (error) {
        return []
    }
}

function SingleRecipePage({ favorites, setFavorites }) {
    const [recipe, setRecipe] = useState(null);

    const params = useParams()

    const fetchRecipes = async () => {
        
        try {
            const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);

            if (!res.ok) {
                return
            }
    
            const data = await res.json();
            setRecipe(data);
            // console.log("data:", data)

        } catch {
            console.log(error)
        }
    }

    useEffect(() => {
        // console.log("The component has mounted.")
        fetchRecipes();
    }, []);

    
    if (!recipe) {
        return <>Loading...</>
    }

    return (
        <>
            <Link to="/recipes">Return</Link>
            <br/><br/>
            <FavoriteButton recipeId={ Number(params.id) } favorites={ favorites } setFavorites={setFavorites}/>
            <h1>{recipe.name}</h1>
            <ul>
                {recipe.ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient}>{ingredient}</li>
                    )  
                })}
            </ul>
            <ol>
                {recipe.instructions.map((instruction) => {
                    return (
                        <li key={instruction}>{instruction}</li>
                    )
                })}
            </ol>
        </>
    )
}

export default SingleRecipePage
