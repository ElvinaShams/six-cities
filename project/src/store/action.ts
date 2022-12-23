import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthStatus, SortTypes } from '../const';
import { Review } from '../types/review';
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

const setNearbyOffer = createAction('review/NearbyOffer',(nearbyOffers:RoomOffer[]) => ({
  payload: nearbyOffers,
})
);

const loadComments = createAction('review/comments',(comments:Review[]) => ({
  payload: comments,
})
);

const setUserData = createAction<UserData | null>('server/setUserData');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export {changeCity, setSortType, redirectToRoute, setNearbyOffer, loadRoomOffers, loadComments, setUserData,getAuthStatus, setOffersDataLoadingStatus};
