import { useEffect, useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipiesContext';

/*
  Homework: study higher order array methods
    forEach, map, filter, find, findIndex, every, some
  And define your own version of each one.
*/

function FavoriteButton({ recipeId }) {
  // console.log(recipeId, favorites, setFavorites)
  const { favoriteRecipes, toggleFavorite } = useContext(RecipeContext) 
  const i = favoriteRecipes.findIndex(r => r.id === recipeId)
  const recipe = favoriteRecipes[i]

  function handleLikeButtonFB() {
    toggleFavorite(recipeId)
  } 

  return (
    <>
      <button className='button-like' onClick={handleLikeButtonFB}>
        <img className='image' src={recipe?.liked ? "/heart-full.png" : "/heart.png"} alt="heart" style={{ width: "40px" }}/>
      </button> 
    </>
  );
};

export default FavoriteButton;