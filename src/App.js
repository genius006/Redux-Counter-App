import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <div className="container">
        <h2>{myState}</h2>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
};

export default App;
