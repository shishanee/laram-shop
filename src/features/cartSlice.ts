import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: "",
  status: true,
  delivery: true,
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

export const fetchPlusCloth = createAsyncThunk(
  "cart/fetchPlusCloth",
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

export const fetchMinusCloth = createAsyncThunk(
  "cart/fetchMinusCloth",
  async ({ id, size }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cart-minus-cloth/${id}`, {
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

export const fetchRemoveCloth = createAsyncThunk(
  "cart/fetchRemoveCloth",
  async ({ id, size }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cart-remove-cloth/${id}`, {
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

export const fetchBuyCloths = createAsyncThunk(
  "cart/fetchBuyCloths",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/buy-cloths`, {
        method: "PATCH",
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDelivery(state, action) {
      state.delivery = action.payload;
    },
  },
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
      })
      .addCase(addCloth.pending, (state) => {
        state.status = true;
      })
      .addCase(addCloth.rejected, (state) => {
        state.status = false;
      })
      .addCase(addCloth.fulfilled, (state) => {
        state.status = false;
      })
      .addCase(fetchPlusCloth.fulfilled, (state, action) => {
        const { id, size } = action.meta.arg;
        const newCart = state.cart.cart.map((item) => {
          if (item.cloth._id === id && item.size === size) {
            item.amount++;
            console.log(item);
            return item;
          }
          return item;
        });
        state.cart.cart = newCart;
      })
      .addCase(fetchMinusCloth.fulfilled, (state, action) => {
        const { id, size } = action.meta.arg;
        const newCart = state.cart.cart.map((item) => {
          if (item.cloth._id === id && item.size === size) {
            if (item.amount > 1) {
              item.amount--;
            }
            return item;
          }
          return item;
        });
        state.cart.cart = newCart;
      })
      .addCase(fetchRemoveCloth.fulfilled, (state, action) => {
        const { id, size } = action.meta.arg;
        const newCart = state.cart.cart.filter((item) => {
          if (item.cloth._id === id && item.size === size) {
            return false;
          }
          return true;
        });
        state.cart.cart = newCart;
      });
  },
});

export const { setDelivery } = cartSlice.actions;

export default cartSlice.reducer;
