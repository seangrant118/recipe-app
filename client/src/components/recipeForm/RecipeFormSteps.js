import React from "react";

const RecipeFormSteps = props => {
  let { steps } = props;
  return (
    <form>
      <fieldset onChange={props.stepChange}>
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
                />
              </div>
            );
          })}
      </fieldset>
    </form>
  );
};

export default RecipeFormSteps;
