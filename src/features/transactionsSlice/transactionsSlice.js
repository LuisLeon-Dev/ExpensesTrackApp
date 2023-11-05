import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    // removeTransaction: (state, action) => {

    // },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
