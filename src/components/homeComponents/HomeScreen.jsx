import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios';


const HomeScreen = () => {
  const[recipe, setRecipe] = useState('');

  const getRecipes = () => {
    const recipeUrl = 'https://recipes.devmountain.com'
    axios.get(recipeUrl).then( res => {
      setRecipe(res.data)
      console.log(res.data)
    })
  }
  
  useEffect( () => {
    getRecipes()
  }, []);
  
  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen