import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import totalAmountReducer from "../features/totalAmountSlice/totalAmountSlice";
import transactionsReducer from "../features/transactionsSlice/transactionsSlice";
import { authApi } from "../services/authApi";
import { api } from "../services/api";
import authSlice from "../features/Auth/AuthSlice";

const store = configureStore({
  reducer: {
    totalAmount: totalAmountReducer,
    transactions: transactionsReducer,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
