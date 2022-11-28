import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          cartQuantity: state.products[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.products.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.products[itemIndex].cartQuantity === 1) {
        const nextproducts = state.products.filter(
          (item) => item.id !== action.payload.id
        );

        state.products = nextproducts;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          const nextproducts = state.products.filter(
            (item) => item.id !== product.id
          );

          state.products = nextproducts;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("products", JSON.stringify(state.products));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const { addToCart, decreaseCart, removeFromCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
