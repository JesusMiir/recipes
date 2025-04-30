export const fetchRecipes = async (skip) => {
    try {
        const res = await fetch(`https://dummyjson.com/recipes?limit=8&skip=${skip}`);

        if (!res.ok) {
            return
        }

        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


export function getFavoritesFromLocalStorage() {
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

// Takes in favorites, ( [{id: ..., liked ... } ])
// Returns array of recipes fetched from the API
//  https://dummyjson.com/recipes/8
export async function populateFavorites(favorites) {
    let recipes = [];
    for (let i = 0; i < favorites.length; i++) {
        try {
                    // This gets the HTTP response
            const res = await fetch(`https://dummyjson.com/recipes/${favorites[i].id}`); 

                    // This gets the response body
                    // It's streaming to us, so it comes as a promise
            const data = await res.json()  
            recipes.push(data)
        } catch  (error) {
            return []
        }
    }
    return recipes
}