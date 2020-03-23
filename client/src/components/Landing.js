import React from "react";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="layout">
      <div className="layout-container">
        <h1 className="layout-title">Ma's Cookbook</h1>
        <p className="layout-subtitle">Recipes so good I had to share</p>
        <button className="btn-browse">
          <a className="a-browse" href="/home">
            Begin Browsing Recipes
          </a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
