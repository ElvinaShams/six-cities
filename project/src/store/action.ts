import {createAction} from '@reduxjs/toolkit';
import { SortTypes } from '../const';

const changeCity = createAction('roomOffers/changeCity',(city: string) => ({
  payload: city,
})
);

const setSortType = createAction('roomOffers/sortOffers',(sortType:SortTypes) => ({
  payload: sortType,
})
);

export {changeCity, setSortType}
