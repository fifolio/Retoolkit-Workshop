// Import Redux and Immer
const redux = require("redux");
const createStore = redux.legacy_createStore;
const produce = require("immer").produce;

// init state
const initialState = {
  name: "Robert",
  address: {
    stCode: 000,
    stName: "Main St",
    city: "Boston",
    state: "MA",
  },
};

// action type
const STREET_UPDATED = "STREET_UPDATED";

// set action
const updateStCode = (stCode) => {
  return {
    type: STREET_UPDATED,
    payload: stCode,
  };
};

// set Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.stCode = action.payload;
      });
      break;

    default:
      {
        return state;
      }
      break;
  }
};

// set Store and Log it
const store = createStore(reducer);
console.log("initial state:", store.getState());

// Subscribe to listen to changes
const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

// set new stCode with updated value
store.dispatch(updateStCode(76832));

// unsubscribe from listening
unsubscribe();
