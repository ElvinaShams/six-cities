import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from "../../const";
import { RoomOffer } from "../../types/room-offer";
import { fetchOffersList } from '../api-action/api-action-offers';

type InitialState = {
  roomOffers: RoomOffer[],
  isOffersDataLoading: boolean,
}

const initialState:InitialState = {
 roomOffers: [],
 isOffersDataLoading: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchOffersList.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchOffersList.fulfilled, (state, action) => {
      state.roomOffers = action.payload;
      state.isOffersDataLoading =false;
    })

  }
});
