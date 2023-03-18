import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCream: number;
};

const initialState: InitialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (initialState) => {
      initialState.numOfIceCream--;
    },
    restocked: (initialState, action: PayloadAction<number>) => {
      initialState.numOfIceCream += action.payload;
    },
  },
  extraReducers: {
    ["cake/cakeOrdered"]: (initialState) => {
      initialState.numOfIceCream--;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
