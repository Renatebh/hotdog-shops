"use client";

import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./ShopReducer";
import { HotDogShop } from "@/types/hotDogShops";
import hotDogShopsData from "../data/hotDogShopsData";

export interface RootState {
  isLoggedIn: boolean;
  shops: {
    data: HotDogShop[];
  };
}

const isLoggedIn =
  typeof window !== "undefined" &&
  localStorage.getItem("isLoggedIn") === "true";

export const UPDATE_LOGIN_STATUS = "UPDATE_LOGIN_STATUS";

export const updateLoginStatus = (isLoggedIn: boolean) => {
  return {
    type: UPDATE_LOGIN_STATUS,
    payload: isLoggedIn,
  };
};

const store = configureStore({
  reducer: {
    shops: ShopReducer,
    isLoggedIn: (state = false, action) => {
      if (action.type === UPDATE_LOGIN_STATUS) {
        return action.payload;
      }
      return state;
    },
  },
  preloadedState: {
    shops: {
      data: hotDogShopsData,
    },
    isLoggedIn: isLoggedIn,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
