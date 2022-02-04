import { configureStore } from "@reduxjs/toolkit";
import moonReducer from './reducers/moonSlice';

const store = configureStore({
  reducer: {
    lun: moonReducer,
  },
  devtool: true,
});

export default store;