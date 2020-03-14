import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../actions/search";

const ingArr = [];

const SearchBar = props => {
  // Set Search Conditions
  const [searchToggle, setSearchToggle] = useState("recipe");
  //Set search item for recipe search
  const [searchItem, setSearchItem] = useState("");

  const [searchError, setSearchError] = useState("");

  // change state on change
  const onSearchChange = e => {
    setSearchItem(e.target.value);
  };

  // search for recipes with the query params
  const recipeQuery = e => {
    e.preventDefault();
    props.recipeSearch(searchItem);
    const query = searchItem;
    setSearchItem("");
    props.history.push("/search/recipe/" + query);
  };

  const addIngredient = e => {
    e.preventDefault();
    if (ingArr.length < 4) {
      ingArr.push(searchItem);
    } else {
      setSearchError("You can include up to four ingredients");
    }
    setSearchItem("");
  };

  if (searchToggle === "recipe") {
    return (
      <div className="search-container">
        <button onClick={() => setSearchToggle("ingredient")}>
          Search by ingredient
        </button>
        <form onSubmit={recipeQuery}>
          <input
            type="text"
            name="recipe"
            placeholder="Search for a recipe"
            onChange={onSearchChange}
            value={searchItem}
          />
          <button>Search</button>
          <div>{props.recipeSearchItem}</div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="search-container">
        <button onClick={() => setSearchToggle("recipe")}>
          Search by recipe
        </button>
        <form onSubmit={addIngredient}>
          <input
            type="text"
            name="ingredient"
            placeholder="Search by ingredient"
            value={searchItem}
            onChange={onSearchChange}
          />
          <button>+</button>
        </form>
        <button>search</button>
        {ingArr.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
        {searchError}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { recipeSearchItem: state.search.recipeSearchItem };
}

export default connect(mapStateToProps, actions)(withRouter(SearchBar));
