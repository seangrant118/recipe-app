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
    return (
      <div>
        <div>showing results for {this.props.match.params.id} recipes</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipeSearchResults: state.search.recipeSearchResults };
}

export default connect(mapStateToProps, actions)(RecipeSearch);
