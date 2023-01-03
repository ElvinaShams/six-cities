import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cities, NameSpace, SortTypes } from "../../const";
import { UserData } from "../../types/user-data";

type InitialState = {
  city: string,
  sortType: SortTypes,
  user: UserData | null,
}

const initialState:InitialState = {
  city: cities[0].name,
 sortType: SortTypes.Popular,
 user: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffers: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
  },
  }
});

export const {changeCity, sortOffers } = appProcess.actions;
