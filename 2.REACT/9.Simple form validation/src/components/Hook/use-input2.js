// import { useState } from "react";
// const useInputForBasic = (validateValue) => {
//   const [receivedInput, setReceivedInput] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   // All input handlers with their validities respectively
//   const inputDataHandler = (e) => {
//     setReceivedInput(e.target.value);
//   };
//   const inputIsValid = validateValue(receivedInput);
//   const inputFieldHasError = isTouched && !inputIsValid;

//   const submitted = () => {
//     setIsTouched(false);
//     setReceivedInput("");
//   };

//   const inputFieldBlurHandler = () => {
//     setIsTouched(true);
//   };

//   return {
//     receivedInput,
//     inputDataHandler,
//     inputFieldHasError,
//     submitted,
//     inputFieldBlurHandler,
//   };
// };

// export default useInputForBasic;

// using useReducer
import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  if (action.text === "ADD") {
    return { value: action.value, isTouched: prevState.isTouched };
  }
  if (action.text === "BLUR") {
    return {
      value: prevState.value,
      isTouched: true,
    };
  }
  if (action.text === "SUBMIT") {
    return {
      ...initialInputState,
    };
  }
  return initialInputState;
};
const useInputForBasic = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // All input handlers with their validities respectively
  const inputDataHandler = (e) => {
    dispatch({ text: "ADD", value: e.target.value });
  };
  const inputIsValid = validateValue(inputState.value);
  const inputFieldHasError = inputState.isTouched && !inputIsValid;

  const submitted = () => {
    dispatch({ text: "SUBMIT" });
  };

  const inputFieldBlurHandler = () => {
    dispatch({ text: "BLUR" });
  };

  return {
    receivedInput: inputState.value,
    inputDataHandler,
    inputFieldHasError,
    submitted,
    inputFieldBlurHandler,
  };
};

export default useInputForBasic;
