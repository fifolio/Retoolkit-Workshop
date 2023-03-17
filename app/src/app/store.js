// Import the Store from Redux
import { configureStore } from "@reduxjs/toolkit";
// Import cakeSlice Reducer
import cakeSlice from "../features/cake/cakeSlice";
// Import iceCream Reducer
import iceCreamSlice from "../features/icecream/iceCreamSlice";
// import userSlice Reducer
import userSlice from "../features/useSlice";

// import the Middleware logger
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

// assign configureStore to {Store} constant
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
    user: userSlice,
  },
  // Setup the middleware, and concatenate the loggers
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export the Store
export default store;
