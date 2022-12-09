import { addtocart, removeFromCart } from "./cartSlice.js";

export const addToCartAction = (item) => (dispatch) => {
  dispatch(addtocart(item));
};

export const deleteFromCartAction = (i) => (dispatch) => {
  dispatch(removeFromCart(i));
};
