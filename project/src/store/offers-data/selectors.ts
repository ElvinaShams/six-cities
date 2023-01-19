import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { State } from '../../types/state';

export const getOffers = (state: State): RoomOffer[] =>
  state[NameSpace.Offers].roomOffers;
export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].offersStatus;

export const getProperty = (state: State): RoomOffer | null =>
  state[NameSpace.Offers].property;
export const getPropertyFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].propertyStatus;

export const getNearbyOffers = (state: State): RoomOffer[] =>
  state[NameSpace.Offers].nearby;
export const getNearbyStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].nearbyStatus;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed,
}));
