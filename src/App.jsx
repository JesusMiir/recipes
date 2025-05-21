import HeaderComponent from "./components/HeaderComponent";
import Recipes from "./pages/Recipes";
import Counter from "./components/Counter";
import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleRecipePage from "./pages/SingleRecipePage";
import FavoriteRecipe from "./pages/FavoriteRecipe";
import { getFavoritesFromLocalStorage } from './util/util.js'
import { RecipeContext } from "./context/RecipiesContext";
import WeatherPage from "./pages/WeatherPage.jsx";
import FavoriteLocation from "./pages/FavoriteLocation.jsx";


function App() {

  const { favoriteRecipes } = useContext(RecipeContext)

 
  return (
    <div className="container">
      <HeaderComponent />
      <br/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<SingleRecipePage />} />
        <Route path="/recipes/favorites" element={<FavoriteRecipe />} />
        <Route path="/weather" element={<WeatherPage/>}/>
        <Route path="/weather/:id" element={<WeatherPage/>}/>
        <Route path="/weather/favorites" element={<FavoriteLocation/>}></Route>
      </Routes>
    </div>
  )
}

export default App
