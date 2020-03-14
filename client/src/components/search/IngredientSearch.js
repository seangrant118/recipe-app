import React from "react";

const IngredientSearch = props => {
  const items = props.match.params.id.split(",");
  return (
    <div>
      showing results for recipes that include{" "}
      {items.map((item, i) => (
        <span key={i}>'{item}' </span>
      ))}
    </div>
  );
};

export default IngredientSearch;
