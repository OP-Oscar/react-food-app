import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeArea from "../RecipeArea";
import classes from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const recipeUrl = "https://recipes.devmountain.com";

  const getRecipes = () => {
    axios
      .get(`${recipeUrl}/recipes`)
      .then((res) => {
        setRecipes(res.data)
          console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <RecipeArea recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
