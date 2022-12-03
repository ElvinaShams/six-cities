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

const getAuthStatus = createAction('server/AuthStatus',(authStatus:AuthStatus) => ({
  payload: authStatus,
})
);

const setUserData = createAction<UserData | null>('server/setUserData');

const setUserEmail = createAction<string | null>('server/setUserEmail');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export {changeCity, setSortType, setUserEmail, loadRoomOffers, setUserData,getAuthStatus, setOffersDataLoadingStatus};
