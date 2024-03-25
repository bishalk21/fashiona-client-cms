import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// Reducers
import {
  userLoginReducer,
  userRegisterReducer,
  userAddressReducer,
} from "./reducers/userReducer";
import {
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
  allCategoriesReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
} from "./reducers/orderReducer";

const reducer = {
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userAddress: userAddressReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allCategories: allCategoriesReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  newProduct: newProductReducer,
  product: productReducer,
};

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  initialState: initialState,
  devTools: import.meta.env.NODE_ENV !== "production", // Optional: this line enables Redux DevTools in development mode
});

export default store;
