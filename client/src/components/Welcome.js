import React from "react";
import "./styles/welcome.css";

export default () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">
        Welcome! Sign in or Sign up to create a recipe
      </h1>
      <h3 className="welcome-search">
        Search for great recipes by name or ingredient
      </h3>
    </div>
  );
};
