import HeaderComponent from "./components/HeaderComponent";
import Recipes from "./pages/Recipes";
import Counter from "./components/Counter";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleRecipePage from "./pages/SingleRecipePage";
import FavoriteRecipe from "./pages/FavoriteRecipe";
import { getFavoritesFromLocalStorage } from './util/util.js'

function App() {

  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  useEffect(()=>{
    localStorage.setItem('likedRecipes', JSON.stringify(favorites))
    console.log("favorites has updated:", favorites)
  }, [favorites])

  return (
    <div className="container">
      <HeaderComponent />
      <br/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/recipe/:id" element={<SingleRecipePage favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/recipes/favorites" element={<FavoriteRecipe favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  )
}

export default App
