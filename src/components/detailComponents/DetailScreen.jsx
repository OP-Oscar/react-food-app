import React, { useEffect, useState } from "react";
import DetailScreenImg from "./DetailScreenImg";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./DetailScreen.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  // console.log(`we got ${id}`)

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  console.log(recipe.instructions);

  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}

      <DetailScreenImg image={recipe.image_url} title={recipe.recipe_name} />

      <div className={classes.general_info}>
        <div className={classes.recipe_info}>
          <h1>Recipe</h1>
          <h3>Prep Time: {recipe.prep_time}</h3>
          <h3>Cook Time: {recipe.cook_time}</h3>
          <h3>Serves: {recipe.serves}</h3>
          <br />
          <h1>Ingredients</h1>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>

        <div className={classes.recipe_info}>
          <h1>Instructions</h1>
          <h3 style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions && JSON.parse(recipe.instructions)}</h3>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
