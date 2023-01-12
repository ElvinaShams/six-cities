import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { fetchOffer, fetchOffersList } from '../api-action/api-action-offers';

type InitialState = {
  roomOffers: RoomOffer[],
  offer: RoomOffer | null,
  offerStatus: FetchStatus,
  offersStatus: FetchStatus,
};

const initialState: InitialState = {
  roomOffers: [],
  offer: null,
  offerStatus: FetchStatus.Idle,
  offersStatus: FetchStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersList.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersList.fulfilled, (state, action) => {
        state.roomOffers = action.payload;
        state.offersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersList.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
        state.offerStatus = FetchStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = FetchStatus.Success;
        state.offersStatus = FetchStatus.Success;
      });
  },
});
