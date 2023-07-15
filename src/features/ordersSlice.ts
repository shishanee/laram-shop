import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  error: "",
  status: false,
};

export const getUserOrders = createAsyncThunk(
  "orders/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/orders", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const json = await res.json();
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserOrders.pending, (state) => {
        state.status = true;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.status = false;
        state.orders = action.payload;
      });
  },
});

export default ordersSlice.reducer;
