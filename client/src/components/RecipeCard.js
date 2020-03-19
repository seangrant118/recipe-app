import React from "react";

const RecipeCard = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <a href={props.route}>View Recipe</a>
      <br />
    </div>
  );
};

export default RecipeCard;
