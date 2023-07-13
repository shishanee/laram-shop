import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const user = await res.json();
  
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return user;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  });



const userSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
