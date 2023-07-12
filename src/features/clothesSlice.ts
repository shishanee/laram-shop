import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  accessory: [],
  category: [],
  collection: [],
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

export const oneCollection = createAsyncThunk(
  "one/collection",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/collection/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const oneAccessory = createAsyncThunk(
  "one/Accessory",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/accessory/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const oneCategory = createAsyncThunk(
  "one/category",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/category/${id}`);
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
        state.loading = false;
      })
      .addCase(oneClothes.pending, (state) => {
        state.loading = true;
      })
      .addCase(oneCollection.fulfilled, (state, action) => {
        state.collection = action.payload;
      })
      .addCase(oneCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(oneAccessory.fulfilled, (state, action) => {
        state.accessory = action.payload;
      });
  },
});

export default cartSlice.reducer;
