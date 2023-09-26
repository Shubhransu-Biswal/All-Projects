import { useState } from "react";
const initialValue = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const InputForm = (props) => {
  const [inputValue, updateInputValue] = useState(initialValue);
  // Handling area--------------------------------------
  // Handling Form submition
  const submitForm = (e) => {
    e.preventDefault();
    props.calculateHandler(inputValue);
  };
  //   Handling reset
  const reset = () => {
    updateInputValue(initialValue);
  };
  // Handling one Handler for multiple onChange---------------
  //   My approach
  //   const inputHandler = (e) => {
  //     console.log(e.target.id, e.target.value);
  //     updateInputValue((val) => {
  //       return {
  //         ...val,
  //         [e.target.id]: e.target.value,
  //       };
  //     });
  //   };
  const inputHandler = (name, value) => {
    // console.log(name, value);
    updateInputValue((val) => {
      return {
        ...val,
        [name]: +value,
      };
    });
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          {/* <input type="number" id="current-savings" onChange={inputHandler} /> */}
          <input
            type="number"
            id="current-savings"
            onChange={(e) => {
              inputHandler("current-savings", e.target.value);
            }}
            value={inputValue["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          {/* <input
            type="number"
            id="yearly-contribution"
            onChange={inputHandler} /> */}
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => {
              inputHandler("yearly-contribution", e.target.value);
            }}
            value={inputValue["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          {/* <input type="number" id="expected-return" onChange={inputHandler} /> */}
          <input
            type="number"
            id="expected-return"
            onChange={(e) => {
              inputHandler("expected-return", e.target.value);
            }}
            value={inputValue["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          {/* <input type="number" id="duration" onChange={inputHandler} /> */}
          <input
            type="number"
            id="duration"
            onChange={(e) => {
              inputHandler("duration", e.target.value);
            }}
            value={inputValue.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
