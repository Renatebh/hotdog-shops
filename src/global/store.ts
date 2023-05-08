"use client";

import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./ShopReducer";
import { HotDogShop } from "@/types/hotDogShops";
import hotDogShopsData from "../data/hotDogShopsData";
import AuthReducer from "./AuthReducer";

export interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
  shops: {
    data: HotDogShop[];
  };
}

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    shops: ShopReducer,
  },
  preloadedState: {
    auth: {
      isLoggedIn: false,
    },
    shops: {
      data: hotDogShopsData,
    },
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
