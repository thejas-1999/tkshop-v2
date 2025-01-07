import { PRODUCTS_URL } from "../const";
import { apiSlice } from "./apiSlice";

export const productsAiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsAiSlice;
