import React from "react";
import "./styles/App.css";

function App({ children }) {
  return (
    <div>
      <div className="App">{children}</div>
    </div>
  );
}

export default App;
