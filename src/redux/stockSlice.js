import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "824W86Y9TQLA608D";
const BASE_URL = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=824W86Y9TQLA608D";

const fetchStockData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TOP_GAINERS_LOSERS",
        apikey: API_KEY,
      },
    });

    return {
      topGainers: response.data.top_gainers || [],
      topLosers: response.data.top_losers || [],
    };
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


export const fetchTopGainers = createAsyncThunk("stocks/fetchTopGainers", async () => {
  const data = await fetchStockData();
  return data.topGainers;
});

export const fetchTopLosers = createAsyncThunk("stocks/fetchTopLosers", async () => {
  const data = await fetchStockData();
  return data.topLosers;
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