import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY";
const BASE_URL = "https://www.alphavantage.co/query";

// Async Thunks for fetching stock data
export const fetchTopGainers = createAsyncThunk(
  "stocks/fetchTopGainers",
  async () => {
    const response = await fetch(
      `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data.top_gainers || [];
  }
);

export const fetchTopLosers = createAsyncThunk(
  "stocks/fetchTopLosers",
  async () => {
    const response = await fetch(
      `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data.top_losers || [];
  }
);

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