import React from "react";
import requireAuth from "./requireAuth";

class CreateRecipe extends React.Component {
  render() {
    return <div>Create Recipe</div>;
  }
}

export default requireAuth(CreateRecipe);
