import { createSlice } from "@reduxjs/toolkit";
import { lunDay } from '../actions/lunDayAction';
import { lunCycle } from "../actions/lunCycleAction";

const moonSilice = createSlice({
  name: "moon",
  initialState:{
    day: {
      isLoading: false,
      data: null,
    },
    cycle: {
      isLoading: false,
      data: null
    }
  },
  reducers:{

  },
  extraReducers:{
    [lunDay.pending]: (state, action) => {
      state.day.isLoading = true;
    },
    [lunDay.fulfilled]: (state, action) => {
      state.day.isLoading = false;
      state.day.data = action.payload;
    },
    [lunDay.rejected]: (state, action) => {
      state.day.isLoading = false;
    },
    [lunCycle.pending]: (state, action) => {
      state.cycle.isLoading = true;
    },
    [lunCycle.fulfilled]: (state, action) => {
      state.cycle.isLoading = false;
      state.cycle.data = action.payload;
    },
    [lunCycle.rejected]: (state, action) => {
      state.cycle.isLoading = false;
    },
  }
});

export default moonSilice.reducer;


