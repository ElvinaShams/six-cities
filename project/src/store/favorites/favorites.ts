import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus, NameSpace } from "../../const";
import { RoomOffer } from "../../types/room-offer";
import { fetchFavorites } from "../api-action/api-action-offers";

type InitialState = {
  favorites: RoomOffer[],
  favoritesStatus: FetchStatus,
}

const initialState:InitialState = {
  favorites: [],
  favoritesStatus: FetchStatus.Idle ,
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchFavorites.pending, (state) => {
      state.favoritesStatus = FetchStatus.Loading;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesStatus = FetchStatus.Success;
      state.favorites = action.payload;
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesStatus = FetchStatus.Failed;
    })
  }
});
