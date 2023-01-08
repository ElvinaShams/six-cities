import { createSelector } from "@reduxjs/toolkit";
import { FetchStatus, NameSpace } from "../../const";
import { RoomOffer } from "../../types/room-offer";
import { State } from "../../types/state";

export const getOffers = (state: State):RoomOffer[] => state[NameSpace.Offers].roomOffers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersStatus;
export const getOffersStatus = createSelector([getStatus], status => ({
isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
isSuccess: FetchStatus.Success,
isError: FetchStatus.Failed,
}))

export const getOffer = (state: State): RoomOffer | null => state[NameSpace.Offers].offer;
export const getStatusOffer = (state: State): FetchStatus => state[NameSpace.Offers].offerStatus;
export const getOfferStatus = createSelector([getStatusOffer], status => ({
isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
isSuccess: FetchStatus.Success,
isError:  FetchStatus.Failed,
}))
