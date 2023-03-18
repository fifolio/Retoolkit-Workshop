import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  // initialState refers to Redux State (store), and cake Refers to the Reducer
  const numOfCakes = useSelector((initialState) => initialState.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes are {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
