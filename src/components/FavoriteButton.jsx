import { useEffect, useState } from 'react';

/*
  Homework: study higher order array methods
    forEach, map, filter, find, findIndex, every, some
  And define your own version of each one.
*/

function FavoriteButton({ recipeId, favorites, setFavorites }) {
  // console.log(recipeId, favorites, setFavorites)
  const i = favorites.findIndex(r => r.id === recipeId)
  const recipe = favorites[i]

  function handleLikeButtonFB() {


    const newFavorites = [...favorites]
    if (!recipe) {
      newFavorites.push({ id: recipeId, liked: true })
    } else {
      newFavorites[i].liked = !newFavorites[i].liked
    }

    setFavorites(newFavorites)

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