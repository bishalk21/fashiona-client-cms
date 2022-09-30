import { configureStore } from "@reduxjs/toolkit";

import systemReducer from "./pages/system-state/systemSlice";

const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export default store;
