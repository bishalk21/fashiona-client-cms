import { configureStore } from "@reduxjs/toolkit";

import systemReducer from "./pages/system-state/systemSlice";
import productReducer from "./pages/products/productSlice";
import categoryReducer from "./pages/categories/categoriesSlice";
import cartReducer from "./pages/cart-page/cartSlice";

const store = configureStore({
  reducer: {
    system: systemReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export default store;
