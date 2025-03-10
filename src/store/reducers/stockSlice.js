import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOCAL_JSON_PATH = "src/constants/gainers.json";

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    topGainers: [],
    topLosers: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchTopGainersStart: (state) => {
      state.status = "loading";
    },
    fetchTopGainersSuccess: (state, action) => {
      state.status = "succeeded";
      state.topGainers = action.payload;
    },
    fetchTopGainersFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    fetchTopLosersStart: (state) => {
      state.status = "loading";
    },
    fetchTopLosersSuccess: (state, action) => {
      state.status = "succeeded";
      state.topLosers = action.payload;
    },
    fetchTopLosersFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchTopGainersStart,
  fetchTopGainersSuccess,
  fetchTopGainersFailure,
  fetchTopLosersStart,
  fetchTopLosersSuccess,
  fetchTopLosersFailure,
} = stockSlice.actions;

export const fetchTopGainers = () => async (dispatch) => {
  try {
    dispatch(fetchTopGainersStart());
    const response = await axios.get(LOCAL_JSON_PATH);
    dispatch(fetchTopGainersSuccess(response.data.top_gainers || []));
  } catch (error) {
    dispatch(fetchTopGainersFailure(error.message));
  }
};

export const fetchTopLosers = () => async (dispatch) => {
  try {
    dispatch(fetchTopLosersStart());
    const response = await axios.get(LOCAL_JSON_PATH);
    dispatch(fetchTopLosersSuccess(response.data.top_losers || []));
  } catch (error) {
    dispatch(fetchTopLosersFailure(error.message));
  }
};

export default stockSlice.reducer;