import { configureStore } from "@reduxjs/toolkit";
import moonReducer from './reducers/moonSlice';

const store = configureStore({
  reducer: {
    lun: moonReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;