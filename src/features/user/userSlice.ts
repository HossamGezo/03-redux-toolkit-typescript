import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// - - - - - - - - - Types
// *** User Data Props
type UserDataProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
// *** User Initial State Props
type UserinitialStateProps = {
  loading: boolean;
  data: UserDataProps[];
  error: string;
};

// - - - - - - - - - Initial State
const initialState: UserinitialStateProps = {
  loading: false,
  data: [],
  error: "",
};

// - - - - - - - - - Fetch Users
export const fetchUsers = createAsyncThunk<UserDataProps[]>(
  "users/fetchUsers",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      return rejectWithValue(message);
    }
  }
);

// - - - - - - - - - User Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = (action.payload as string) || "Unknown Error";
    });
  },
});

export default userSlice.reducer;
