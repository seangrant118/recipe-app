import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/search";

class RecipeSearch extends React.Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.recipeSearchQuery(id, () => {
      this.setState({
        loaded: true
      });
    });
  }
  render() {
    const searchResults = this.props.recipeSearchResults;
    if (this.state.loaded) {
      return (
        <div>
          <div>Displaying results for {this.props.match.params.id} recipes</div>
          {searchResults.map((result, i) => {
            const id = result._id;
            const route = "/recipes/" + id;
            return (
              <div key={i}>
                <div>Title: {result.title}</div>
                <a href={route}>link to recipe</a>
              </div>
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
  return { recipeSearchResults: state.search.recipeSearchResults };
}

export default connect(mapStateToProps, actions)(RecipeSearch);
