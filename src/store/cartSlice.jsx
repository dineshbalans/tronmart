import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    noOfProducts: 0,
    totalPrice: 0,
  },
  reducers: {
    // ADD PRODUCT TO THE CART
    addProduct(state, { payload }) {
      state.totalPrice =
        state.totalPrice + +payload.price * +payload.productQuantity;
      state.noOfProducts = state.noOfProducts + +payload.productQuantity;

      if (state.cart.length === 0) {
        state.cart = [payload];
      } else {
        const productIndex = state.cart.findIndex(
          (product) => product.id === payload.id && product
        );
        if (productIndex === -1) {
          state.cart = [...state.cart, payload];
        } else {
          state.cart[productIndex].productQuantity += payload.productQuantity;
        }
      }
    },
    // REMOVE PRODUCT FROM THE CART
    removeProduct(state, { payload }) {
      const productIndex = state.cart.findIndex(
        (product) => product.id === payload
      );

      state.totalPrice -=
        +state.cart[productIndex].productQuantity *
        +state.cart[productIndex].price;
      state.noOfProducts -= +state.cart[productIndex].productQuantity;

      state.cart.splice(productIndex, 1);
    },
    // INCREASE PRODUCT QUANTITY
    increaseProductQuantity(state, { payload }) {
      const productIndex = state.cart.findIndex(
        (product) => product.id === payload
      );

      state.totalPrice += +state.cart[productIndex].price;
      state.noOfProducts += 1;

      state.cart[productIndex].productQuantity += 1;
    },
    // DECREASE PRODUCT QUANTITY
    decreaseProductQuantity(state, { payload }) {
      const productIndex = state.cart.findIndex(
        (product) => product.id === payload
      );

      state.totalPrice -= +state.cart[productIndex].price;
      state.noOfProducts -= 1;

      state.cart[productIndex].productQuantity -= 1;
      if (state.cart[productIndex].productQuantity === 0) {
        state.cart.splice(productIndex, 1);
      }
    },
    addProductByQuantity(state, { payload }) {
      const productIndex = state.cart.findIndex(
        (product) => product.id === payload.id
      );
      if (payload.quantity === 0) {
        return;
        // state.cart.splice(productIndex, 1);
      } else if (state.cart[productIndex].productQuantity < payload.quantity) {
        // Increase
        state.totalPrice -=
          state.cart[productIndex].productQuantity *
          state.cart[productIndex].price;
        state.totalPrice += payload.quantity * state.cart[productIndex].price;
        state.noOfProducts +=
          payload.quantity - state.cart[productIndex].productQuantity;
      } else {
        // Decrease
        state.totalPrice -=
          state.cart[productIndex].productQuantity *
          state.cart[productIndex].price;
        state.totalPrice += payload.quantity * state.cart[productIndex].price;
        state.noOfProducts -=
          state.cart[productIndex].productQuantity - payload.quantity;
      }

      state.cart[productIndex].productQuantity = payload.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
