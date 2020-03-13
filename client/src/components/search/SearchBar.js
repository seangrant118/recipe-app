import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../actions/search";

const SearchBar = props => {
  // Set Search Conditions
  const [searchItem, setSearchItem] = useState("recipe");
  //Set search item for recipe search
  const [recipeItem, setRecipeItem] = useState("");

  // change state on change
  const onRecipeChange = e => {
    setRecipeItem(e.target.value);
  };

  // search for recipes with the query params
  const recipeQuery = e => {
    e.preventDefault();
    props.recipeSearch(recipeItem);
    const query = recipeItem;
    setRecipeItem("");
    props.history.push("/search/recipe/" + query);
  };

  if (searchItem === "recipe") {
    return (
      <div className="search-container">
        <button onClick={() => setSearchItem("ingredient")}>
          Search by ingredient
        </button>
        <form onSubmit={recipeQuery}>
          <input
            type="text"
            name="recipe"
            placeholder="Search for a recipe"
            onChange={onRecipeChange}
            value={recipeItem}
          />
          <button>Search</button>
          <div>{props.recipeSearchItem}</div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="search-container">
        <button onClick={() => setSearchItem("recipe")}>
          Search by recipe
        </button>
        <form>
          <input
            type="text"
            name="ingredient"
            placeholder="Search by ingredient"
          />
          <button>+</button>
          <button>search</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { recipeSearchItem: state.search.recipeSearchItem };
}

export default connect(mapStateToProps, actions)(withRouter(SearchBar));
