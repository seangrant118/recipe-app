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
    //adds search item to redux
    if (searchItem.trim() === "") {
      return false;
    }
    // props.recipeSearch(searchItem);
    const query = searchItem.trim();
    setSearchItem("");
    props.recipeSearchQuery(query);
    props.history.push("/search/recipe/" + query);
  };

  const addIngredient = e => {
    e.preventDefault();
    if (searchItem.trim() === "") {
      return;
    }
    if (ingArr.length < 4) {
      ingArr.push(searchItem.trim());
    } else {
      setSearchError("You can include up to four ingredients");
    }
    setSearchItem("");
  };

  const ingredientQuery = e => {
    e.preventDefault();
    if (ingArr.length === 0) {
      return false;
    }
    const query = ingArr;
    // props.ingredientSearch(ingArr);
    props.ingredientSearchQuery(ingArr);
    props.history.push("/search/ingredient/" + query);
  };

  if (searchToggle === "recipe") {
    return (
      <div className="search-container">
        <div className="search-items">
          <button
            className="toggle-search"
            onClick={() => setSearchToggle("ingredient")}
          >
            Search by ingredient
          </button>
          <form className="search-form" onSubmit={recipeQuery}>
            <input
              type="text"
              name="recipe"
              placeholder="Search for a recipe"
              onChange={onSearchChange}
              value={searchItem}
              className="search-input"
            />
            <button className="recipe-search-btn">Search</button>
            <div>{props.recipeSearchItem}</div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-container">
        <button
          className="toggle-search"
          onClick={() => setSearchToggle("recipe")}
        >
          Search by recipe
        </button>
        <form className="search-form" onSubmit={addIngredient}>
          <input
            type="text"
            name="ingredient"
            placeholder="Search by ingredient"
            value={searchItem}
            onChange={onSearchChange}
            className="search-input"
          />

          <button className="add-button">+</button>
          <button className="ingredient-search-btn" onClick={ingredientQuery}>
            search
          </button>
        </form>

        {ingArr.map((ing, i) => (
          <li key={i}>{ing}</li>
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
