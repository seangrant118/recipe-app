import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../actions/search";
import { FaSearch, FaPlus } from "react-icons/fa";

const SearchBar = (props) => {
  // Set Search Conditions
  const [searchToggle, setSearchToggle] = useState("recipe");

  //Set search item for recipe search
  const [searchItem, setSearchItem] = useState("");

  const [ingSearchItems, setIngSearchItems] = useState([]);

  const [searchError, setSearchError] = useState("");

  const [errorClass, setErrorClass] = useState("search-error-none");

  // change state on change
  const onSearchChange = (e) => {
    let item = e.target.value.toLowerCase();
    setSearchItem(item);
  };

  // search for recipes with the query params
  const recipeQuery = (e) => {
    e.preventDefault();
    //adds search item to redux
    if (searchItem.trim() === "") {
      return false;
    }
    // props.recipeSearch(searchItem);
    const query = searchItem.trim();
    setSearchItem("");
    props.recipeSearchQuery(query, null);
    props.history.push("/search/recipe/" + query);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    if (searchItem.trim() === "") {
      return;
    }
    if (ingSearchItems.length < 4) {
      setIngSearchItems([...ingSearchItems, searchItem.toLowerCase().trim()]);
    } else {
      setSearchError("You can include up to four ingredients");
      setErrorClass("search-error");
    }
    setSearchItem("");
  };

  const ingredientQuery = (e) => {
    e.preventDefault();
    if (ingSearchItems.length === 0) {
      return false;
    }
    const query = ingSearchItems;
    props.ingredientSearchQuery(ingSearchItems);
    props.history.push("/search/ingredient/" + query);
    setIngSearchItems([]);
  };

  const removeItem = (e) => {
    console.log(e.target.getAttribute("name"));
    const name = e.target.getAttribute("name");

    setIngSearchItems(ingSearchItems.filter((item) => item !== name));

    // setIngSearchItems(ingSearchItems.filter((item) => item.dataset.id !== i));
  };

  const removeSearchError = () => {
    setSearchError("");
    setErrorClass("search-error-none");
  };

  if (searchToggle === "recipe") {
    return (
      <div className="search-container">
        <div className="search-items">
          <button
            className="btn toggle-search"
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
              autoComplete="off"
            />
            <button className="btn recipe-search-btn">
              <FaSearch />
            </button>
            <div>{props.recipeSearchItem}</div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-container">
        <div className="search-items">
          <button
            className="btn toggle-search"
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
              autoComplete="off"
            />
            <span className="sb-ing-item-container">
              {ingSearchItems.map((ing, i) => (
                <span
                  onClick={removeItem}
                  className="sb-ing-item"
                  name={ing}
                  key={i}
                >
                  {ing}
                </span>
              ))}
            </span>
            <div className="ingredient-search-btn-container">
              <button className="btn add-button">
                <FaPlus />
              </button>
              <button
                className="btn ingredient-search-btn"
                onClick={ingredientQuery}
              >
                <FaSearch />
              </button>
            </div>
          </form>
          <div className={errorClass} onClick={removeSearchError}>
            {searchError}
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { recipeSearchItem: state.search.recipeSearchItem };
}

export default connect(mapStateToProps, actions)(withRouter(SearchBar));
