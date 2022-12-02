import {createAction} from '@reduxjs/toolkit';
import { AuthStatus, SortTypes } from '../const';
import { RoomOffer } from '../types/room-offer';
import { UserData } from '../types/user-data';

const changeCity = createAction('roomOffers/changeCity',(city: string) => ({
  payload: city,
})
);

const setSortType = createAction('roomOffers/sortOffers',(sortType:SortTypes) => ({
  payload: sortType,
})
);

const loadRoomOffers = createAction('roomOffers/loadRoomOffers',(roomOffers:RoomOffer[]) => ({
  payload: roomOffers,
})
);

const getAuthStatus = createAction('server/AuthStatus',(AuthStatus:AuthStatus) => ({
  payload: AuthStatus,
})
);

const setUserData = createAction<UserData | null>('server/setUserData');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

const setError = createAction<string | null>('roomOffers/setError');

export {changeCity, setSortType, loadRoomOffers, setUserData, setError, getAuthStatus, setOffersDataLoadingStatus};
