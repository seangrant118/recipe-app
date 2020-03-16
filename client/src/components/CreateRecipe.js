import React from "react";
import requireAuth from "./requireAuth";

class CreateRecipe extends React.Component {
  state = {
    title: "",
    description: "",
    cooktime: {
      time: "",
      unit: "Mins"
    },
    preptime: {
      time: "",
      unit: "Mins"
    },
    servings: 0
  };
  titleChange = e => {
    let title = e.target.value;
    this.setState({
      title
    });
  };
  descriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description
    });
  };
  cookTimeChange = e => {
    const time = e.target.value;
    this.setState(prevState => ({
      cooktime: { ...prevState.cooktime, time }
    }));
  };
  cookUnitChange = e => {
    const unit = e.target.value;
    this.setState(prevState => ({
      cooktime: { ...prevState.cooktime, unit }
    }));
  };
  prepTimeChange = e => {
    const time = e.target.value;
    this.setState(prevState => ({
      preptime: { ...prevState.preptime, time }
    }));
  };
  prepUnitChange = e => {
    const unit = e.target.value;
    this.setState(prevState => ({
      preptime: { ...prevState.preptime, unit }
    }));
  };
  servingChange = e => {
    const servings = e.target.value;
    this.setState({
      servings
    });
  };
  render() {
    return (
      <form>
        <fieldset>
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.titleChange}
          />
        </fieldset>
        <fieldset>
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.descriptionChange}
          />
        </fieldset>
        <fieldset>
          <label>Cook Time</label>
          <input
            name="cook time"
            type="number"
            placeholder="cook time"
            value={this.state.cooktime.time}
            onChange={this.cookTimeChange}
          />
          <select
            value={this.state.cooktime.unit}
            onChange={this.cookUnitChange}
          >
            <option value="Mins">Mins</option>
            <option value="Hrs">Hrs</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Prep Time</label>
          <input
            name="prep time"
            type="number"
            placeholder="prep time"
            value={this.state.preptime.time}
            onChange={this.prepTimeChange}
          />
          <select
            value={this.state.preptime.unit}
            onChange={this.prepUnitChange}
          >
            <option value="Mins">Mins</option>
            <option value="Hrs">Hrs</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Servings</label>
          <input
            name="servings"
            type="number"
            placeholder="0"
            value={this.state.servings}
            onChange={this.servingChange}
          />
        </fieldset>
      </form>
    );
  }
}

export default requireAuth(CreateRecipe);
