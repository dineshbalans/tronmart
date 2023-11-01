import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    runUseEffect: true,
    products: [],
    allProducts: [],
  },
  reducers: {
    toggleUseEffect(state) {
      state.runUseEffect = false;
    },
    addProducts(state, action) {
      state.products = action.payload;
    },
    addAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
