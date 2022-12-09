import { configureStore } from "@reduxjs/toolkit";

import systemReducer from "./pages/system-state/systemSlice";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/categories/categoriesSlice";
const store = configureStore({
  reducer: {
    system: systemReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;
