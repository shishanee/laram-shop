import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  collections: [],
  acces: [],
};

export const getAllCategories = createAsyncThunk(
  "all/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/categories");
      const allCategories = await res.json();
      return allCategories;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllAcces = createAsyncThunk(
  "all/acces",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/accessories");
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCollections = createAsyncThunk(
  "all/collections",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/collections");
      const allCollections = await res.json();
      return allCollections;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const catologSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      ///////////////// getAllCategories /////////////////
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      ///////////////// getAllCollections /////////////////
      .addCase(getAllCollections.fulfilled, (state, action) => {
        
        state.collections = action.payload;
      })
      .addCase(getAllAcces.fulfilled, (state, action) => {
        
        state.acces = action.payload;
      });
  },
});

export default catologSlice.reducer;
