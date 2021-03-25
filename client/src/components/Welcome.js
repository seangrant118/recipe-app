import React from "react";
import axios from "axios";
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
        <h3 className="welcome-search">
          Search for great recipes by name or ingredient
        </h3>
      </div>
    );
  }
}

export default Welcome;
