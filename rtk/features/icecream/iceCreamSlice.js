const createSlice = require("@reduxjs/toolkit").createSlice;

// Import cakeActions.ordered
const { cakeActions } = require("../cake/cakeSlice");

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
  extraReducers: {
    ["cake/ordered"]: (initialState) => {
      initialState.numOfIceCream--;
    },
  },
  // 2nd way to use extraReducers
  // extraReducers: (builder) => {
  //   builder.addCase(cakeActions.ordered, (initialState) => {
  //     initialState.numOfIceCream--;
  //   });
  // },
});

// Default Export
module.exports = iceCreamSlice.reducer;
// Additional Export with using Alias
module.exports.iceCreamSliceActions = iceCreamSlice.actions;
