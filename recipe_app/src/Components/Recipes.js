import React from "react";
import style from "./Recipes_module.css";

function Recipes(props) {
  return (
    <div className="recipe">
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient, i) => {
          return <li key={i}>{ingredient.text}</li>;
        })}
      </ol>
      <p>{props.calories}</p>
      <img className="image" src={props.image} alt="" />
    </div>
  );
}

export default Recipes;
