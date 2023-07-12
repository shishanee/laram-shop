import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: "",
  status: false,
};

export const getUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user-cart", {
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

export const addCloth = createAsyncThunk(
  "cart/fetchAddCloth",
  async ({ id, size }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cart-add-cloth/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          size,
        }),
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserCart.pending, (state) => {
        state.status = true;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.status = false;
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;
