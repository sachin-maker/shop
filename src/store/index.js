import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/Slices/CartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;