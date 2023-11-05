import { createSlice } from "@reduxjs/toolkit";

const totalAmountSlice = createSlice({
  name: "totalAmount",
  initialState: 0.0,
  reducers: {
    setTotalAmount: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTotalAmount } = totalAmountSlice.actions;
export default totalAmountSlice.reducer;
