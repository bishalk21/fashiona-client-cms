import { configureStore } from "@reduxjs/toolkit";

import systemReducer from "./pages/system-state/systemSlice";
import productReducer from "./pages/products/productSlice";
const store = configureStore({
  reducer: {
    system: systemReducer,
    product: productReducer,
  },
});

export default store;
