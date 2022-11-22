import {createAction} from '@reduxjs/toolkit';
import { SortTypes } from '../const';
import { RoomOffer } from '../types/room-offer';

const changeCity = createAction('roomOffers/changeCity',(city: string) => ({
  payload: city,
})
);

const setOffers = createAction('roomOffers/setOffers',(roomOffers:RoomOffer[]) => ({
  payload: roomOffers,
})
);

const setSortType = createAction('roomOffers/sortOffers',(sortType:SortTypes) => ({
  payload: sortType,
})
);

export {changeCity, setOffers, setSortType}
