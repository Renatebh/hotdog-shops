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
    updateShops: (state, action) => {
      const { id, name, latitude, longitude, address, rating, image } =
        action.payload;
      const updatingShops = state.data.find((shop) => shop.id == id);
      if (updatingShops) {
        updatingShops.name = name;
        updatingShops.latitude = latitude;
        updatingShops.longitude = longitude;
        updatingShops.address = address;
        updatingShops.rating = rating;
        updatingShops.image = image;
      }
    },
    deleteShop: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.filter((shop) => shop.id !== id),
      };
    },
  },
});

export const { addShops, updateShops, deleteShop } = shopSplice.actions;
export default shopSplice.reducer;
