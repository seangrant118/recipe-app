import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/search";

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
