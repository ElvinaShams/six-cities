import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { fetchFavorites, postFavorites } from '../api-action/api-action-offers';
import { logout } from '../api-action/api-action-user';

type InitialState = {
  favorites: RoomOffer[],
  favoritesStatus: FetchStatus,
  postStatus: FetchStatus,
};

const initialState: InitialState = {
  favorites: [],
  favoritesStatus: FetchStatus.Idle,
  postStatus: FetchStatus.Idle,
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
      .addCase(postFavorites.fulfilled, (state, action) => {
        state.postStatus = FetchStatus.Success;
        state.favorites.push(action.payload);
      })
      .addCase(postFavorites.rejected, (state) => {
        state.postStatus = FetchStatus.Failed;
      });
  },
});
