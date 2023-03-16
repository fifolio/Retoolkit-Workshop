// Import the Store from Redux
const configureStore = require("@reduxjs/toolkit").configureStore;

// Import cakeSlice Reducer
const cakeSlice = require("../features/cake/cakeSlice");
// Import iceCream Reducer
const iceCreamSlice = require("../features/icecream/iceCreamSlice");

// assign configureStore to {Store} constant
const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceCreamSlice,
  },
});

// Export the Store
module.exports = store;
