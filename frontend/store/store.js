import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

export default configureStore({ 
  reducer: {
    cart: cartSlice,
    products: productSlice,
    categories: categorySlice,
  }, 
});