import React from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import "./styles/welcome.css";

class Welcome extends React.Component {
  state = {
    data: null,
  };
  componentDidMount() {
    const getData = async () => {
      const response = await axios.get("http://localhost:3090/recipe/random");
      this.setState({
        data: response.data,
      });
    };

    getData();
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome-header">
          Welcome! Sign in or Sign up to create a recipe
        </h1>
        <h5 className="welcome-search">
          Search for great recipes by name or ingredient
        </h5>
        <h3 className="welcome-featured">Featured Recipes</h3>
        <div className="welcome-display-container">
          {this.state.data ? (
            this.state.data.map((result, i) => {
              console.log(result);
              return (
                <RecipeCard
                  route={result.id}
                  description={result.description}
                  title={result.title}
                  image={result.image}
                  key={i}
                />
              );
            })
          ) : (
            <div>...Loading</div>
          )}
        </div>
      </div>
    );
  }
}

export default Welcome;
