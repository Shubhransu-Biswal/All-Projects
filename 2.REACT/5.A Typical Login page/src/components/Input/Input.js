import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";
// import { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focu: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.emailState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.text}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
