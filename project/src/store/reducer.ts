import { createReducer } from "@reduxjs/toolkit";
import { SortTypes } from "../const";
import { CITY } from "../mocks/cities";
import { roomOffers } from "../mocks/offers";
import { changeCity, setOffers, setSortType } from "./action";

const initialState = {
 city: CITY[0].name,
 roomOffers: roomOffers,
 sortType: SortTypes.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.sortType = SortTypes.Popular;
    })
    .addCase(setOffers, (state, action) => {
      state.roomOffers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
