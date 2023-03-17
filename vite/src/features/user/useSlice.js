import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Setup the initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch();
});

// Setup user Slice
const userSlice = createSlice({
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
