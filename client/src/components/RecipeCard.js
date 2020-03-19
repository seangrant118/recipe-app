import React from "react";

const RecipeCard = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        <em>{props.description}</em>
      </p>
      <a href={props.route}>View Recipe</a>
      <br />
    </div>
  );
};

export default RecipeCard;
