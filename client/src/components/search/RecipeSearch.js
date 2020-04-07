import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/search";
import RecipeCard from "../RecipeCard";
import "../styles/search/search.css";

class RecipeSearch extends React.Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.recipeSearchQuery(id, () => {
      this.setState({
        loaded: true,
      });
    });
  }
  render() {
    const searchResults = this.props.recipeSearchResults;
    console.log(searchResults);
    if (this.state.loaded) {
      if (searchResults && searchResults.length > 0) {
        return (
          <div className="search-items-container">
            <div className="displaying">
              Displaying results for {this.props.match.params.id} recipes...
            </div>
            <div className="search-items-display-container">
              {searchResults.map((result, i) => {
                const id = result._id;
                const route = "/recipes/" + id;
                return (
                  <RecipeCard
                    route={route}
                    description={result.description}
                    title={result.title}
                    image={result.image}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <div>
            We couldn't find any {this.props.match.params.id} recipes :(
          </div>
        );
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { recipeSearchResults: state.search.recipeSearchResults };
}

export default connect(mapStateToProps, actions)(RecipeSearch);
