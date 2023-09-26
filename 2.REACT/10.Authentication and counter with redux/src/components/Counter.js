// import classes from "./Counter.module.css";
// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   // by using useSelector we are accessing to the
//   // different values of our redux store
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   // using dispatch hook to create a dispatcher
//   const dispatch = useDispatch();

//   // handlers to send  dispatch actions
//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };
//   const increaseByNumberHandler = () => {
//     dispatch({ type: "increase", value: 30 });
//   };
//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseByNumberHandler}>Increament By 30</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// Migrating everything to real-toolkit
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  // by using useSelector we are accessing to the
  // different values of our redux store
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // using dispatch hook to create a dispatcher
  const dispatch = useDispatch();

  // handlers to send  dispatch actions
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseByNumberHandler = () => {
    dispatch(counterActions.increase(30));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByNumberHandler}>Increament By 30</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
