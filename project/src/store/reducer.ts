import { createReducer } from "@reduxjs/toolkit";
import { SortTypes } from "../const";
import { CITY } from "../mocks/cities";
import { roomOffers } from "../mocks/offers";
import { changeCity, setSortType } from "./action";

const initialState = {
 city: CITY[2].name,
 roomOffers,
 sortType: SortTypes.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.sortType = SortTypes.Popular;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
