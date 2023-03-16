// import createSlice function
const createSlice = require("@reduxjs/toolkit").createSlice;

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
    ordered: (state) => {
      state.numOfCake--;
    },
    // Define the {restocked} reducer
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

// Export Reducer from cakeSlice
module.exports = cakeSlice.reducer;
// Export the Actions from cakeSlice
module.exports.cakeActions = cakeSlice.actions;
