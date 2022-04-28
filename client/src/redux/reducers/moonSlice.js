import { createSlice } from "@reduxjs/toolkit";
import { lunDay } from '../actions/lunDayAction';
import { lunCycle } from "../actions/lunCycleAction";

const moonSlice = createSlice({
  name: "lun",
  initialState:{
    day: {
      isLoading: false,
      data: null,
    },
    cycle: {
      isLoading: false,
      data: null
    },
    canISeeTheMoon: false,
  },
  reducers:{
    canISeeTheMoonAction(state, action) {
      state.canISeeTheMoon = true;
    }
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

export const { canISeeTheMoonAction } = moonSlice.actions;
export default moonSlice.reducer;


