// Import the Store from Redux
const configureStore = require("@reduxjs/toolkit").configureStore;

// Import cakeSlice Reducer
const cakeReducer = require("../features/cake/cakeSlice");

// assign configureStore to {Store} constant
const store = configureStore({
    reducer: {
        cake: cakeReducer,
    }
});

// Export the Store
module.exports = store 