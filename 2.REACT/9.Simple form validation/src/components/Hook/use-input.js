import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //  input Handlers
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  // Blur Handler for both Inputs
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  // checking for the correct input
  const valueIsValid = validateValue(enteredValue); // Most important part is this line
  const hasError = isTouched && !valueIsValid;

  //   submitting form
  const submitted = () => {
    setEnteredValue("");
    setIsTouched(false);
    console.log(enteredValue);
  };
  return {
    value: enteredValue,
    valueChangeHandler,
    inputBlurHandler,
    hasError,
    submitted,
  };
};

export default useInput;
