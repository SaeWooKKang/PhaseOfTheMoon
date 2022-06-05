import { configureStore } from "@reduxjs/toolkit";
import moonReducer from './reducers/moonSlice';
import weeklyReducer from './reducers/weeklySlice';

const store = configureStore({
  reducer: {
    lun: moonReducer,
    weekly: weeklyReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;