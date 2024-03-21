import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categoryData: [],
};

export const retrieveCategory = createAsyncThunk(
  "category/",
  async () => {
    const res = await axios.get(`http://localhost:8000/category`);
    return res.data.data;
  }
);

export const getCategoryDataSlice = createSlice({
  name: "category",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(retrieveCategory.fulfilled, (state, { payload }) => {
      state.categoryData = payload;
    })
  },
});


export const { reducer } = getCategoryDataSlice;
export default reducer;
