import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    locationData: [],
};

export const retrieveLocation = createAsyncThunk(
  "location/",
  async () => {
    const res = await axios.get(`http://localhost:8000/location`);
    return res.data.data;
  }
);

export const getLocationDataSlice = createSlice({
  name: "location",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(retrieveLocation.fulfilled, (state, { payload }) => {
      state.locationData = payload;
    })
  },
});


export const { reducer } = getLocationDataSlice;
export default reducer;
