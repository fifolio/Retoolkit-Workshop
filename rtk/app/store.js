// Import the Store from Redux
const configureStore = require("@reduxjs/toolkit").configureStore;

// Import cakeSlice Reducer
const cakeSlice = require("../features/cake/cakeSlice");
// Import iceCream Reducer
const iceCreamSlice = require("../features/icecream/iceCreamSlice");

// import the midleware logger
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

// assign configureStore to {Store} constant
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
  },
  // Setup the middleware, and concatenate the loggers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export the Store
module.exports = store;
