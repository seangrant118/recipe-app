import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/search";
import RecipeCard from "../RecipeCard";

class IngredientSearch extends React.Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.ingredientSearchQuery(id, () => {
      this.setState({
        loaded: true
      });
    });
  }
  render() {
    const results = this.props.ingredientSearchResults;
    const items = this.props.match.params.id.split(",");
    if (this.state.loaded) {
      return (
        <div>
          <div>
            showing results for recipes that include{" "}
            {items.map((item, i) => (
              <span key={i}>'{item}' </span>
            ))}
          </div>
          {results.map((result, i) => {
            const id = result._id;
            const route = "/recipes/" + id;
            return (
              <RecipeCard
                description={result.description}
                route={route}
                title={result.title}
                image={result.image}
                key={i}
              />
            );
          })}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { ingredientSearchResults: state.search.ingredientSearchResults };
}

export default connect(mapStateToProps, actions)(IngredientSearch);
