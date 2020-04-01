import React from "react";

const RecipeFormSteps = props => {
  let { steps } = props;
  return (
    <form>
      <fieldset className="recipe-form-field" onChange={props.stepChange}>
        <div className="label-container">
          <label className="recipe-form-label">Instructions</label>
        </div>
        {steps &&
          steps.map((step, i) => {
            let stepID = `step-${i}`;

            return (
              <div className="step-container" key={i}>
                <div className="step-number-container">
                  <label className="step-form-label">{`Step #${i + 1}`}</label>
                </div>
                <textarea
                  type="text"
                  name={stepID}
                  data-id={i}
                  id={stepID}
                  className="step"
                  value={step.step}
                  onChange={props.stepChange}
                />
              </div>
            );
          })}
        <button onClick={props.addStep} className="form-button">
          Add Step
        </button>
      </fieldset>
    </form>
  );
};

export default RecipeFormSteps;
