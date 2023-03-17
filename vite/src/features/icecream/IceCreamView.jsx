import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector(
    (initialState) => initialState.iceCream.numOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams are {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Creams
      </button>
    </div>
  );
};
