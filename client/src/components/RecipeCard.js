import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <h3>{props.title}</h3>
      <div className="card-img-container">
        <a href={props.route}>
          <img className="card-img" src={props.image} alt="recipe" />
        </a>
      </div>
      <p className="card-desc">
        <em>{props.description}</em>
      </p>
      <br />
    </div>
  );
};

export default RecipeCard;
