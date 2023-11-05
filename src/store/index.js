import { configureStore } from "@reduxjs/toolkit";
import totalAmountReducer from "../features/totalAmountSlice/totalAmountSlice";
import transactionsReducer from "../features/transactionsSlice/transactionsSlice";

const store = configureStore({
  reducer: {
    totalAmount: totalAmountReducer,
    transactions: transactionsReducer,
  },
});

export default store;
