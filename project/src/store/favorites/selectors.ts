import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { RoomOffer } from './../../types/room-offer';

export const getFavorites = (state: State): RoomOffer[] =>
  state[NameSpace.Favorites].favorites;
export const getFavoritesFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorites].favoritesStatus;

export const getPostFavoriteStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorites].postStatus;

export const getFavoritesStatus = createSelector(
  [getFavoritesFetchStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Failed,
  })
);
