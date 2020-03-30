import React from "react";

const RecipeFormSteps = props => {
  let { steps } = props;
  return (
    <form>
      <fieldset className="recipe-form-field" onChange={props.stepChange}>
        <button onClick={props.addStep}>Add Step</button>
        {steps &&
          steps.map((step, i) => {
            let stepID = `step-${i}`;

            return (
              <div key={i}>
                <label>{`Step #${i + 1}`}</label>
                <input
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
      </fieldset>
    </form>
  );
};

export default RecipeFormSteps;
