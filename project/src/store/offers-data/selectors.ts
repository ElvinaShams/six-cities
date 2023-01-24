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

export const getPropertyStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].propertyStatus;

export const getNearbyOffers = (state: State): RoomOffer[] =>
  state[NameSpace.Offers].nearby;

const createSelectorsStatus = (selector: any) => {
  return createSelector([selector], (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Failed,
  }));
};

export const getOffersStatus = createSelectorsStatus(getStatus);

export const getOfferStatus = createSelectorsStatus(getPropertyStatus);
