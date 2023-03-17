import { createSlice } from "@reduxjs/toolkit";

// Import cakeActions.ordered
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (initialState) => {
      initialState.numOfIceCream--;
    },
    restocked: (initialState, action) => {
      initialState.numOfIceCream += action.payload;
    },
  },
  // 1st way to use extraReducers
  // extraReducers: {
  //   "cake/ordered": (initialState) => {
  //     initialState.numOfIceCream--;
  //   },
  // },
  // 2nd way to use extraReducers
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered.ordered, (initialState) => {
      initialState.numOfIceCream--;
    });
  },
});

// Default Export
export default iceCreamSlice.reducer;
// Additional Export with using Alias
export const { ordered, restocked } = iceCreamSlice.actions;
