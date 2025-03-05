import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOCAL_JSON_PATH = "/src/constants/gainers.json";

export const fetchTopGainers = createAsyncThunk("stocks/fetchTopGainers", async () => {
  const response = await axios.get(LOCAL_JSON_PATH);
  return response.data.top_gainers || [];
});

export const fetchTopLosers = createAsyncThunk("stocks/fetchTopLosers", async () => {
  const response = await axios.get(LOCAL_JSON_PATH);
  return response.data.top_losers || [];
});

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    topGainers: [],
    topLosers: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopGainers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopGainers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topGainers = action.payload;
      })
      .addCase(fetchTopGainers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopLosers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopLosers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topLosers = action.payload;
      })
      .addCase(fetchTopLosers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default stockSlice.reducer;