import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./system-state/systemSlice";

const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export default store;
