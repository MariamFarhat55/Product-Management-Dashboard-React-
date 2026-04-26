import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {}
});

export const deleteProduct = (id) => {
  return async () => {
    await axios.delete(`http://localhost:3001/products/${id}`);
  };
};

export const updateProduct = (product) => {
  return async () => {
    await axios.put(
      `http://localhost:3001/products/${product.id}`,
      product
    );
  };
};

export default productSlice.reducer;