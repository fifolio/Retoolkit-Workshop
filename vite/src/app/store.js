import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import iceCreamSlice from "../features/icecream/iceCreamSlice";
import userSlice from "../features/useSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    user: userSlice,
  },
});

export default store;
