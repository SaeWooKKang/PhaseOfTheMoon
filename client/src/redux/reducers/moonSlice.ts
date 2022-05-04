import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { lunDay } from '../actions/lunDayAction';
import { lunCycle, CycleResponse } from "../actions/lunCycleAction";

// 태그된 유니온 사용
interface moonState {
  day: {
    isLoading: boolean;
    data: null | number;
  }
  cycle: {
    isLoading: boolean;
    data: null | CycleResponse;
  }
  canISeeTheMoon: boolean;
}

const initialState: moonState = {
  day: {
    isLoading: false,
    data: null
  },
  cycle: {
    isLoading: false,
    data: null
  },
  canISeeTheMoon: false,
};

const moonSlice = createSlice({
  name: "lun",
  initialState,
  reducers: {
    canISeeTheMoonAction(state) {
      state.canISeeTheMoon = true;
    }
  },
  extraReducers:{
    [lunDay.pending.type]: (state: moonState) => {
      state.day.isLoading = true;
    },
    [lunDay.fulfilled.type]: (state: moonState, action: PayloadAction<number>) => {
      state.day.isLoading = false;
      state.day.data = action.payload ;
    },
    [lunDay.rejected.type]: (state: moonState) => {
      state.day.isLoading = false;
    },
    [lunCycle.pending.type]: (state: moonState) => {
      state.cycle.isLoading = true;
    },
    [lunCycle.fulfilled.type]: (state: moonState, action: PayloadAction<CycleResponse>) => {
      state.cycle.isLoading = false;
      state.cycle.data = action.payload;
    },
    [lunCycle.rejected.type]: (state: moonState) => {
      state.cycle.isLoading = false;
    },
  }
});

export const { canISeeTheMoonAction } = moonSlice.actions;
export default moonSlice.reducer;


