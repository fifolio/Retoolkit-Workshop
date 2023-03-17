// import createSlice function
import { createSlice } from "@reduxjs/toolkit";

// Set Initial State
const initialState = {
  numOfCake: 10,
};

/**
 * @summary: Invoke the {createSlice} func, and assign it to a constant called "cake slice"
 * @this {createSlice} function accept an Object as an argument
 */
const cakeSlice = createSlice({
  // Slice name
  name: "cake",
  // Its Initial State
  initialState,
  // Set the reducer
  reducers: {
    // Define the {ordered} reducer
    ordered: (initialState) => {
      initialState.numOfCake--;
    },
    // Define the {restocked} reducer
    restocked: (initialState, action) => {
      initialState.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
// Export the Actions from cakeSlice
export const { ordered, restocked } = cakeSlice.actions;
