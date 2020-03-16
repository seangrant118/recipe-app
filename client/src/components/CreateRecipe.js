import React from "react";
import requireAuth from "./requireAuth";

class CreateRecipe extends React.Component {
  state = {
    title: "",
    description: "",
    cooktime: {
      time: "",
      unit: "Mins"
    }
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
  unitChange = e => {
    const unit = e.target.value;
    this.setState(prevState => ({
      cooktime: { ...prevState.cooktime, unit }
    }));
    // this.setState({
    //   cooktime: {
    //     unit
    //   }
    // });
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
          <select value={this.state.cooktime.unit} onChange={this.unitChange}>
            <option value="Mins">Mins</option>
            <option value="Hrs">Hrs</option>
          </select>
        </fieldset>
      </form>
    );
  }
}

export default requireAuth(CreateRecipe);
