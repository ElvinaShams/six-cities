import { createReducer } from "@reduxjs/toolkit";
import { AuthStatus, SortTypes } from "../const";
import { CITY } from "../mocks/cities";
import { RoomOffer } from "../types/room-offer";
import { UserData } from "../types/user-data";
import { changeCity, getAuthStatus, loadRoomOffers, setError, setOffersDataLoadingStatus, setSortType, setUserData } from "./action";

type InitialState = {
  city: string,
  roomOffers: RoomOffer[],
  sortType: SortTypes,
  authStatus: AuthStatus,
  error: string | null,
  isOffersDataLoading: boolean,
  userData: {
    authStatus: AuthStatus;
    user: UserData | null;
  };
}

const initialState:InitialState = {
 city: CITY[0].name,
 roomOffers: [],
 sortType: SortTypes.Popular,
 authStatus: AuthStatus.noAuth,
 error: null,
 isOffersDataLoading: false,
 userData: {
  authStatus: AuthStatus.noAuth,
  user: null,
}
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.sortType = SortTypes.Popular;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadRoomOffers, (state, action) => {
      state.roomOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(getAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
