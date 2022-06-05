import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { lunWeekly, WeeklyResponse } from '../actions/lunWeeklyAction';

interface WeeklyState {
  isLoading: boolean;
  data: null | WeeklyResponse;
}

const initialState: WeeklyState = {
  isLoading: false,
  data: null
};

const weeklySlice = createSlice({
  name: 'weekly',
  initialState,
  reducers: {},
  extraReducers: {
    [lunWeekly.pending.type]: (state: WeeklyState) => {
      state.isLoading = true;
    },
    [lunWeekly.fulfilled.type]: (state: WeeklyState, action: PayloadAction<WeeklyResponse>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [lunWeekly.rejected.type]: (state: WeeklyState) => {
      state.isLoading = false;
    }
  }
});

export default weeklySlice.reducer;