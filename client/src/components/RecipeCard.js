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
      <div className="card-desc-container">
        <p className="card-desc">{props.description}</p>
      </div>
      <br />
    </div>
  );
};

export default RecipeCard;
