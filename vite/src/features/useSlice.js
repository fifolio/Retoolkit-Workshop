import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Setup the initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// invoke and assign the Create Async Thunk function to {fetchUsers}
// The function accepts 2 params:
// 1) the first Argument is the (Action name)
// 2) the second Argument is the (Call back) function the creates the payload
// (Generates Pending, fulfilled, rejected Action types)
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id))
    .catch();
});

// Setup user Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (initialState) => {
      initialState.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (initialState, action) => {
      (initialState.loading = false), (initialState.users = action.payload);
      initialState.error = "";
    });
    builder.addCase(fetchUsers.rejected, (initialState) => {
      (initialState.loading = false),
        (initialState.users = []),
        (initialState.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
