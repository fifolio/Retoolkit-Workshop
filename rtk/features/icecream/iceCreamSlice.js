const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

// Default Export
module.exports = iceCreamSlice.reducer;
// Additional Export with using Alias
module.exports.iceCreamSliceActions = iceCreamSlice.actions;
