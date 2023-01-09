import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { RoomOffer } from '../../types/room-offer';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import { pushNotification } from '../notification/notification';

const fetchOffersList = createAsyncThunk<RoomOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList ',
  async (_arg, {dispatch, extra: api,  rejectWithValue}) => {
    try {
      const { data } = await api.get<RoomOffer[]>(APIRoute.Offers);
    return data;
  } catch (e) {
    return rejectWithValue (e);
  }
  },
);

const fetchOffer = createAsyncThunk<RoomOffer, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer ',
  async (id, {dispatch, extra: api,  rejectWithValue}) => {
    try {
      const { data } = await api.get(`${APIRoute.Offer}/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue (e);
    }

  },
);

const fetchComments = createAsyncThunk<Review[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments ',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (e) {
      dispatch(pushNotification({type: 'error', message: 'Can not download comments'}));
      throw e;
    }
  },
);

const fetchFavorites = createAsyncThunk<RoomOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites ',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<RoomOffer[]>(APIRoute.Favorites);
      return data;
    } catch (e) {
      dispatch(pushNotification({type: 'error', message: 'Can not download favorite hotels'}));
      throw e;
    }
  },
);

export { fetchOffersList, fetchComments, fetchOffer, fetchFavorites };
