// SERGE LEVEL 01
// No Refactoring

// import { useState, useRef } from "react";

// const SimpleInput = (props) => {
//   const [inputData, setInputData] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   // const inputRef = useRef();

//   const inputNameIsInValid = enteredNameTouched && !isValid;

//   const inputHandler = (e) => {
//     setInputData(e.target.value);
//     if (e.target.value.trim() !== "") {
//       setIsValid(true);
//     }
//   };

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     setEnteredNameTouched(true);
//     if (inputData.trim() === "") {
//       setIsValid(false);
//       return;
//     }
//     setIsValid(true);
//     console.log(inputData);
//     // const InputValueRef = inputRef.current.value;
//     // console.log(InputValueRef);
//   };

//   const onBlurHandler = () => {
//     setEnteredNameTouched(true);
//     if (inputData.trim() === "") {
//       setIsValid(false);
//     }
//   };

//   const nameInputClasses = !inputNameIsInValid
//     ? "form-control"
//     : "form-control invalid";

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={inputData}
//           onChange={inputHandler}
//           // ref={inputRef}
//           onBlur={onBlurHandler}
//         />
//         {inputNameIsInValid && (
//           <p className="error-text">Name must not be empty</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// SERGE LEVEL 02
// Refactored Version

// import { useState, useRef } from "react";
// import Input from "./UI/Input";

// const SimpleInput = (props) => {
//   const [inputData, setInputData] = useState("");
//   const [inputEmailData, setInputEmailData] = useState("");

//   // Two states for checking if the input field has touched or not
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

//   // checking for the empty strings and @
//   const isValid = inputData.trim() !== "";
//   const inputNameIsInValid = enteredNameTouched && !isValid;

//   const isEmailValid =
//     inputEmailData.trim() !== "" && inputEmailData.includes("@");
//   const emailNameIsInvalid = enteredEmailTouched && !isEmailValid;

//   let formIsValid = false;

//   // Both input Handlers
//   const inputHandler = (e) => {
//     setInputData(e.target.value);
//   };
//   const emailInputHandler = (e) => {
//     setInputEmailData(e.target.value);
//   };
//   // Form submit handler
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     // setEnteredNameTouched(true);
//     // setEnteredEmailTouched(true);
//     // if (!isValid) {
//     //   return;
//     // }

//     setInputData("");
//     setInputEmailData("");
//     setEnteredNameTouched(false);
//     setEnteredEmailTouched(false);
//     console.log(inputData);
//     console.log(inputEmailData);
//   };

//   // Blur Handler for both Inputs
//   const onBlurHandler = () => {
//     setEnteredNameTouched(true);
//   };

//   const onEmailBlurHandler = () => {
//     setEnteredEmailTouched(true);
//   };

//   // Adding classes for both inputs to show error visuals
//   const nameInputClasses = !inputNameIsInValid
//     ? "form-control"
//     : "form-control invalid";
//   const emailInputClasses = !emailNameIsInvalid
//     ? "form-control"
//     : "form-control invalid";

//   // checking the overall forms validity
//   if (!inputNameIsInValid && !emailNameIsInvalid) {
//     formIsValid = true;
//   }

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <Input
//           type="text"
//           id="name"
//           value={inputData}
//           onChange={inputHandler}
//           onBlur={onBlurHandler}
//         />
//         {inputNameIsInValid && (
//           <p className="error-text">Name must not be empty</p>
//         )}
//       </div>

//       <div className={emailInputClasses}>
//         <label htmlFor="email">Your Email</label>
//         <Input
//           type="email"
//           id="email"
//           value={inputEmailData}
//           onChange={emailInputHandler}
//           onBlur={onEmailBlurHandler}
//         />
//         {emailNameIsInvalid && (
//           <p className="error-text">
//             Email must not be empty and should contain (@)
//           </p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// SERGE LEVEL 03
// HOOKIFYING
import Input from "./UI/Input";
import useInput from "./Hook/use-input";

const SimpleInput = (props) => {
  const {
    value: inputNameData,
    valueChangeHandler: inputNameHandler,
    inputBlurHandler: inputNameBlurHandler,
    hasError: nameError,
    submitted: nameSubmit,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputEmailData,
    valueChangeHandler: inputEmailHandler,
    inputBlurHandler: inputEmailBlurHandler,
    hasError: emailError,
    submitted: emailSubmit,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  // Form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    nameSubmit();
    emailSubmit();
  };

  // Adding classes for both inputs to show error visuals
  const nameInputClasses = !nameError ? "form-control" : "form-control invalid";
  const emailInputClasses = !emailError
    ? "form-control"
    : "form-control invalid";

  // checking the overall forms validity
  let formIsValid = false;
  if (!nameError && !emailError) {
    formIsValid = true;
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <Input
          type="text"
          id="name"
          value={inputNameData}
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}
        />
        {nameError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <Input
          type="email"
          id="email"
          value={inputEmailData}
          onChange={inputEmailHandler}
          onBlur={inputEmailBlurHandler}
        />
        {emailError && (
          <p className="error-text">
            Email must not be empty and should contain (@)
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
