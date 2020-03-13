import React, { useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("search");
  if (searchItem === "recipe") {
    return (
      <div className="search-container">
        <button onClick={() => setSearchItem("ingredient")}>
          Search by ingredient
        </button>
        <form>
          <input type="text" name="recipe" placeholder="Search for a recipe" />
          <button>Search</button>
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
          <button>search</button>
        </form>
      </div>
    );
  }
};

export default SearchBar;
