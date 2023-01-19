import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import {
  fetchNearby,
  fetchProperty,
  fetchOffersList,
} from '../api-action/api-action-offers';

type InitialState = {
  roomOffers: RoomOffer[],
  nearby: RoomOffer[],
  property: RoomOffer | null,
  offersStatus: FetchStatus,
  nearbyStatus: FetchStatus,
  propertyStatus: FetchStatus,
};

const initialState: InitialState = {
  roomOffers: [],
  nearby: [],
  property: null,
  offersStatus: FetchStatus.Idle,
  nearbyStatus: FetchStatus.Idle,
  propertyStatus: FetchStatus.Idle,
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
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.property = action.payload;
        state.propertyStatus = FetchStatus.Success;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.nearbyStatus = FetchStatus.Success;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.nearbyStatus = FetchStatus.Failed;
      })
      .addCase(fetchNearby.pending, (state) => {
        state.nearbyStatus = FetchStatus.Loading;
      });
  },
});
