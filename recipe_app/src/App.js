import React, { useEffect, useState } from "react";
import Recipes from "./Components/Recipes";
import "./App.css";

function App() {
  const APP_ID = "47e046cf";
  const APP_KEY = "912441592e7e23e25e05a89fac9eb157";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    console.log(search);
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipes
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
