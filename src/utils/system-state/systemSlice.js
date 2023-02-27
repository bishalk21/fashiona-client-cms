import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
};

const SystemSlice = createSlice({
  name: "clientSystem",
  initialState,
  reducers: {
    setShowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
  },
});
const { reducer, actions } = SystemSlice;
export const { setShowSideMenu } = actions;
export default reducer;

// export const {setShowSideMenu} = SystemSlice.actions;
// export default SystemSlice.reducer;
