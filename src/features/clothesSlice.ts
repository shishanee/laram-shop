import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  oneClothes: {},
  error: null,
  loading: true,
};

export const oneClothes = createAsyncThunk(
  "one/clothes",
  async ({ id }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/clothes/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
    builder
      .addCase(getClothes.fulfilled, (state, action) => {
        state.clothes = action.payload;
      })
      .addCase(oneClothes.fulfilled, (state, action) => {
        state.oneClothes = action.payload;
        state.loading = false
      })
      .addCase(oneClothes.pending, (state) => {
        state.loading = true
      })
  },
});

export default cartSlice.reducer;
