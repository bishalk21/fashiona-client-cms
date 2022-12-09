import { setProducts } from "./productSlice";
import { getAllProducts } from "../../helpers/axiosHelper.js";

export const fetchProductsAction = () => async (dispatch) => {
  const allproducts = await getAllProducts();
  dispatch(setProducts(allproducts));
};
