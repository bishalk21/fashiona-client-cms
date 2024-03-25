import fewaStoreApi from "../../api/fewaStoreApi";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

// add to cart
export const addItemsToCart =
  (_id, quantity = 1) =>
  async (dispatch, getState) => {
    const { data } = await fewaStoreApi.get(`/app/get-product-byid/${_id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: data.product._id,
        name: data.product.name,
        brand: data.product.brand.brandName,
        price: data.product.price,
        discount: data.product.discount,
        sellingPrice: data.product.sellingPrice,
        imageUrl: data.product.imageUrl,
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// remove cart item
export const removeItemsFromCart = (_id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: _id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// empty cart
export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_CART });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
