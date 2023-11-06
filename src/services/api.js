import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExpense: builder.query({
      query: () => "expenses.json",
    }),
    createExpense: builder.mutation({
      query: (expenseData) => ({
        url: "expenses.json",
        method: "POST",
        body: expenseData,
      }),
    }),
  }),
});

export const { useGetExpensesQuery, useCreateExpenseMutation } = api;
