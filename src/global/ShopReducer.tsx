import { createSlice } from "@reduxjs/toolkit";
import data from "../data/hotDogShopsData";

const shopSplice = createSlice({
  name: "shops",
  initialState: { data },
  reducers: {
    addShops: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
  },
});

export const { addShops } = shopSplice.actions;
export default shopSplice.reducer;
