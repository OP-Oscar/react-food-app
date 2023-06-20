import React, { useState } from "react";
import classes from "./RecipeArea.module.css";
import RecipeCard from "./RecipeCard";

const RecipeArea = ({ recipes }) => {
  const [search, setSearch] = useState("");

  function dataRequirements(recipe){
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase();  
    if(
    recipe.recipe_name !== "Not Found" && recipe.recipe_name !== "name" && recipe.type !== "" && recipe.image_url !== "" && recipe.recipe_name !== "CssPain" && recipe.image_url.includes("http") && recipe.image_url.length > 0 && recipe.type !== ""){
  return title.includes(searchParams)
  }}

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      return dataRequirements(recipe)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} key={recipe.recipe_id}/>;
    });

  return (
    <div className={classes.mainarea}>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <span className={classes.searchSpan}>
          <input
            type="text"
            value={search}
            onChange={(val) => setSearch(val.target.value)}
            placeholder="Search for a Recipe"
            className={classes.searchBtn}
          />
        </span>
      </div>
      <br />
      <div className={classes.recipe_holder}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
    </div>
  );
};

export default RecipeArea;
