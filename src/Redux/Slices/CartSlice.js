import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const Cartlist = JSON.parse(JSON.stringify(state.cart));
      const index = Cartlist.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        Cartlist.push({
          ...action.payload,
          quantity: 1,
          subtotal: action.payload.price,
        });
      } else {
        const existingItem = Cartlist[index];
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      }
      console.log(Cartlist);
      state.cart = Cartlist;
    },
    removeFromCart: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const removedcart = Cart.filter((item) => item.id !== action.payload);
      state.cart = removedcart;
    },
    increaseQuantity: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const product = Cart.find((item) => item.id === action.payload.id);
      product.quantity++;
      product.subtotal = product.price * product.quantity;
      state.cart = Cart;
    },
    decreaseQuantity: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const product = Cart.find((item) => item.id === action.payload.id);
      if (product.quantity > 1) {
        product.quantity--;
      }
      product.subtotal = product.price * product.quantity;
      state.cart = Cart;
    },
    ClearCart: (state, action) => {
      state.cart = [];
    },

    alltotal: (state, action) => {
      const Cart = JSON.parse(JSON.stringify(state.cart));
      const total = Cart.reduce((acc, item) => {
        return acc + item.subtotal;
      }, 0);
      state.cart = Cart;
      state.total = total;
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  ClearCart,
  alltotal,
} = Cartslice.actions;
export default Cartslice.reducer;
