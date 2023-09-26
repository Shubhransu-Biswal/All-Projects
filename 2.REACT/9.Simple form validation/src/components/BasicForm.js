// import { useState } from "react";

// const BasicForm = (props) => {
//   const [firstName, setFirstName] = useState("");
//   const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
//   const [lastName, setLastName] = useState("");
//   const [lastNameIsTouched, setlastNameIsTouched] = useState(false);
//   const [emailAddress, setEmailAddress] = useState("");
//   const [emailAddressIsTouched, setEmailAddressIsTouched] = useState(false);

//   // All input handlers with their validities respectively
//   const firstNameHandler = (e) => {
//     setFirstName(e.target.value);
//   };
//   const firstNameIsValid = firstName.trim() !== "";
//   const firstNameHasError = firstNameIsTouched && !firstNameIsValid;
//   const firstNameBlurHandler = () => {
//     setFirstNameIsTouched(true);
//   };

//   const lastNameHandler = (e) => {
//     setLastName(e.target.value);
//   };
//   const lastNameIsValid = lastName.trim() !== "";
//   const lastNameHasError = lastNameIsTouched && !lastNameIsValid;
//   const lastNameBlurHandler = () => {
//     setlastNameIsTouched(true);
//   };

//   const emailAddressHandler = (e) => {
//     setEmailAddress(e.target.value);
//   };
//   const emailAddressIsValid =
//     emailAddress.trim() !== "" && emailAddress.includes("@");
//   const emailAddressHasError = emailAddressIsTouched && !emailAddressIsValid;
//   const emailAddressBlurHandler = () => {
//     setEmailAddressIsTouched(true);
//   };

//   let allInputGiven = false;
//   if (firstNameIsValid && lastNameIsValid && emailAddressIsValid) {
//     allInputGiven = true;
//   }
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setFirstNameIsTouched(false);
//     setlastNameIsTouched(false);
//     setEmailAddressIsTouched(false);

//     setFirstName("");
//     setLastName("");
//     setEmailAddress("");

//   };

//   const firstNameClasses = firstNameHasError
//     ? "form-control invalid"
//     : "form-control";
//   const lastNameClasses = lastNameHasError
//     ? "form-control invalid"
//     : "form-control";
//   const emailAddressClasses = emailAddressHasError
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="control-group">
//         <div className={firstNameClasses}>
//           <label htmlFor="name">First Name</label>
//           <input
//             type="text"
//             id="name"
//             onChange={firstNameHandler}
//             value={firstName}
//             onBlur={firstNameBlurHandler}
//           />
//         </div>
//         <div className={lastNameClasses}>
//           <label htmlFor="name">Last Name</label>
//           <input
//             type="text"
//             id="name"
//             onChange={lastNameHandler}
//             value={lastName}
//             onBlur={lastNameBlurHandler}
//           />
//         </div>
//       </div>
//       <div className={emailAddressClasses}>
//         <label htmlFor="name">E-Mail Address</label>
//         <input
//           type="text"
//           id="name"
//           onChange={emailAddressHandler}
//           value={emailAddress}
//           onBlur={emailAddressBlurHandler}
//         />
//       </div>
//       <div className="form-actions">
//         <button disabled={!allInputGiven}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default BasicForm;

// LETS USE CUSTOM-HOOK

import { useState } from "react";
import useInputForBasic from "./Hook/use-input2";

const BasicForm = (props) => {
  const {
    receivedInput: firstName,
    inputDataHandler: firstNameHandler,
    inputFieldHasError: firstNameHasError,
    submitted: firstNameSubmitted,
    inputFieldBlurHandler: firstNameBlurHandler,
  } = useInputForBasic((value) => value.trim() !== "");

  const {
    receivedInput: lastName,
    inputDataHandler: lastNameHandler,
    inputFieldHasError: lastNameHasError,
    submitted: LastNameSubmitted,
    inputFieldBlurHandler: lastNameBlurHandler,
  } = useInputForBasic((value) => value.trim() !== "");

  const {
    receivedInput: emailAddress,
    inputDataHandler: emailAddressHandler,
    inputFieldHasError: emailAddressHasError,
    submitted: emailAddressSubmitted,
    inputFieldBlurHandler: emailAddressBlurHandler,
  } = useInputForBasic((value) => value.trim() !== "" && value.includes("@"));

  let allInputGiven = false;
  if (!firstNameHasError && !lastNameHasError && !emailAddressHasError) {
    allInputGiven = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    firstNameSubmitted();
    LastNameSubmitted();
    emailAddressSubmitted();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailAddressClasses = emailAddressHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailAddressClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailAddressHandler}
          value={emailAddress}
          onBlur={emailAddressBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!allInputGiven}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
