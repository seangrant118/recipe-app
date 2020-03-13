import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../actions/search";

const SearchBar = props => {
  const onRecipeChange = e => {
    props.recipeSearch(e.target.value);
  };

  const recipeQuery = e => {
    e.preventDefault();
    const query = props.recipeSearchItem;
    props.history.push("/search/recipe/" + query);
  };

  const [searchItem, setSearchItem] = useState("recipe");

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
          Search by recipie
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
