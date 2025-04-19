import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// This function should ALWAYS return an array
function getLikesFromLocalStorage() {
    //  ALWAYS return an array
}

function SingleRecipePage() {
    const [recipe, setRecipe] = useState(null);
    const [like, setLike] = useState(false);
    const params = useParams()

    const fetchRecipes = async () => {
        
        try {
            const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);

            if (!res.ok) {
                return
            }
    
            const data = await res.json();
            setRecipe(data);
            console.log("data:", data)

        } catch {
            console.log(error)
        }
    }

    //console.log("params:", params);

    useEffect(() => {
        console.log("The component has mounted.")
        fetchRecipes();
    }, []);

    
    useEffect(() => {
        console.log("The component mounted OR recipe was updated.")
    }, [recipe])
    
    if (!recipe) {
        return <>Loading...</>
    }

    function handleLikeButton() {
        // get likes from localStorage

        // if the recipe is liked, remove it, else add it

        // save back to localStorage

        // setLike to the opposite of like
        // (like) ? setLike(false) : setLike(true);
        setLike(!like)
    }

    return (
        <>
            <Link to="/recipes">Return</Link>
            <br/><br/>
            <button onClick={handleLikeButton}>{ (!like) ? "Like" : "Unlike" }</button>
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
