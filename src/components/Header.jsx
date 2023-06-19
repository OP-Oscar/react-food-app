import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Devmountain Eatery</h1>
      <nav>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
