const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      style={props.style}
    />
  );
};

export default Input;
