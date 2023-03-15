// import Redux
const redux = require("redux");
// Import Redux-thunk middleware
const thunkMiddleware = require("redux-thunk").default;
// import Axios
const axios = require("axios");
// Import Create Store from Redux
const createStore = redux.legacy_createStore;
// import Apply middleware from Redux
const applyMiddleware = redux.applyMiddleware;

// Set state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Set actions type
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Set Actions
const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// Set Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "No Errs",
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      break;
  }
};

// fetch Users data
const fetchUsers = function () {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// Set the Store, and Pass the Reducer, and apply middleware that uses thunkMiddleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// subscribe to the store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch {fetchUsers} function to the Store
store.dispatch(fetchUsers());
