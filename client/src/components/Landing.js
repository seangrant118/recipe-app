import React from "react";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="layout">
      <div className="layout-container">
        <p className="layout-subtitle">Recipes so good I had to share</p>
        <div class="btn-container">
          <button className="btn-browse">
            <a className="a-browse" href="/home">
              Begin Browsing Recipes
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
