import React from 'react'
import classes from './RecipeCard.module.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (

    <div className={classes.recipe_card}>
      <div className={classes.img_card}>
    <img src={recipe.image_url}  alt="Not Found" style={{width: "100%", height:"100%", objectFit: "cover"}}/>
      </div>
    <div className={classes.recipe_container}>
      <h4><b>{recipe.recipe_name}</b></h4> 
      </div>
      <button className={classes.recipe_button} onClick={handleClick}>See More</button>
  </div>

  )
}

export default RecipeCard