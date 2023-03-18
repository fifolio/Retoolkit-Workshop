import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import iceCreamSlice from "../features/icecream/iceCreamSlice";
import userSlice from "../features/user/useSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    user: userSlice,
  },
});

export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
