import { getAllCategories } from "../../helpers/axioshelper";
import { setCategories } from "./categoriesSlice";

export const fetchCategoriesAction = () => async (dispatch) => {
  const allcategories = await getAllCategories();
  dispatch(setCategories(allcategories));
};
