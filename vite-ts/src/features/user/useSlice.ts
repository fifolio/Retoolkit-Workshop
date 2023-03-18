import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: Number;
  name: String;
};

type InitialState = {
  loading: Boolean;
  users: User[];
  error: String;
};

// Setup the initialState
const initialState: InitialState = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (initialState) => {
      initialState.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (initialState, action: PayloadAction<User[]>) => {
        (initialState.loading = false), (initialState.users = action.payload);
        initialState.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (initialState, action) => {
      (initialState.loading = false),
        (initialState.users = []),
        (initialState.error = action.error.message || "Something went wrong!");
    });
  },
});

export default userSlice.reducer;
