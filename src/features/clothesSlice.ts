import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  error: null,
  status: false,
};

export const getClothes = createAsyncThunk(
  "get/clothes",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/clothes", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getClothes.fulfilled, (state, action) => {
      state.clothes = action.payload;
    });
  },
});

export default cartSlice.reducer;
